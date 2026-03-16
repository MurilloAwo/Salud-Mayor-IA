// api/analizar.js — Vercel Serverless Function
// La API key vive en variables de entorno de Vercel, nunca en el cliente.

export default async function handler(req, res) {
  // Solo aceptar POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { resumen, idioma } = req.body;

  if (!resumen) {
    return res.status(400).json({ error: "Missing 'resumen' in body" });
  }

  // ── Prompts clínicos completos ──────────────────────────────
  const sistemaEs = `Eres un asistente especializado en geriatría. Analiza los resultados de evaluaciones de un adulto mayor usando estos tests validados:

- Memoria (0–3 palabras recordadas tras distractor; ≥3=normal, 2=aceptable, ≤1=posible deterioro)
- TUG en segundos (<10s=normal, 10–19s=precaución caídas, ≥20s=riesgo alto)
- GDS-5 (0–5; 0–1=sin depresión, 2–3=posible depresión leve, 4–5=probable depresión)
- Orientación (0–3; aciertos en año, día y ciudad; <2=desorientación posible)
- Barthel simplificado (0–10; ≥9=independiente, 6–8=dependencia leve, <6=dependencia grave)
- Fluidez verbal (animales en 60s; ≥15=normal, 10–14=leve dificultad, <10=posible deterioro cognitivo)
- Espacio Vital (1=habitación, 2=casa, 3=barrio, 4=ciudad; <3=movilidad reducida)

Proporciona:
1. Resumen breve del estado cognitivo, emocional y funcional (máx. 3 oraciones)
2. Alertas principales (solo si hay valores fuera de rango)
3. Exactamente 3 recomendaciones concretas y prácticas para el cuidador o la familia

Tono: claro, compasivo y sin tecnicismos. Sé conciso. Responde en español.`;

  const sistemaEn = `You are a geriatric specialist assistant. Analyze the results of an older adult's assessments using these validated tests:

- Memory (0–3 words recalled after distractor; ≥3=normal, 2=acceptable, ≤1=possible decline)
- TUG in seconds (<10s=normal, 10–19s=fall caution, ≥20s=high fall risk)
- GDS-5 (0–5; 0–1=no depression, 2–3=possible mild depression, 4–5=probable depression)
- Orientation (0–3; correct answers on year, day, city; <2=possible disorientation)
- Simplified Barthel (0–10; ≥9=independent, 6–8=mild dependency, <6=severe dependency)
- Verbal fluency (animals in 60s; ≥15=normal, 10–14=mild difficulty, <10=possible cognitive decline)
- Life Space (1=room, 2=house, 3=neighborhood, 4=city; <3=reduced mobility)

Provide:
1. Brief summary of cognitive, emotional and functional status (max. 3 sentences)
2. Key alerts (only if values are out of range)
3. Exactly 3 concrete, practical recommendations for the caregiver or family

Tone: clear, compassionate, jargon-free. Be concise. Respond in English.`;

  const userEs = `Resultados del adulto mayor:\n${resumen}\n\nAnaliza los riesgos y da recomendaciones simples para el cuidador.`;
  const userEn = `Older adult results:\n${resumen}\n\nAnalyze risks and provide simple recommendations for the caregiver.`;

  const sistemaPrompt = idioma === "en" ? sistemaEn : sistemaEs;
  const userMsg       = idioma === "en" ? userEn    : userEs;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://saludmayor.vercel.app",
        "X-Title": "Salud Mayor AI"
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-chat",
        messages: [
          { role: "system", content: sistemaPrompt },
          { role: "user",   content: userMsg }
        ],
        temperature: 0.6,
        max_tokens: 600
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();

    // Si OpenRouter devuelve error (ej: sin créditos, key inválida)
    if (data.error) {
      console.error("OpenRouter error:", JSON.stringify(data.error));
      return res.status(200).json({
        choices: [{
          message: {
            content: `⚠️ Error de OpenRouter: ${data.error.message || JSON.stringify(data.error)}`
          }
        }]
      });
    }

    return res.status(200).json(data);

  } catch (error) {
    console.error("Error en /api/analizar:", error);
    return res.status(500).json({ error: error.message });
  }
}
