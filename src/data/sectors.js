// Datos de la demo: cada sector cambia el nombre del negocio, la recompensa y el mensaje push.
export const SECTORS = {
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
};

export const STAMPS_TOTAL = 10;

export const STEPS = [
  {
    n: 1,
    tone: 'accent',
    title: 'Diseña tu tarjeta',
    body: 'Sube tu logo, elige colores y decide la recompensa. Sellos, puntos o cupones.',
  },
  {
    n: 2,
    tone: 'accent-2',
    title: 'Pon el QR en el mostrador',
    body: 'Tus clientes lo escanean y la tarjeta se guarda en su Wallet. Sin descargar nada.',
  },
  {
    n: 3,
    tone: 'ink',
    title: 'Sella y avisa',
    body: 'Suma sellos desde tu móvil y lanza notificaciones push cuando quieras llenar el local.',
  },
];

export const FEATURES = [
  {
    kicker: 'Sellos',
    tone: 'accent',
    title: 'El 10º café, invita la casa',
    body: 'La clásica tarjeta de sellos, pero que nunca se olvida en casa.',
  },
  {
    kicker: 'Puntos',
    tone: 'accent-2',
    title: 'Cada euro suma',
    body: 'Puntos canjeables por lo que tú decidas: un corte, un menú, un mes de gimnasio.',
  },
  {
    kicker: 'Notificaciones push',
    tone: 'highlight',
    title: 'Un martes flojo, arreglado',
    body: 'Manda una promo y aparece en la pantalla de bloqueo de todos tus clientes. Sin pagar anuncios.',
  },
  {
    kicker: 'Cupones',
    tone: 'accent',
    title: 'Descuentos que se usan',
    body: 'Cupones de bienvenida, de cumpleaños o de “te echamos de menos”, directos al Wallet.',
  },
];

export const BUSINESS_TYPES = [
  { label: 'Cafeterías', tone: 'accent' },
  { label: 'Restaurantes', tone: 'accent-2' },
  { label: 'Peluquerías y estética', tone: 'accent' },
  { label: 'Tiendas de barrio', tone: 'accent-2' },
  { label: 'Gimnasios', tone: 'accent' },
];
