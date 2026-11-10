// Textos en castellano (idioma por defecto, servido en /).
export default {
  meta: {
    title: 'Segell · Tarjeta de fidelidad y avisos en el móvil de tus clientes',
    description:
      'Tarjetas de sellos y fidelización en Apple Wallet y Google Wallet, con notificaciones push. Sin apps.',
  },
  nav: {
    how: 'Cómo funciona',
    features: 'Funciones',
    pricing: 'Precios',
    cta: 'Pruébalo gratis',
    menuLabel: 'Principal',
    langLabel: 'Idioma',
    contact: 'Contacto',
  },
  hero: {
    tag: 'Sin apps · Apple Wallet y Google Wallet',
    title: 'Tu tarjeta de sellos, ahora en el móvil de tus clientes.',
    lead:
      'Adiós a los cartoncitos que se pierden en la cartera. Tus clientes escanean un QR, guardan la tarjeta en su Wallet y tú les avisas de cada promo con una notificación.',
    ctaPrimary: 'Crea tu tarjeta gratis',
    ctaSecondary: 'Ver cómo funciona',
    note: 'Lista en 10 minutos. Sin tarjeta de crédito.',
    pickerLegend: 'Prueba la demo como:',
  },
  demo: {
    ariaLabel: (name, count, total) => `Tarjeta de ${name} con ${count} de ${total} sellos`,
    stampsLabel: 'Sellos',
    rewardReady: '¡Recompensa lista para canjear!',
    remaining: (n, reward) => `Te faltan ${n} para tu ${reward}`,
    qr: 'código QR',
    now: 'ahora',
    reset: 'Reiniciar tarjeta',
    stamp: 'Sellar +1',
    hint: 'Pruébalo: pulsa para sellar',
  },
  sectors: {
    cafeteria: {
      label: 'Cafetería',
      name: 'Café Lola',
      kind: 'Cafetería',
      reward: 'café gratis',
      rewardPush: '¡Tarjeta completa! Tu próximo café corre de nuestra cuenta ☕',
    },
    restaurante: {
      label: 'Restaurante',
      name: 'Casa Pepa',
      kind: 'Restaurante',
      reward: 'postre gratis',
      rewardPush: '¡Tarjeta completa! El postre de hoy va por nosotros.',
    },
    peluqueria: {
      label: 'Peluquería',
      name: 'Tijeras',
      kind: 'Peluquería',
      reward: 'corte gratis',
      rewardPush: '¡Tarjeta completa! Tu próximo corte es gratis.',
    },
    gimnasio: {
      label: 'Gimnasio',
      name: 'Fuerza Barrio',
      kind: 'Gimnasio',
      reward: 'mes gratis',
      rewardPush: '¡10 entrenos! Tu próximo mes va con descuento.',
    },
  },
  how: {
    title: 'Tan fácil como poner un sello. Literalmente.',
    steps: [
      {
        title: 'Diseña tu tarjeta',
        body: 'Sube tu logo, elige colores y decide la recompensa. Sellos, puntos o cupones.',
      },
      {
        title: 'Pon el QR en el mostrador',
        body: 'Tus clientes lo escanean y la tarjeta se guarda en su Wallet. Sin descargar nada.',
      },
      {
        title: 'Sella y avisa',
        body: 'Suma sellos desde tu móvil y lanza notificaciones push cuando quieras llenar el local.',
      },
    ],
  },
  features: {
    title: 'Todo lo que tu cartoncito no podía hacer',
    items: [
      {
        kicker: 'Sellos',
        title: 'El 10º café, invita la casa',
        body: 'La clásica tarjeta de sellos, pero que nunca se olvida en casa.',
      },
      {
        kicker: 'Puntos',
        title: 'Cada euro suma',
        body: 'Puntos canjeables por lo que tú decidas: un corte, un menú, un mes de gimnasio.',
      },
      {
        kicker: 'Notificaciones push',
        title: 'Un martes flojo, arreglado',
        body: 'Manda una promo y aparece en la pantalla de bloqueo de todos tus clientes. Sin pagar anuncios.',
      },
      {
        kicker: 'Cupones',
        title: 'Descuentos que se usan',
        body: 'Cupones de bienvenida, de cumpleaños o de “te echamos de menos”, directos al Wallet.',
      },
    ],
  },
  business: {
    title: 'Hecho para negocios de barrio',
    types: ['Cafeterías', 'Restaurantes', 'Peluquerías y estética', 'Tiendas de barrio', 'Gimnasios'],
  },
  finalCta: {
    title: '¿Tomamos algo y lo montamos?',
    body: 'Tu primera tarjeta, gratis. Si en un mes no vuelven más clientes, no pagas.',
    cta: 'Empezar gratis',
  },
  contact: {
    meta: {
      title: 'Contacto · Segell',
      description: 'Cuéntanos qué negocio tienes y montamos tu tarjeta de fidelidad en Wallet. Piloto gratis de 60 días.',
    },
    tag: 'Piloto gratis · Barcelona',
    title: 'Hablemos de tu negocio',
    lead: 'Déjanos tus datos y te contamos cómo quedaría tu tarjeta de sellos en el móvil de tus clientes. Sin compromiso.',
    perks: [
      'Piloto gratis de 60 días, sin tarjeta de crédito',
      'Te respondemos en menos de 24 horas',
      'Si estás en Barcelona, nos pasamos por tu local y lo dejamos montado',
    ],
    directLabel: '¿Prefieres escribirnos directamente?',
    whatsappText: 'Hola, me interesa Segell para mi negocio.',
    mailSubject: 'Contacto Segell',
    form: {
      title: 'Cuéntanos un poco',
      name: 'Tu nombre',
      business: 'Nombre del negocio',
      sector: 'Tipo de negocio',
      sectorPlaceholder: 'Elige una opción',
      sectors: ['Cafetería', 'Panadería', 'Restaurante o bar', 'Peluquería o estética', 'Tienda', 'Gimnasio o club deportivo', 'Otro'],
      email: 'Email',
      phone: 'Teléfono',
      contactHint: 'Con el email o el teléfono nos basta.',
      needContact: 'Déjanos un email o un teléfono para poder responderte.',
      message: 'Mensaje (opcional)',
      messagePlaceholder: '¿Ya usas tarjetas de cartón? ¿Qué recompensa darías?',
      privacy: 'Acepto que usemos estos datos solo para responder a mi consulta.',
      submit: 'Enviar',
      sending: 'Enviando…',
      mailtoNote: 'Se ha abierto tu correo con el mensaje listo para enviar. Si no se abre, escríbenos a',
      sendError: 'No se ha podido enviar. Inténtalo de nuevo o escríbenos a',
    },
    sent: {
      title: '¡Recibido!',
      body: 'Gracias. Te escribimos en menos de 24 horas.',
      again: 'Enviar otro mensaje',
    },
  },
  footer: {
    compat: 'Compatible con Apple Wallet y Google Wallet',
  },
};
