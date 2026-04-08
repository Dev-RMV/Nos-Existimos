import Link from "next/link";
import { BookOpen, Briefcase, Heart, Users, Scale, Brain, ArrowRight } from "lucide-react";

const stats = [
  { value: "85%", label: "dos autistas adultos estão desempregados ou subempregados", fonte: "National Autistic Society", fonteUrl: "https://www.autism.org.uk/what-we-do/news/new-data-on-the-autism-employment-gap" },
  { value: "1 em 36", label: "crianças é diagnosticada com autismo", fonte: "CDC, 2023", fonteUrl: "https://www.cdc.gov/mmwr/volumes/72/ss/ss7202a1.htm" },
  { value: "Lei 12.764", label: "garante direitos à pessoa com TEA desde 2012", fonte: "Planalto", fonteUrl: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm" },
  { value: "70 milhões", label: "de pessoas autistas no mundo", fonte: "OMS", fonteUrl: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
];

const pillars = [
  {
    icon: BookOpen,
    title: "Informação",
    description: "Conteúdo confiável sobre o Transtorno do Espectro Autista: o que é, direitos e como promover a inclusão no trabalho.",
    href: "/informacao/o-que-e-autismo",
  },
  {
    icon: Briefcase,
    title: "Inclusão",
    description: "Orientações e guias para empresas que desejam criar ambientes de trabalho verdadeiramente inclusivos para profissionais autistas.",
    href: "/inclusao/para-empresas",
  },
  {
    icon: Heart,
    title: "Apoio",
    description: "Referências de grupos de ajuda, linhas de apoio e recursos úteis para autistas, familiares e todos que buscam orientação.",
    href: "/recursos/grupos-de-ajuda",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Nós Existimos.{" "}
              <span className="text-[var(--cor-hero-destaque)]">
                E merecemos nosso lugar no mercado de trabalho.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Um site informativo dedicado a reunir conhecimento, direitos e recursos
              sobre a inclusão de pessoas autistas no mercado de trabalho.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/informacao/o-que-e-autismo"
                className="inline-flex items-center gap-2 bg-[var(--cor-dourado)] text-[var(--cor-azul-base)] font-bold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
              >
                Conheça a causa
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="/inclusao/para-empresas"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition min-h-12"
              >
                Sou empresa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dados de impacto */}
      <section className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            O autismo em números
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 text-center border border-[var(--cor-cinza-claro)]"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[var(--cor-dourado-texto)] mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                  {stat.label}
                </p>
                {stat.fonte && (
                  <a
                    href={stat.fonteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline mt-1 inline-block"
                  >
                    Fonte: {stat.fonte} <span className="sr-only">(abre em nova aba)</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            O que você encontra aqui
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Reunimos informações em três áreas para ajudar na construção de um mercado de trabalho mais justo e inclusivo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="group bg-[var(--cor-fundo)] rounded-xl p-8 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-dourado)] hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-[var(--cor-dourado)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                  <p className="text-[var(--cor-texto-corpo)] text-sm leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                  <span className="text-sm font-semibold text-[var(--cor-azul-acolhedor)] group-hover:underline inline-flex items-center gap-1">
                    Saiba mais <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Empresas */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Users size={40} className="text-[var(--cor-dourado)] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Sua empresa quer ser inclusiva?
            </h2>
            <p className="text-[var(--cor-texto-corpo)] mb-8 leading-relaxed">
              Conheça o passo a passo para criar um ambiente de trabalho acolhedor para
              profissionais autistas. A diversidade neurocognitiva é uma vantagem competitiva.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/inclusao/para-empresas"
                className="inline-flex items-center gap-2 bg-[var(--cor-azul-base)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
              >
                Guia para empresas
              </Link>
              <Link
                href="/inclusao/casos-de-sucesso"
                className="inline-flex items-center gap-2 border-2 border-[var(--cor-azul-profundo)] text-[var(--cor-azul-profundo)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--cor-azul-profundo)]/5 transition min-h-12"
              >
                Ver casos de sucesso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Direitos */}
      <section className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Conheça seus direitos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]">
              <Scale size={28} className="text-[var(--cor-dourado)] mb-4" aria-hidden="true" />
              <h3 className="font-bold text-lg mb-2">Lei Berenice Piana</h3>
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                A Lei 12.764/2012 garante à pessoa com TEA os mesmos direitos de pessoa com
                deficiência, incluindo acesso a educação, trabalho e saúde.
              </p>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]">
              <Briefcase size={28} className="text-[var(--cor-dourado)] mb-4" aria-hidden="true" />
              <h3 className="font-bold text-lg mb-2">Lei de Cotas</h3>
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                Empresas com 100+ funcionários devem reservar de 2% a 5% das vagas para pessoas
                com deficiência, incluindo autistas.
              </p>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]">
              <Brain size={28} className="text-[var(--cor-dourado)] mb-4" aria-hidden="true" />
              <h3 className="font-bold text-lg mb-2">Lei Romeo Mion</h3>
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                A Lei 13.977/2020 criou a Carteira de Identificação da Pessoa com TEA (CIPTEA),
                facilitando a comprovação do diagnóstico.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/informacao/direitos-trabalhistas"
              className="inline-flex items-center gap-2 text-[var(--cor-azul-acolhedor)] font-semibold hover:underline"
            >
              Ver todos os direitos <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
