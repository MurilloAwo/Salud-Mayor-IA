/* ============================================================
   SeniorCare AI — app.js
   Tests: Memoria diferida | TUG | GDS-5 | Orientación |
          Barthel | Fluidez Verbal | Espacio Vital
   ============================================================ */

// ============================================================
// TRADUCCIONES
// ============================================================
const textos = {
  es: {
    titulo: "Salud Mayor IA",
    subtitulo: "Evaluación inteligente del bienestar en adultos mayores",
    espanol: "Español",
    ingles: "English",
    accessibility: "♿ Modo Accesible",
    progreso_sesion: "Progreso de la sesión",

    // Barra de progreso
    memoria_prog: "Memoria", tug_prog: "TUG", gds_prog: "GDS-5",
    orientacion_prog: "Orientación", barthel_prog: "Barthel",
    fluencia_prog: "Fluidez", espacio_prog: "Espacio Vital",

    // Test de Memoria
    memoria_titulo: "Test de Memoria",
    memoria_desc: "Observe y memorice estas palabras durante 30 segundos:",
    palabras: "Manzana · Casa · Libro",
    iniciar_memoria: "▶ Iniciar",
    memoria_espera: "¡Bien! Ahora realiza los otros tests. Regresa aquí después para recordar las palabras.",
    ya_listo: "✅ Ya terminé otros tests",
    memoria_recall: "¿Cuáles eran las 3 palabras que memorizaste?",
    placeholder_memoria: "Escribe las palabras aquí...",
    enviar: "Enviar",
    subir_foto: "O sube una foto de tu respuesta escrita:",
    leer_texto: "📷 Leer texto de la imagen",

    // TUG
    tug_titulo: "Test TUG",
    tug_desc: "Timed Up and Go: mide equilibrio y riesgo de caídas",
    tug_paso1: "Siéntese en una silla con apoyabrazos",
    tug_paso2: "Al pulsar INICIAR: levántese y camine 3 metros",
    tug_paso3: "Gire, regrese y siéntese nuevamente",
    tug_paso4: "Pulse DETENER cuando esté sentado",
    iniciar: "▶ Iniciar",
    detener: "⏹ Detener",
    guardar: "Guardar",

    // GDS-5
    gds_titulo_full: "Estado Emocional (GDS-5)",
    gds_desc: "Escala de Depresión Geriátrica validada — 5 preguntas",
    gds_p1: "¿Está satisfecho/a con su vida?",
    gds_p2: "¿Ha abandonado muchas de sus actividades e intereses?",
    gds_p3: "¿Siente que su vida está vacía?",
    gds_p4: "¿Se aburre con frecuencia?",
    gds_p5: "¿Está de buen humor la mayor parte del tiempo?",

    // Orientación
    orientacion_titulo: "Test de Orientación",
    orientacion_desc: "Evalúa el conocimiento del tiempo y lugar",
    anio_actual: "¿En qué año estamos?",
    dia_semana: "¿Qué día de la semana es hoy?",
    ciudad_vida: "¿En qué ciudad vive usted?",
    placeholder_ciudad: "Escriba su ciudad",
    lunes: "Lunes", martes: "Martes", miercoles: "Miércoles",
    jueves: "Jueves", viernes: "Viernes", sabado: "Sábado", domingo: "Domingo",

    // Barthel
    barthel_titulo: "Capacidad Funcional (Barthel)",
    barthel_desc: "Evalúa su independencia en actividades diarias básicas",
    barthel_alimentacion: "Alimentación",
    barthel_bano: "Baño / Higiene personal",
    barthel_vestido: "Vestido",
    barthel_traslado: "Traslado (silla–cama)",
    barthel_escaleras: "Subir escaleras",
    b_independiente: "Independiente",
    b_con_ayuda: "Con ayuda",
    b_dependiente: "Dependiente",
    b_supervision: "Supervisión",
    b_gran_ayuda: "Gran ayuda",

    // Fluidez verbal
    fluencia_titulo: "Fluidez Verbal",
    fluencia_desc: "Escriba todos los animales que recuerde en 60 segundos.",
    fluencia_placeholder: "Escriba aquí los animales, separados por coma o espacio...",

    // Espacio vital
    espacio_titulo: "Espacio Vital",
    espacio_desc: "Seleccione el mayor alcance de su movilidad en el último mes:",
    habitacion: "Habitación", casa: "Casa", barrio: "Barrio", ciudad: "Ciudad",

    // Generales
    si: "Sí", no: "No", evaluar: "Evaluar",

    // Resultados / semáforo
    resultado: "Resultado", evolucion: "Evolución",
    mostrar: "Mostrar:", todos: "Todos",
    analizar_ia: "🤖 Analizar con IA",
    borrar: "🗑️ Borrar datos",
    ver_resumen: "📋 Ver Resumen",
    resumen_sesion: "Resumen de Sesión",
    activar_voz: "Activar voz al analizar",
    detener_voz: "Detener voz",
    voz_detenida: "Voz detenida",
    no_datos: "No hay datos para analizar. Realice algunas evaluaciones primero.",
    analizando: "Analizando resultados con IA...",
    error_ia: "Error al conectar con la IA: ",
    footer_nota: "⚠️ Esta herramienta es de seguimiento, no reemplaza diagnóstico médico profesional.",

    verde: "✅ Normal",
    amarillo: "⚠️ Requiere atención",
    rojo: "🔴 Consulte a su médico",

    // Etiquetas de resultado
    puntaje_memoria: "Palabras recordadas: ",
    resultado_tug: "TUG — Tiempo: ",
    resultado_gds: "GDS-5 — Puntaje: ",
    resultado_orientacion: "Orientación — Puntaje: ",
    resultado_barthel: "Barthel — Puntaje: ",
    resultado_fluencia: "Fluidez verbal — Animales: ",
    resultado_espacio: "Espacio Vital: ",

    // Alertas
    alerta_responde: "Por favor, escribe las palabras que recuerdas.",
    alerta_completa: "Por favor, complete todos los campos.",
    alerta_responde_todo: "Por favor, responda todas las preguntas.",
    alerta_valido: "Por favor, ingresa un número válido.",
    confirmar_borrar: "¿Estás seguro de que quieres borrar todos los datos guardados?",
    selecciona_imagen: "Selecciona una imagen primero.",
    procesando_imagen: "Procesando imagen...",
    texto_extraido: "Texto extraído. Revisa y corrige si es necesario, luego presiona Enviar.",
    error_imagen: "Error al leer la imagen.",
  },

  en: {
    titulo: "SeniorCare AI",
    subtitulo: "Intelligent wellness assessment for older adults",
    espanol: "Spanish",
    ingles: "English",
    accessibility: "♿ Accessible Mode",
    progreso_sesion: "Session Progress",

    memoria_prog: "Memory", tug_prog: "TUG", gds_prog: "GDS-5",
    orientacion_prog: "Orientation", barthel_prog: "Barthel",
    fluencia_prog: "Fluency", espacio_prog: "Life Space",

    memoria_titulo: "Memory Test",
    memoria_desc: "Observe and memorize these words for 30 seconds:",
    palabras: "Apple · House · Book",
    iniciar_memoria: "▶ Start",
    memoria_espera: "Great! Now do the other tests. Come back here to recall the words.",
    ya_listo: "✅ I finished the other tests",
    memoria_recall: "What were the 3 words you memorized?",
    placeholder_memoria: "Write the words here...",
    enviar: "Submit",
    subir_foto: "Or upload a photo of your written answer:",
    leer_texto: "📷 Read text from image",

    tug_titulo: "TUG Test",
    tug_desc: "Timed Up and Go: measures balance and fall risk",
    tug_paso1: "Sit in a chair with armrests",
    tug_paso2: "When you press START: stand up and walk 3 meters",
    tug_paso3: "Turn around, come back and sit down",
    tug_paso4: "Press STOP when seated",
    iniciar: "▶ Start",
    detener: "⏹ Stop",
    guardar: "Save",

    gds_titulo_full: "Emotional State (GDS-5)",
    gds_desc: "Geriatric Depression Scale — 5 questions",
    gds_p1: "Are you basically satisfied with your life?",
    gds_p2: "Have you dropped many of your activities and interests?",
    gds_p3: "Do you feel that your life is empty?",
    gds_p4: "Do you often get bored?",
    gds_p5: "Are you in good spirits most of the time?",

    orientacion_titulo: "Orientation Test",
    orientacion_desc: "Assesses knowledge of time and place",
    anio_actual: "What year is it?",
    dia_semana: "What day of the week is it today?",
    ciudad_vida: "What city do you live in?",
    placeholder_ciudad: "Write your city",
    lunes: "Monday", martes: "Tuesday", miercoles: "Wednesday",
    jueves: "Thursday", viernes: "Friday", sabado: "Saturday", domingo: "Sunday",

    barthel_titulo: "Functional Capacity (Barthel)",
    barthel_desc: "Assesses independence in basic daily activities",
    barthel_alimentacion: "Feeding",
    barthel_bano: "Bathing / Personal hygiene",
    barthel_vestido: "Dressing",
    barthel_traslado: "Transfers (chair–bed)",
    barthel_escaleras: "Climbing stairs",
    b_independiente: "Independent",
    b_con_ayuda: "With help",
    b_dependiente: "Dependent",
    b_supervision: "Supervision",
    b_gran_ayuda: "Major help",

    fluencia_titulo: "Verbal Fluency",
    fluencia_desc: "Write all the animals you can remember in 60 seconds.",
    fluencia_placeholder: "Write the animals here, separated by comma or space...",

    espacio_titulo: "Life Space",
    espacio_desc: "Select the furthest area you have moved to in the last month:",
    habitacion: "Room", casa: "House", barrio: "Neighborhood", ciudad: "City",

    si: "Yes", no: "No", evaluar: "Evaluate",

    resultado: "Result", evolucion: "Evolution",
    mostrar: "Show:", todos: "All",
    analizar_ia: "🤖 Analyze with AI",
    borrar: "🗑️ Delete data",
    ver_resumen: "📋 View Summary",
    resumen_sesion: "Session Summary",
    activar_voz: "Enable voice on analysis",
    detener_voz: "Stop voice",
    voz_detenida: "Voice stopped",
    no_datos: "No data to analyze. Perform some evaluations first.",
    analizando: "Analyzing results with AI...",
    error_ia: "Error connecting to AI: ",
    footer_nota: "⚠️ This tool is for monitoring only and does not replace professional medical diagnosis.",

    verde: "✅ Normal",
    amarillo: "⚠️ Attention needed",
    rojo: "🔴 Consult your doctor",

    puntaje_memoria: "Words recalled: ",
    resultado_tug: "TUG — Time: ",
    resultado_gds: "GDS-5 — Score: ",
    resultado_orientacion: "Orientation — Score: ",
    resultado_barthel: "Barthel — Score: ",
    resultado_fluencia: "Verbal fluency — Animals: ",
    resultado_espacio: "Life Space: ",

    alerta_responde: "Please write the words you remember.",
    alerta_completa: "Please complete all fields.",
    alerta_responde_todo: "Please answer all questions.",
    alerta_valido: "Please enter a valid number.",
    confirmar_borrar: "Are you sure you want to delete all saved data?",
    selecciona_imagen: "Please select an image first.",
    procesando_imagen: "Processing image...",
    texto_extraido: "Text extracted. Check and correct if needed, then press Submit.",
    error_imagen: "Error reading the image.",
  }
};

