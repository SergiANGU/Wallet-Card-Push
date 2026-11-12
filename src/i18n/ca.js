// Textos en català (servits a /ca).
export default {
  meta: {
    title: 'Segell · Targeta de fidelitat i avisos al mòbil dels teus clients',
    description:
      'Targetes de segells i fidelització a Apple Wallet i Google Wallet, amb notificacions push. Sense apps.',
  },
  nav: {
    how: 'Com funciona',
    features: 'Funcions',
    pilot: 'Pilot gratuït',
    cta: 'Prova-ho gratis',
    menuLabel: 'Principal',
    langLabel: 'Idioma',
    contact: 'Contacte',
  },
  hero: {
    tag: 'Sense apps · Apple Wallet i Google Wallet',
    title: 'La teva targeta de segells, ara al mòbil dels teus clients.',
    lead:
      'Adeu als cartonets que es perden a la cartera. Els teus clients escanegen un QR, desen la targeta al seu Wallet i tu els avises de cada promoció amb una notificació.',
    ctaPrimary: 'Crea la teva targeta gratis',
    ctaSecondary: 'Mira com funciona',
    note: 'Pilot gratuït de 60 dies. Sense targeta de crèdit.',
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
  pilot: {
    title: 'Pilot gratuït de 60 dies',
    lead: 'Busquem els primers negocis de Barcelona per estrenar Segell. Sense cost i sense compromís.',
    items: [
      {
        kicker: 'Te’l muntem',
        title: 'Tu no has de fer res',
        body: 'Dissenyem la targeta amb el teu logo i la teva recompensa, i et portem el cartell amb el QR per al taulell.',
      },
      {
        kicker: '60 dies gratis',
        title: 'Sense targeta i sense permanència',
        body: 'La fas servir dos mesos amb els teus clients de veritat. Si no et convenç, la traiem i llestos.',
      },
      {
        kicker: 'Després',
        title: 'Un preu a la teva mida',
        body: 'Si vols continuar, acordem amb tu una quota mensual segons el que necessiti el teu negoci.',
      },
      {
        kicker: 'A canvi',
        title: 'Només la teva opinió',
        body: 'Explica’ns què funciona i què no. Així millorem Segell amb tu.',
      },
    ],
    cta: 'Vull el pilot',
  },
  finalCta: {
    title: 'Fem un cafè i ho muntem?',
    body: 'Et deixem la targeta muntada al teu local i la proves 60 dies gratis, sense compromís.',
    cta: 'Comença gratis',
  },
  contact: {
    meta: {
      title: 'Contacte · Segell',
      description: 'Explica’ns quin negoci tens i muntem la teva targeta de fidelitat al Wallet. Pilot gratuït de 60 dies.',
    },
    tag: 'Pilot gratuït · Barcelona',
    title: 'Parlem del teu negoci',
    lead: 'Deixa’ns les teves dades i t’expliquem com quedaria la teva targeta de segells al mòbil dels teus clients. Sense compromís.',
    perks: [
      'Pilot gratuït de 60 dies, sense targeta de crèdit',
      'Et responem en menys de 24 hores',
      'Si ets a Barcelona, passem pel teu local i t’ho deixem muntat',
    ],
    directLabel: 'Prefereixes escriure’ns directament?',
    whatsappText: 'Hola, m’interessa Segell per al meu negoci.',
    mailSubject: 'Contacte Segell',
    form: {
      title: 'Explica’ns una mica',
      name: 'El teu nom',
      business: 'Nom del negoci',
      sector: 'Tipus de negoci',
      sectorPlaceholder: 'Tria una opció',
      sectors: ['Cafeteria', 'Fleca', 'Restaurant o bar', 'Perruqueria o estètica', 'Botiga', 'Gimnàs o club esportiu', 'Altres'],
      email: 'Correu electrònic',
      phone: 'Telèfon',
      contactHint: 'Amb el correu o el telèfon ja en tenim prou.',
      needContact: 'Deixa’ns un correu o un telèfon per poder respondre’t.',
      message: 'Missatge (opcional)',
      messagePlaceholder: 'Ja fas servir targetes de cartró? Quina recompensa donaries?',
      privacy: 'Accepto que feu servir aquestes dades només per respondre la meva consulta.',
      submit: 'Envia',
      sending: 'Enviant…',
      mailtoNote: 'S’ha obert el teu correu amb el missatge a punt d’enviar. Si no s’obre, escriu-nos a',
      sendError: 'No s’ha pogut enviar. Torna-ho a provar o escriu-nos a',
    },
    sent: {
      title: 'Rebut!',
      body: 'Gràcies. T’escrivim en menys de 24 hores.',
      again: 'Envia un altre missatge',
    },
  },
  footer: {
    compat: 'Compatible amb Apple Wallet i Google Wallet',
  },
};
