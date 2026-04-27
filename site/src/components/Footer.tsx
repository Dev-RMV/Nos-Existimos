import Link from "next/link";
import { Phone } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Informação", href: "/informacao/o-que-e-autismo" },
  { label: "Inclusão", href: "/inclusao/para-empresas" },
];

const recursoLinks = [
  { label: "Grupos de Ajuda", href: "/recursos/grupos-de-ajuda" },
  { label: "Linhas de Apoio", href: "/recursos/linhas-de-apoio" },
  { label: "Perguntas Frequentes", href: "/recursos/perguntas-frequentes" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--cor-azul-base)] text-white/90 mt-auto">
      {/* Banner de crise */}
      <div className="bg-[var(--cor-dourado)] text-[var(--cor-azul-base)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-2 text-sm font-semibold">
          <Phone size={16} aria-hidden="true" />
          <span>Precisa de ajuda agora? Ligue <strong>188</strong> (CVV) — 24h, gratuito</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Branding */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <span className="text-[var(--cor-dourado)] text-3xl" aria-hidden="true">∞</span>
              Nós Existimos
            </Link>
            <p className="text-white/90 text-sm leading-relaxed">
              Informação sobre autismo e mercado de trabalho.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Navegação</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/90 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Recursos</h3>
            <ul className="space-y-2">
              {recursoLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/90 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Nós Existimos. Feito com carinho para a comunidade autista brasileira.</p>
        </div>
      </div>
    </footer>
  );
}
