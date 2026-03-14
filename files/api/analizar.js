export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { resumen, idioma } = req.body;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // La clave viene de variable de entorno, nunca del navegador
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "X-Title": "Salud Mayor AI"
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-chat",
      messages: [
        { role: "system", content: idioma === "es" ? "Eres un asistente geriátrico..." : "You are a geriatric assistant..." },
        { role: "user", content: resumen }
      ],
      max_tokens: 600
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}