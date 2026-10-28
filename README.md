# Wallet Card Push · Landing (propuesta 1a)

Landing en React + Vite de la propuesta **1a — la tarjeta como protagonista**, con la demo interactiva de sellos.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

## Estructura

```
src/
  data/sectors.js        Textos y datos (sectores de la demo, pasos, funciones)
  components/
    Nav.jsx
    Hero.jsx             Hero + selector de sector
    PhoneDemo.jsx        Móvil con la tarjeta Wallet, sellos y push al completar
    HowItWorks.jsx       3 pasos
    Features.jsx         Sellos / Puntos / Push / Cupones
    BusinessTypes.jsx    Tags de tipos de negocio
    FinalCta.jsx
  styles/
    tokens.css           Colores, fuentes (Caprasimo + Figtree, self-hosted), radios, sombras
    base.css             Clases del sistema: .btn, .tag, .card, .seg
    landing.css          Layout y responsive
```

Los enlaces (`#empezar`, `#precios`…) son placeholders: conéctalos a tu flujo de alta.