// Palabras clave para cada idioma
const PALABRAS_CLAVE = {
  es: ["manzana", "casa", "libro"],
  en: ["apple", "house", "book"]
};

// Mapeo de días a número JS (0=domingo)
const DIA_A_NUMERO = {
  domingo: 0, lunes: 1, martes: 2, miercoles: 3,
  jueves: 4, viernes: 5, sabado: 6
};

let idiomaActual = "es";

// ============================================================
// IDIOMA
// ============================================================
function actualizarIdioma(idioma) {
  idiomaActual = idioma;
  const t = textos[idioma];
  document.documentElement.lang = idioma;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!t[key]) return;
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t[key];
    } else {
      el.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key]) el.placeholder = t[key];
  });
}

function setSpanish() {
  actualizarIdioma("es");
  alert("Idioma cambiado a Español");
}

function setEnglish() {
  actualizarIdioma("en");
  alert("Language changed to English");
}

// ============================================================
// SEMÁFORO DE RESULTADO
// ============================================================
function mostrarResultadoSemaforo(detalle, nivel) {
  const t = textos[idiomaActual];
  const iconos = { verde: "✅", amarillo: "⚠️", rojo: "🔴" };
  const div = document.getElementById("resultado");

  div.innerHTML = `
    <div class="semaforo semaforo-${nivel}">
      <div class="semaforo-icono">${iconos[nivel]}</div>
      <div class="semaforo-texto">
        <div class="semaforo-label">${t[nivel]}</div>
        <div class="semaforo-detalle">${detalle}</div>
      </div>
    </div>`;

  div.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ============================================================
// PROGRESO DE SESIÓN
// ============================================================
function marcarProgreso(tipo) {
  const el = document.getElementById("prog-" + tipo);
  if (el) el.classList.add("done");
}

// ============================================================
// TEST 1 — MEMORIA CON RECALL DIFERIDO
// ============================================================
let memoriaFase = "inicio";
let memoriaCountdownInterval;

function iniciarMemoria() {
  document.getElementById("btnIniciarMemoria").disabled = true;
  const countdown = document.getElementById("memoriaCountdown");
  countdown.style.display = "block";
  let segundos = 30;
  countdown.textContent = segundos;

  memoriaCountdownInterval = setInterval(() => {
    segundos--;
    countdown.textContent = segundos;
    if (segundos <= 0) {
      clearInterval(memoriaCountdownInterval);
      pasarFaseEspera();
    }
  }, 1000);
}

function pasarFaseEspera() {
  memoriaFase = "espera";
  document.getElementById("memoria-fase1").classList.add("hidden");
  document.getElementById("memoria-fase2").classList.remove("hidden");
}

function activarRecall() {
  memoriaFase = "recordar";
  document.getElementById("memoria-fase2").classList.add("hidden");
  document.getElementById("memoria-fase3").classList.remove("hidden");
}

function evaluarMemoria() {
  const t = textos[idiomaActual];
  let respuesta = document.getElementById("respuestaMemoria").value.trim();
  if (!respuesta) { alert(t.alerta_responde); return; }

  respuesta = normalizar(respuesta);
  const palabrasIngresadas = respuesta.split(/[\s,;.]+/);
  const clave = PALABRAS_CLAVE[idiomaActual];
  let score = 0;
  clave.forEach(p => {
    if (palabrasIngresadas.some(pi => pi.includes(normalizar(p)))) score++;
  });

  let nivel = score === 3 ? "verde" : score === 2 ? "amarillo" : "rojo";
  const desc = idiomaActual === "es"
    ? `${score}/3 palabras — ${score === 3 ? "Excelente" : score === 2 ? "Aceptable" : "Deterioro posible"}`
    : `${score}/3 words — ${score === 3 ? "Excellent" : score === 2 ? "Acceptable" : "Possible decline"}`;

  mostrarResultadoSemaforo(t.puntaje_memoria + desc, nivel);
  guardarResultado("memoria", score);
  marcarProgreso("memoria");
  memoriaFase = "completado";
}

// ============================================================
// TEST 2 — TUG (Timed Up and Go)
// ============================================================
let tugStartTime;
let tugInterval;
let tugActivo = false;

function iniciarTUG() {
  if (tugActivo) return;
  tugActivo = true;
  tugStartTime = Date.now();

  document.getElementById("btnIniciarTUG").disabled = true;
  document.getElementById("btnDetenerTUG").disabled = false;
  document.getElementById("tugTimer").classList.add("activo");

  tugInterval = setInterval(() => {
    const elapsed = (Date.now() - tugStartTime) / 1000;
    document.getElementById("tugTimer").textContent = elapsed.toFixed(1) + " s";
  }, 100);
}

function detenerTUG() {
  if (!tugActivo) return;
  clearInterval(tugInterval);
  tugActivo = false;

  const elapsed = ((Date.now() - tugStartTime) / 1000);
  const segundos = parseFloat(elapsed.toFixed(1));

  document.getElementById("btnIniciarTUG").disabled = false;
  document.getElementById("btnDetenerTUG").disabled = true;
  document.getElementById("tugTimer").classList.remove("activo");
  document.getElementById("tugReferencia").classList.remove("hidden");

  const t = textos[idiomaActual];
  let nivel, desc;
  if (segundos < 10) {
    nivel = "verde";
    desc = idiomaActual === "es" ? "Normal (< 10s) — Sin riesgo de caídas" : "Normal (< 10s) — No fall risk";
  } else if (segundos < 20) {
    nivel = "amarillo";
    desc = idiomaActual === "es" ? "Precaución (10–19s) — Riesgo leve de caídas" : "Caution (10–19s) — Mild fall risk";
  } else {
    nivel = "rojo";
    desc = idiomaActual === "es" ? "Riesgo alto (≥ 20s) — Consulte fisioterapeuta" : "High risk (≥ 20s) — Consult physiotherapist";
  }

  mostrarResultadoSemaforo(`${t.resultado_tug}${segundos}s — ${desc}`, nivel);
  guardarResultado("tug", segundos);
  marcarProgreso("tug");
}

// ============================================================
// TEST 3 — GDS-5 (Escala de Depresión Geriátrica)
// ============================================================
function evaluarGDS() {
  const t = textos[idiomaActual];
  let total = 0;

  for (let i = 1; i <= 5; i++) {
    const sel = document.querySelector(`input[name="gds${i}"]:checked`);
    if (!sel) { alert(t.alerta_responde_todo); return; }
    total += parseInt(sel.value);
  }

  let nivel, desc;
  if (total <= 1) {
    nivel = "verde";
    desc = idiomaActual === "es" ? "Sin indicadores de depresión" : "No depression indicators";
  } else if (total <= 3) {
    nivel = "amarillo";
    desc = idiomaActual === "es" ? "Posible depresión leve — Monitorear" : "Possible mild depression — Monitor";
  } else {
    nivel = "rojo";
    desc = idiomaActual === "es" ? "Probable depresión — Consulte un profesional" : "Probable depression — Consult a professional";
  }

  mostrarResultadoSemaforo(`${t.resultado_gds}${total}/5 — ${desc}`, nivel);
  guardarResultado("gds", total);
  marcarProgreso("gds");
}

// ============================================================
// TEST 4 — ORIENTACIÓN (tiempo y lugar)
// ============================================================
function evaluarOrientacion() {
  const t = textos[idiomaActual];
  const anioIngresado = parseInt(document.getElementById("orientAnio").value);
  const diaSeleccionado = document.getElementById("orientDia").value;
  const ciudad = document.getElementById("orientCiudad").value.trim();

  if (!anioIngresado || !ciudad) { alert(t.alerta_completa); return; }

  const ahora = new Date();
  const anioReal = ahora.getFullYear();
  const diaRealNum = ahora.getDay(); // 0=domingo

  let score = 0;
  const anioOk = anioIngresado === anioReal;
  const diaOk = DIA_A_NUMERO[diaSeleccionado] === diaRealNum;
  if (anioOk) score++;
  if (diaOk) score++;
  score++; // Ciudad siempre se registra (no se puede verificar remotamente)

  let nivel = score === 3 ? "verde" : score === 2 ? "amarillo" : "rojo";

  const anioStr = anioOk ? "✓" : "✗";
  const diaStr  = diaOk  ? "✓" : "✗";
  const desc = idiomaActual === "es"
    ? `${score}/3 — Año: ${anioIngresado} ${anioStr} | Día: ${diaSeleccionado} ${diaStr} | Ciudad: ${ciudad}`
    : `${score}/3 — Year: ${anioIngresado} ${anioStr} | Day: ${diaSeleccionado} ${diaStr} | City: ${ciudad}`;

  mostrarResultadoSemaforo(t.resultado_orientacion + desc, nivel);
  guardarResultado("orientacion", score);
  marcarProgreso("orientacion");
}

// ============================================================
// TEST 5 — ÍNDICE DE BARTHEL (simplificado, max 10)
// ============================================================
function evaluarBarthel() {
  const t = textos[idiomaActual];
  const alim  = parseInt(document.getElementById("b_alimentacion").value);
  const bano  = parseInt(document.getElementById("b_bano").value);
  const vest  = parseInt(document.getElementById("b_vestido").value);
  const trasl = parseInt(document.getElementById("b_traslado").value);
  const escal = parseInt(document.getElementById("b_escaleras").value);

  const total = alim + bano + vest + trasl + escal;
  const MAX = 10; // 2+1+2+3+2
  const pct = Math.round((total / MAX) * 100);

  let nivel, desc;
  if (pct >= 90) {
    nivel = "verde";
    desc = idiomaActual === "es" ? "Independiente" : "Independent";
  } else if (pct >= 60) {
    nivel = "amarillo";
    desc = idiomaActual === "es" ? "Dependencia leve" : "Mild dependency";
  } else if (pct >= 30) {
    nivel = "amarillo";
    desc = idiomaActual === "es" ? "Dependencia moderada" : "Moderate dependency";
  } else {
    nivel = "rojo";
    desc = idiomaActual === "es" ? "Dependencia grave — Requiere apoyo" : "Severe dependency — Requires support";
  }

  mostrarResultadoSemaforo(`${t.resultado_barthel}${total}/${MAX} (${pct}%) — ${desc}`, nivel);
  guardarResultado("barthel", total);
  marcarProgreso("barthel");
}

// ============================================================
// TEST 6 — FLUIDEZ VERBAL (animales en 60 segundos)
// ============================================================
let fluenciaInterval;
let fluenciaActiva = false;

function iniciarFluencia() {
  if (fluenciaActiva) return;
  fluenciaActiva = true;

  const textarea = document.getElementById("fluenciaInput");
  const timerEl = document.getElementById("fluenciaTimer");
  const btn = document.getElementById("btnIniciarFluencia");

  textarea.disabled = false;
  textarea.value = "";
  textarea.focus();
  btn.disabled = true;

  let segundos = 60;
  timerEl.textContent = segundos;
  timerEl.classList.remove("urgente");

  fluenciaInterval = setInterval(() => {
    segundos--;
    timerEl.textContent = segundos;
    if (segundos <= 10) timerEl.classList.add("urgente");
    if (segundos <= 0) {
      clearInterval(fluenciaInterval);
      fluenciaActiva = false;
      textarea.disabled = true;
      btn.disabled = false;
      evaluarFluencia();
    }
  }, 1000);
}

function evaluarFluencia() {
  const t = textos[idiomaActual];
  const texto = document.getElementById("fluenciaInput").value.trim();
  const palabras = texto.split(/[\s,;.\n]+/).filter(p => p.length > 1);
  const unicos = [...new Set(palabras.map(p => normalizar(p)))];
  const cantidad = unicos.length;

  let nivel, desc;
  if (cantidad >= 15) {
    nivel = "verde";
    desc = idiomaActual === "es"
      ? `${cantidad} animales — Rendimiento normal`
      : `${cantidad} animals — Normal performance`;
  } else if (cantidad >= 10) {
    nivel = "amarillo";
    desc = idiomaActual === "es"
      ? `${cantidad} animales — Ligera dificultad (esperado: ≥15)`
      : `${cantidad} animals — Slight difficulty (expected: ≥15)`;
  } else {
    nivel = "rojo";
    desc = idiomaActual === "es"
      ? `${cantidad} animales — Posible deterioro cognitivo (consultar)`
      : `${cantidad} animals — Possible cognitive decline (consult)`;
  }

  mostrarResultadoSemaforo(t.resultado_fluencia + desc, nivel);
  guardarResultado("fluencia", cantidad);
  marcarProgreso("fluencia");
}

// ============================================================
// TEST 7 — ESPACIO VITAL
// ============================================================
let espacioSeleccionado = 1;

function seleccionarEspacio(valor, el) {
  espacioSeleccionado = valor;
  document.getElementById("espacio").value = valor;
  document.querySelectorAll(".espacio-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
}

function guardarEspacio() {
  const t = textos[idiomaActual];
  const labels = { 1: t.habitacion, 2: t.casa, 3: t.barrio, 4: t.ciudad };

  let nivel, desc;
  if (espacioSeleccionado >= 3) {
    nivel = "verde";
    desc = idiomaActual === "es" ? "Buena movilidad social" : "Good social mobility";
  } else if (espacioSeleccionado === 2) {
    nivel = "amarillo";
    desc = idiomaActual === "es" ? "Movilidad reducida al hogar" : "Mobility limited to home";
  } else {
    nivel = "rojo";
    desc = idiomaActual === "es" ? "Confinado a habitación — Atención urgente" : "Confined to room — Urgent attention";
  }

  mostrarResultadoSemaforo(`${t.resultado_espacio}${labels[espacioSeleccionado]} — ${desc}`, nivel);
  guardarResultado("espacio", espacioSeleccionado);
  marcarProgreso("espacio");
}

// ============================================================
// RESUMEN DE SESIÓN
// ============================================================
function obtenerNivelDato(d) {
  switch (d.tipo) {
    case "memoria":     return d.valor >= 3 ? "verde" : d.valor >= 2 ? "amarillo" : "rojo";
    case "tug":         return d.valor < 10 ? "verde" : d.valor < 20 ? "amarillo" : "rojo";
    case "gds":         return d.valor <= 1 ? "verde" : d.valor <= 3 ? "amarillo" : "rojo";
    case "orientacion": return d.valor >= 3 ? "verde" : d.valor >= 2 ? "amarillo" : "rojo";
    case "barthel":     return d.valor >= 9 ? "verde" : d.valor >= 6 ? "amarillo" : "rojo";
    case "fluencia":    return d.valor >= 15 ? "verde" : d.valor >= 10 ? "amarillo" : "rojo";
    case "espacio":     return d.valor >= 3 ? "verde" : d.valor >= 2 ? "amarillo" : "rojo";
    default:            return "amarillo";
  }
}

function generarResumen() {
  const t = textos[idiomaActual];
  const datos = JSON.parse(localStorage.getItem("datos")) || [];
  const hoy = new Date().toLocaleDateString();
  const datosHoy = datos.filter(d => d.fecha === hoy);

  if (datosHoy.length === 0) {
    document.getElementById("resultado").innerHTML = `<p style="padding:1rem;color:#64748b">${t.no_datos}</p>`;
    return;
  }

  const etiquetas = {
    memoria: t.memoria_prog, tug: t.tug_prog, gds: t.gds_prog,
    orientacion: t.orientacion_prog, barthel: t.barthel_prog,
    fluencia: t.fluencia_prog, espacio: t.espacio_prog
  };
  const iconos = { verde: "🟢", amarillo: "🟡", rojo: "🔴" };

  let html = `<div class="resumen-grid">`;
  datosHoy.forEach(d => {
    const nivel = obtenerNivelDato(d);
    html += `
      <div class="resumen-item ${nivel}">
        <div class="resumen-icono">${iconos[nivel]}</div>
        <div class="resumen-info">
          <strong>${etiquetas[d.tipo] || d.tipo}</strong>
          <span>${d.valor}</span>
        </div>
      </div>`;
  });
  html += `</div>`;

  const seccion = document.getElementById("resumenSection");
  document.getElementById("resumenContenido").innerHTML = html;
  seccion.style.display = "block";
  seccion.scrollIntoView({ behavior: "smooth" });
}

// ============================================================
// ANÁLISIS CON IA (OpenRouter — NOTA SEGURIDAD: mover a backend)
// ============================================================
async function analizarIA() {
  const t = textos[idiomaActual];
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `<p style="padding:1rem;color:#64748b">⏳ ${t.analizando}</p>`;

  const datos = JSON.parse(localStorage.getItem("datos")) || [];
  if (datos.length === 0) {
    resultadoDiv.innerHTML = `<p style="padding:1rem;color:#64748b">${t.no_datos}</p>`;
    return;
  }

  const resumen = datos.map(d => `- ${d.tipo}: ${d.valor} (${d.fecha})`).join("\n");

  const sistemaPrompt = idiomaActual === "es"
    ? `Eres un asistente especializado en geriatría. Analiza los resultados de evaluaciones de un adulto mayor usando los siguientes tests validados: Test de Memoria (0-3 palabras; ≥3=normal), TUG en segundos (<10s=normal, 10-19s=precaución, ≥20s=riesgo de caídas), GDS-5 (0-5; 0-1=normal, 2-3=posible depresión leve, 4-5=probable depresión), Orientación (0-3; orientación temporal/espacial), Barthel simplificado (0-10; ≥9=independiente, <6=dependencia grave), Fluidez Verbal (número de animales en 60s; ≥15=normal, <10=posible deterioro cognitivo), Espacio Vital (1=habitación, 4=ciudad). Proporciona un informe claro y compasivo con: resumen del estado cognitivo, emocional y funcional; alertas principales; y 3 recomendaciones concretas para el cuidador o familia. Sé breve y claro. Responde en español.`
    : `You are a geriatric specialist assistant. Analyze the results of an older adult's assessments using these validated tests: Memory Test (0-3 words; ≥3=normal), TUG in seconds (<10s=normal, 10-19s=caution, ≥20s=fall risk), GDS-5 (0-5; 0-1=normal, 2-3=possible mild depression, 4-5=probable depression), Orientation (0-3; time/place awareness), Simplified Barthel (0-10; ≥9=independent, <6=severe dependency), Verbal Fluency (number of animals in 60s; ≥15=normal, <10=possible cognitive decline), Life Space (1=room, 4=city). Provide a clear, compassionate report with: summary of cognitive, emotional and functional status; key alerts; and 3 concrete recommendations for the caregiver or family. Be concise and clear. Respond in English.`;

  const userMsg = idiomaActual === "es"
    ? `Resultados del adulto mayor:\n${resumen}\n\nAnaliza si hay riesgos y da recomendaciones simples.`
    : `Older adult results:\n${resumen}\n\nAnalyze risks and provide simple recommendations.`;

  try {
    // NOTA DE SEGURIDAD: Esta API key está expuesta en el cliente intencionalmente
    // para el prototipo académico. En producción, mover a un servidor backend.
    const response = await fetch("/api/analizar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ resumen, idioma: idiomaActual })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errText}`);
    }

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      const texto = data.choices[0].message.content;
      resultadoDiv.innerHTML = `<div style="padding:0.5rem;white-space:pre-wrap">${texto}</div>`;
      if (document.getElementById("vozActiva").checked) speak(texto);
    } else {
      throw new Error("La IA no devolvió una respuesta válida.");
    }
  } catch (error) {
    console.error(error);
    resultadoDiv.innerHTML = `<p style="padding:1rem;color:#dc2626">${t.error_ia}${error.message}</p>`;
  }
}

// ============================================================
// GRÁFICO DE EVOLUCIÓN
// ============================================================
let chartInstance = null;

function dibujarGrafico(tipo = "todos") {
  const datos = JSON.parse(localStorage.getItem("datos")) || [];
  const filtrados = tipo === "todos" ? datos : datos.filter(d => d.tipo === tipo);

  if (filtrados.length === 0) {
    if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
    return;
  }

  const labels  = filtrados.map(d => `${d.tipo} ${d.fecha}`);
  const valores = filtrados.map(d => parseFloat(d.valor));
  const ctx = document.getElementById("chart").getContext("2d");

  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: tipo === "todos" ? (idiomaActual === "es" ? "Todos los resultados" : "All results") : tipo,
        data: valores,
        borderColor: "#0891b2",
        backgroundColor: "rgba(8, 145, 178, 0.08)",
        tension: 0.35,
        pointBackgroundColor: "#f97316",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        tooltip: { enabled: true }
      },
      scales: { y: { beginAtZero: true } }
    }
  });
}

