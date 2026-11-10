// Textos en català (servits a /ca/).
export default {
  meta: {
    title: 'Segell · Targeta de fidelitat i avisos al mòbil dels teus clients',
    description:
      'Targetes de segells i fidelització a Apple Wallet i Google Wallet, amb notificacions push. Sense apps.',
  },
  nav: {
    how: 'Com funciona',
    features: 'Funcions',
    pricing: 'Preus',
    cta: 'Prova-ho gratis',
    menuLabel: 'Principal',
    langLabel: 'Idioma',
  },
  hero: {
    tag: 'Sense apps · Apple Wallet i Google Wallet',
    title: 'La teva targeta de segells, ara al mòbil dels teus clients.',
    lead:
      'Adeu als cartonets que es perden a la cartera. Els teus clients escanegen un QR, desen la targeta al seu Wallet i tu els avises de cada promoció amb una notificació.',
    ctaPrimary: 'Crea la teva targeta gratis',
    ctaSecondary: 'Mira com funciona',
    note: 'Llesta en 10 minuts. Sense targeta de crèdit.',
    pickerLegend: 'Prova la demo com a:',
  },
  demo: {
    ariaLabel: (name, count, total) => `Targeta de ${name} amb ${count} de ${total} segells`,
    stampsLabel: 'Segells',
    rewardReady: 'Recompensa a punt per bescanviar!',
    remaining: (n, reward) => `Només ${n} més i tens ${reward}`,
    qr: 'codi QR',
    now: 'ara',
    reset: 'Reinicia la targeta',
    stamp: 'Segella +1',
    hint: 'Prova-ho: prem per segellar',
  },
  sectors: {
    cafeteria: {
      label: 'Cafeteria',
      name: 'Cafè Lola',
      kind: 'Cafeteria',
      reward: 'un cafè gratis',
      rewardPush: 'Targeta completa! El teu proper cafè va a compte nostre ☕',
    },
    restaurante: {
      label: 'Restaurant',
      name: 'Casa Pepa',
      kind: 'Restaurant',
      reward: 'les postres gratis',
      rewardPush: 'Targeta completa! Les postres d’avui les paguem nosaltres.',
    },
    peluqueria: {
      label: 'Perruqueria',
      name: 'Tisores',
      kind: 'Perruqueria',
      reward: 'un tall gratis',
      rewardPush: 'Targeta completa! El teu proper tall és gratis.',
    },
    gimnasio: {
      label: 'Gimnàs',
      name: 'Força Barri',
      kind: 'Gimnàs',
      reward: 'un mes gratis',
      rewardPush: '10 entrenaments! El teu proper mes té descompte.',
    },
  },
  how: {
    title: 'Tan fàcil com posar un segell. Literalment.',
    steps: [
      {
        title: 'Dissenya la teva targeta',
        body: 'Puja el teu logo, tria els colors i decideix la recompensa. Segells, punts o cupons.',
      },
      {
        title: 'Posa el QR al taulell',
        body: 'Els teus clients l’escanegen i la targeta es desa al seu Wallet. Sense descarregar res.',
      },
      {
        title: 'Segella i avisa',
        body: 'Suma segells des del mòbil i envia notificacions push quan vulguis omplir el local.',
      },
    ],
  },
  features: {
    title: 'Tot el que el teu cartonet no podia fer',
    items: [
      {
        kicker: 'Segells',
        title: 'El 10è cafè, convida la casa',
        body: 'La clàssica targeta de segells, però que mai no es queda oblidada a casa.',
      },
      {
        kicker: 'Punts',
        title: 'Cada euro suma',
        body: 'Punts bescanviables pel que tu decideixis: un tall, un menú, un mes de gimnàs.',
      },
      {
        kicker: 'Notificacions push',
        title: 'Un dimarts fluix, arreglat',
        body: 'Envia una promoció i apareix a la pantalla de bloqueig de tots els teus clients. Sense pagar anuncis.',
      },
      {
        kicker: 'Cupons',
        title: 'Descomptes que es fan servir',
        body: 'Cupons de benvinguda, d’aniversari o de “et trobem a faltar”, directes al Wallet.',
      },
    ],
  },
  business: {
    title: 'Fet per als negocis de barri',
    types: ['Cafeteries', 'Restaurants', 'Perruqueries i estètica', 'Botigues de barri', 'Gimnasos'],
  },
  finalCta: {
    title: 'Fem un cafè i ho muntem?',
    body: 'La teva primera targeta, gratis. Si en un mes no tornen més clients, no pagues.',
    cta: 'Comença gratis',
  },
  footer: {
    compat: 'Compatible amb Apple Wallet i Google Wallet',
  },
};
