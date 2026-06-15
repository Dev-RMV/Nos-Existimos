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

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

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
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-x-6 gap-y-4 text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Nós Existimos. Feito com carinho para a comunidade autista brasileira.</p>

          <div className="flex flex-col items-start gap-1">
            <p className="leading-relaxed">
              Desenvolvido por{" "}
              <span className="font-semibold text-white">Rodrigo Vianna</span>, estudante de Engenharia de Computação no Instituto Infnet.
            </p>
            <a
              href="https://www.linkedin.com/in/rodrigo-vianna-173320249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 min-h-[48px] font-semibold text-white/90 underline decoration-white/40 underline-offset-4 hover:text-white hover:decoration-white transition-colors"
            >
              <LinkedInIcon size={20} />
              LinkedIn
              <span className="sr-only"> de Rodrigo Vianna (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