function cambiarTipoGrafico() {
  dibujarGrafico(document.getElementById("tipoGrafico").value);
}

// ============================================================
// OCR (Tesseract)
// ============================================================
async function leerImagen() {
  const t = textos[idiomaActual];
  const file = document.getElementById("imagenMemoria").files[0];
  if (!file) { alert(t.selecciona_imagen); return; }

  document.getElementById("resultado").innerHTML = `<p style="padding:1rem;color:#64748b">⏳ ${t.procesando_imagen}</p>`;
  try {
    const lang = idiomaActual === "es" ? "spa" : "eng";
    const { data: { text } } = await Tesseract.recognize(file, lang, {
      logger: m => console.log(m)
    });
    document.getElementById("respuestaMemoria").value = text.trim();
    document.getElementById("resultado").innerHTML = `<p style="padding:1rem;color:#16a34a">✅ ${t.texto_extraido}</p>`;
  } catch (error) {
    console.error(error);
    document.getElementById("resultado").innerHTML = `<p style="padding:1rem;color:#dc2626">${t.error_imagen}</p>`;
  }
}

// ============================================================
// VOZ (Web Speech API)
// ============================================================
function stopVoice() {
  window.speechSynthesis.cancel();
  // Actualizar ícono del botón
  const btn = document.getElementById("btnDetenerVoz");
  if (btn) {
    btn.textContent = "🔇 " + (textos[idiomaActual].voz_detenida || "Voz detenida");
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = "⏹ " + (textos[idiomaActual].detener_voz || "Detener voz");
      btn.disabled = false;
    }, 1500);
  }
}

