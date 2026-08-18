/* ============================================================
   CONFIG — Lo ÚNICO que editas para cada cliente nuevo.
   No toques app.js ni styles.css salvo que quieras cambiar el diseño.
   ============================================================ */

const CONFIG = {

  /* --- TEMA: "dental" o "spa" ------------------------------ */
  tema: "dental",

  /* --- NEGOCIO --------------------------------------------- */
  negocio: {
    nombre: "Clínica Alameda",
    rubro: "Odontología integral",
    lema: "Tu cita queda agendada en menos de un minuto.",
    descripcion:
      "Consultorio dental en Tijuana con atención sin prisas, diagnóstico transparente y planes de tratamiento que te explicamos antes de empezar.",
    telefono: "664 164 9998",
    // Solo dígitos, con código de país (52 México). Sin +, sin espacios.
    whatsapp: "526641649998",
    direccion: "Av. Revolución 1234, Zona Centro, Tijuana, B.C.",
    // Pega aquí el iframe src de Google Maps (Compartir > Insertar un mapa)
    mapaEmbed:
      "https://www.google.com/maps?q=Tijuana+Baja+California&output=embed",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },

  /* --- CAL.COM (agendador + cobro con Stripe) --------------- */
  calcom: {
    // Enlace real del cliente
    enlace: "angel-2q2ukt/consulta",
    // "month_view" (calendario grande) | "column_view" | "week_view"
    vista: "month_view",
    // true = oculta título, duración y precio dentro del embed
    ocultarDetalles: false,
  },

  /* --- AGENDA (solo alimenta la tabla de horarios del sitio) --- */
  agenda: {

    /* MODO — decide cómo se agenda:
       "cal"       → calendario real de Cal.com embebido (recomendado)
       "google"    → Google Calendar Appointment Schedule embebido
       "whatsapp"  → selector propio que arma un mensaje de WhatsApp (sin backend)
       Instrucciones de configuración en LEEME.md                      */
    modo: "cal",

    /* Para modo "cal": tu usuario de Cal.com, sin diagonal al final */
    calUsuario: "https://cal.com/solvetech-demo",

    /* Para modo "google": pega la URL que te da Google
       (Calendar > tu programación de citas > Compartir > Copiar vínculo)
       y agrégale ?gv=true al final                                   */
    googleUrl: "https://calendar.google.com/calendar/appointments/schedules/PEGA_AQUI?gv=true",

    /* Estos tres solo aplican al modo "whatsapp" */
    diasVisibles: 14,        // cuántos días muestra el calendario
    duracionMinutos: 60,     // largo de cada espacio
    anticipacionHoras: 3,    // no permitir citas antes de X horas
    // 0 = domingo, 1 = lunes ... 6 = sábado. null = cerrado.
    horarios: {
      0: null,
      1: { abre: "09:00", cierra: "19:00" },
      2: { abre: "09:00", cierra: "19:00" },
      3: { abre: "09:00", cierra: "19:00" },
      4: { abre: "09:00", cierra: "19:00" },
      5: { abre: "09:00", cierra: "19:00" },
      6: { abre: "09:00", cierra: "14:00" },
    },
  },

  /* --- SERVICIOS ------------------------------------------- */
  /* "slug" = el nombre del tipo de evento en Cal.com.
     Solo se usa en modo "cal". Si lo dejas vacío, el calendario
     muestra todos los servicios juntos.                          */
  servicios: [
    {
      nombre: "Limpieza y valoración",
      descripcion: "Revisión completa, limpieza profunda y plan de tratamiento por escrito.",
      duracion: "45 min",
      precio: "$600",
      slug: "limpieza",
    },
    {
      nombre: "Resina dental",
      descripcion: "Reparación de caries con material del color de tu diente.",
      duracion: "60 min",
      precio: "$900",
      slug: "resina",
    },
    {
      nombre: "Blanqueamiento",
      descripcion: "Aclarado en consultorio con protección de encías. Resultado el mismo día.",
      duracion: "90 min",
      precio: "$3,500",
      slug: "blanqueamiento",
    },
    {
      nombre: "Extracción",
      descripcion: "Procedimiento con anestesia local e indicaciones de cuidado posterior.",
      duracion: "60 min",
      precio: "$1,200",
      slug: "extraccion",
    },
    {
      nombre: "Ortodoncia — primera cita",
      descripcion: "Estudio, radiografía y presupuesto del tratamiento completo.",
      duracion: "45 min",
      precio: "$800",
      slug: "ortodoncia",
    },
    {
      nombre: "Urgencia dental",
      descripcion: "Dolor, golpe o pieza fracturada. Te atendemos el mismo día.",
      duracion: "45 min",
      precio: "Según caso",
      slug: "urgencia",
    },
  ],

  /* --- POR QUÉ ELEGIRNOS ----------------------------------- */
  razones: [
    {
      titulo: "Te decimos el precio antes",
      texto: "Presupuesto por escrito en la primera cita. Sin cargos que aparecen después.",
    },
    {
      titulo: "Atención el mismo día",
      texto: "Reservamos espacios diarios para urgencias. Si te duele hoy, no esperas a la semana que entra.",
    },
    {
      titulo: "Una sola persona te atiende",
      texto: "El profesional que te valora es el que te trata. No te pasan de mano en mano.",
    },
  ],

  /* --- TESTIMONIOS ----------------------------------------- */
  testimonios: [
    {
      texto: "Llegué con un dolor que traía días. Me dieron cita el mismo día y salí sin molestia.",
      autor: "Marisol G.",
      detalle: "Urgencia dental",
    },
    {
      texto: "Me explicaron todo el tratamiento con costos antes de empezar. Eso no lo había visto en otro lado.",
      autor: "Javier R.",
      detalle: "Ortodoncia",
    },
    {
      texto: "Agendé por la página un domingo en la noche y el lunes ya tenía confirmación.",
      autor: "Andrea L.",
      detalle: "Limpieza",
    },
  ],

  /* --- PREGUNTAS FRECUENTES -------------------------------- */
  faq: [
    {
      pregunta: "¿Necesito cita previa?",
      respuesta: "Sí, así te garantizamos tu horario y no esperas en recepción. Puedes agendar desde esta página en menos de un minuto.",
    },
    {
      pregunta: "¿Aceptan tarjeta?",
      respuesta: "Aceptamos efectivo, tarjeta de débito y crédito, y transferencia.",
    },
    {
      pregunta: "¿Qué pasa si no puedo llegar?",
      respuesta: "Avísanos por WhatsApp con al menos 2 horas de anticipación y reprogramamos tu cita sin costo.",
    },
    {
      pregunta: "¿Atienden urgencias?",
      respuesta: "Sí. Escríbenos por WhatsApp describiendo qué te pasa y te damos el primer espacio disponible del día.",
    },
  ],
};

/* ============================================================
   EJEMPLO DE CONFIG PARA SPA
   Copia este bloque sobre el de arriba cuando el cliente sea spa.
   ------------------------------------------------------------
   tema: "spa",
   negocio: {
     nombre: "Casa Lima",
     rubro: "Spa y bienestar",
     lema: "Aparta tu espacio y desconéctate un rato.",
     ...
   },
   servicios: [
     { nombre: "Masaje relajante", descripcion: "...", duracion: "60 min", precio: "$750" },
     { nombre: "Facial hidratante", ... },
     { nombre: "Masaje descontracturante", ... },
     { nombre: "Ritual de pareja", ... },
   ],
   ============================================================ */
