export default function Nav() {
  return (
    <header className="nav container">
      <a className="nav-brand" href="#">
        <span className="brand-dot" aria-hidden="true" />
        Wallet Card Push
      </a>
      <nav className="nav-links" aria-label="Principal">
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#funciones">Funciones</a>
        <a href="#precios">Precios</a>
      </nav>
      <a className="btn btn-primary" href="#empezar">Pruébalo gratis</a>
    </header>
  );
}