function speak(text) {
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  const langCode = idiomaActual === "es" ? "es-ES" : "en-US";
  utt.lang = langCode;
  utt.rate = 0.88;

  const asignarVozYHablar = () => {
    const voices = window.speechSynthesis.getVoices();
    const prefijo = idiomaActual === "es" ? "es" : "en";
    const voz = voices.find(v => v.lang === langCode)
             || voices.find(v => v.lang.startsWith(prefijo));
    if (voz) utt.voice = voz;
    window.speechSynthesis.speak(utt);
  };

  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    asignarVozYHablar();
  } else {
    window.speechSynthesis.onvoiceschanged = asignarVozYHablar;
  }
}

// Lee el contenido de una tarjeta en voz alta
function leerTarjeta(...keys) {
  const t = textos[idiomaActual];
  const texto = keys.map(k => t[k] || "").filter(Boolean).join(". ");
  speak(texto);
}

// ============================================================
// ALMACENAMIENTO LOCAL
// ============================================================
function guardarResultado(tipo, valor) {
  window.speechSynthesis.cancel(); // detener voz al guardar nuevo resultado
  const datos = JSON.parse(localStorage.getItem("datos")) || [];
  datos.push({
    fecha: new Date().toLocaleDateString(),
    tipo,
    valor
  });
  localStorage.setItem("datos", JSON.stringify(datos));
  dibujarGrafico();
}

function borrarDatos() {
  const t = textos[idiomaActual];
  if (!confirm(t.confirmar_borrar)) return;
  window.speechSynthesis.cancel(); // detener voz al borrar
  localStorage.removeItem("datos");
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resumenSection").style.display = "none";
  // Resetear progreso
  document.querySelectorAll(".progress-item").forEach(el => el.classList.remove("done"));
}

// ============================================================
// ACCESIBILIDAD
// ============================================================
function toggleAccessible() {
  document.body.classList.toggle("accessible");
  const isOn = document.body.classList.contains("accessible");
  // Aumentar fuente base
  document.body.style.fontSize = isOn ? "20px" : "";
}

// ============================================================
// UTILIDADES
// ============================================================
function normalizar(texto) {
  return texto.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
window.onload = function () {
  dibujarGrafico();
  actualizarIdioma(idiomaActual);
};
