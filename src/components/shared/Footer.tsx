import Link from "next/link";

export function Footer() {
  const links = {
    producto: [
      { label: "Tienda", href: "/shop" },
      { label: "Cursos", href: "/courses" },
      { label: "Ejercicios", href: "/exercises" },
      { label: "Precios", href: "/pricing" },
    ],
    empresa: [
      { label: "Sobre Nosotros", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Carreras", href: "/careers" },
      { label: "Prensa", href: "/press" },
    ],
    soporte: [
      { label: "Centro de Ayuda", href: "/help" },
      { label: "Contacto", href: "/contact" },
      { label: "Preguntas Frecuentes", href: "/faq" },
      { label: "Términos y Condiciones", href: "/terms" },
    ],
    legal: [
      { label: "Privacidad", href: "/privacy" },
      { label: "Términos de Uso", href: "/terms" },
      { label: "Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/teamfakas", icon: "📷" },
    { name: "YouTube", href: "https://youtube.com/teamfakas", icon: "▶️" },
    { name: "Twitter", href: "https://twitter.com/teamfakas", icon: "🐦" },
    { name: "Discord", href: "https://discord.gg/teamfakas", icon: "💬" },
  ];

  return (
    <footer className="bg-surface border-t border-card" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="text-2xl font-bold font-heading text-cta" aria-label="Team Fakas Home">
              TEAM FAKAS
            </Link>
            <p className="mt-4 text-sm text-text-muted max-w-xs">
              Sistema de transformación física, mental y nutricional basado en ciencia, disciplina y acción.
            </p>
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-cta transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Producto">
            <h3 className="text-sm font-semibold font-heading text-text uppercase tracking-wider">Producto</h3>
            <ul className="mt-4 space-y-3">
              {links.producto.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-cta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <h3 className="text-sm font-semibold font-heading text-text uppercase tracking-wider">Empresa</h3>
            <ul className="mt-4 space-y-3">
              {links.empresa.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-cta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soporte">
            <h3 className="text-sm font-semibold font-heading text-text uppercase tracking-wider">Soporte</h3>
            <ul className="mt-4 space-y-3">
              {links.soporte.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-cta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="text-sm font-semibold font-heading text-text uppercase tracking-wider">Legal</h3>
            <ul className="mt-4 space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-text-muted hover:text-cta transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-card pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} Team Fakas. Todos los derechos reservados.
            </p>
            <p className="text-sm text-text-muted">
              FORGE YOURSELF
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}