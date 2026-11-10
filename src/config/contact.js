// Datos de contacto que se muestran en /contacto. Cámbialos aquí.
export const CONTACT = {
  // Correo al que llegan los mensajes (con Cloudflare Email Routing puedes
  // reenviar hola@segell.cat a tu Gmail gratis).
  email: 'hola@segell.cat',

  // WhatsApp en formato internacional sin "+" ni espacios, p. ej. '34600111222'.
  // Vacío = no se muestra el botón de WhatsApp.
  whatsapp: '',

  // Endpoint opcional que recibe el formulario por POST (JSON), p. ej. Formspree
  // ('https://formspree.io/f/xxxx') o un endpoint del backend. Vacío = el
  // formulario abre el correo del visitante con el mensaje ya escrito.
  formEndpoint: '',
};
