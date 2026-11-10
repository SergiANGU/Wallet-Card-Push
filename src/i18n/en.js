// English copy (served at /en).
export default {
  meta: {
    title: 'Segell · Loyalty cards and offers on your customers’ phones',
    description:
      'Stamp cards and loyalty in Apple Wallet and Google Wallet, with push notifications. No apps.',
  },
  nav: {
    how: 'How it works',
    features: 'Features',
    pricing: 'Pricing',
    cta: 'Try it free',
    menuLabel: 'Main',
    langLabel: 'Language',
  },
  hero: {
    tag: 'No apps · Apple Wallet & Google Wallet',
    title: 'Your stamp card, now on your customers’ phones.',
    lead:
      'Say goodbye to paper cards that get lost in wallets. Customers scan a QR code, save the card to their phone’s Wallet, and you tell them about every offer with a notification.',
    ctaPrimary: 'Create your free card',
    ctaSecondary: 'See how it works',
    note: 'Ready in 10 minutes. No credit card required.',
    pickerLegend: 'Try the demo as:',
  },
  demo: {
    ariaLabel: (name, count, total) => `${name} card with ${count} of ${total} stamps`,
    stampsLabel: 'Stamps',
    rewardReady: 'Reward ready to redeem!',
    remaining: (n, reward) => `${n} more to your ${reward}`,
    qr: 'QR code',
    now: 'now',
    reset: 'Reset card',
    stamp: 'Stamp +1',
    hint: 'Try it: tap to stamp',
  },
  sectors: {
    cafeteria: {
      label: 'Café',
      name: 'Café Lola',
      kind: 'Café',
      reward: 'free coffee',
      rewardPush: 'Card complete! Your next coffee is on us ☕',
    },
    restaurante: {
      label: 'Restaurant',
      name: 'Casa Pepa',
      kind: 'Restaurant',
      reward: 'free dessert',
      rewardPush: 'Card complete! Today’s dessert is on us.',
    },
    peluqueria: {
      label: 'Hair salon',
      name: 'Tijeras',
      kind: 'Hair salon',
      reward: 'free haircut',
      rewardPush: 'Card complete! Your next haircut is free.',
    },
    gimnasio: {
      label: 'Gym',
      name: 'Fuerza Barrio',
      kind: 'Gym',
      reward: 'free month',
      rewardPush: '10 workouts! Your next month comes with a discount.',
    },
  },
  how: {
    title: 'As easy as stamping a card. Literally.',
    steps: [
      {
        title: 'Design your card',
        body: 'Upload your logo, pick your colours and choose the reward. Stamps, points or coupons.',
      },
      {
        title: 'Put the QR on the counter',
        body: 'Customers scan it and the card is saved to their Wallet. Nothing to download.',
      },
      {
        title: 'Stamp and notify',
        body: 'Add stamps from your phone and send push notifications whenever you want to fill the place.',
      },
    ],
  },
  features: {
    title: 'Everything your paper card couldn’t do',
    items: [
      {
        kicker: 'Stamps',
        title: 'The 10th coffee is on the house',
        body: 'The classic stamp card, except it never gets left at home.',
      },
      {
        kicker: 'Points',
        title: 'Every euro counts',
        body: 'Points customers redeem for whatever you choose: a haircut, a set menu, a month at the gym.',
      },
      {
        kicker: 'Push notifications',
        title: 'A slow Tuesday, sorted',
        body: 'Send an offer and it shows up on every customer’s lock screen. No ad spend.',
      },
      {
        kicker: 'Coupons',
        title: 'Discounts people actually use',
        body: 'Welcome, birthday or “we miss you” coupons, straight to their Wallet.',
      },
    ],
  },
  business: {
    title: 'Made for neighbourhood businesses',
    types: ['Cafés', 'Restaurants', 'Hair & beauty salons', 'Local shops', 'Gyms'],
  },
  finalCta: {
    title: 'Shall we grab a coffee and set it up?',
    body: 'Your first card is free. If more customers aren’t coming back within a month, you don’t pay.',
    cta: 'Start for free',
  },
  footer: {
    compat: 'Works with Apple Wallet and Google Wallet',
  },
};
