import Link from "next/link";
import Image from "next/image";
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
  { label: "Acessibilidade", href: "/acessibilidade" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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

          {/* QR Code - Doação */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Ajude a manter o site!</h3>
            <div className="bg-white rounded-lg p-3 inline-block">
              <Image
                src="/qrcode.jpg"
                alt="QR Code para doação — escaneie para ajudar a manter o site"
                width={120}
                height={120}
                className="rounded"
              />
            </div>
            <p className="text-white/90 text-xs mt-2">
              Escaneie o QR Code para contribuir.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/80">
          <p>&copy; {new Date().getFullYear()} Nós Existimos. Feito com carinho para a comunidade autista brasileira.</p>
          <div className="flex gap-4">
            <Link href="/acessibilidade" className="hover:text-white/80 transition-colors">
              Acessibilidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
