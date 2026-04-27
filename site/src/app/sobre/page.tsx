import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  Heart,
  Users,
  Briefcase,
  BookOpen,
  ArrowRight,
  Sparkles,
  HandHeart,
  Scale,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Sobre o Projeto",
  description:
    "Conheça o projeto Nós Existimos: missão, visão, valores e por que lutamos pela inclusão de autistas no mercado de trabalho.",
};

const valores = [
  {
    icon: Heart,
    titulo: "Respeito",
    descricao:
      "Cada pessoa autista é única. Respeitamos o espectro em toda sua diversidade, sem tentar normalizar ou padronizar ninguém.",
  },
  {
    icon: BookOpen,
    titulo: "Informação",
    descricao:
      "Combatemos a desinformação com conteúdo baseado em evidências científicas, legislação vigente e experiências reais.",
  },
  {
    icon: Scale,
    titulo: "Justiça",
    descricao:
      "Defendemos o direito ao trabalho digno para todas as pessoas autistas, com igualdade de oportunidades e adaptações razoáveis.",
  },
  {
    icon: Users,
    titulo: "Comunidade",
    descricao:
      "Acreditamos na força da comunidade. Autistas, familiares, empresas e sociedade juntos constroem a mudança.",
  },
  {
    icon: Sparkles,
    titulo: "Protagonismo",
    descricao:
      "Nada sobre nós, sem nós. Pessoas autistas devem protagonizar as conversas e decisões que impactam suas vidas.",
  },
  {
    icon: HandHeart,
    titulo: "Acolhimento",
    descricao:
      "Um espaço seguro, acessível e livre de julgamento para todos que buscam informação e apoio.",
  },
];

const publico = [
  {
    icon: Users,
    titulo: "Pessoas autistas",
    descricao:
      "Informações sobre direitos, adaptações, autoadvocacia e recursos para quem busca se inserir ou se manter no mercado de trabalho.",
  },
  {
    icon: Heart,
    titulo: "Familiares",
    descricao:
      "Orientação para pais, irmãos e cuidadores que acompanham a jornada profissional de uma pessoa autista.",
  },
  {
    icon: Briefcase,
    titulo: "Empresas",
    descricao:
      "Guias práticos para construir ambientes inclusivos, adaptar processos seletivos e valorizar a neurodiversidade.",
  },
  {
    icon: BookOpen,
    titulo: "Sociedade",
    descricao:
      "Conteúdo educativo para toda pessoa que deseja entender o autismo e contribuir para uma sociedade mais justa.",
  },
];

export default function SobrePage() {
  return (
    <>
      <section aria-label="Sobre o Nós Existimos" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Sobre" }]} />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Sobre o{" "}
              <span className="text-[var(--cor-hero-destaque)]">Nós Existimos</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Site informativo que reúne conhecimento sobre direitos, inclusão
              e recursos de apoio para pessoas autistas no mercado de trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* O que é */}
      <section aria-label="O que é o Nós Existimos?" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              O que é o &ldquo;Nós Existimos&rdquo;?
            </h2>
            <p className="prosa text-[var(--cor-texto-corpo)] leading-relaxed mb-4">
              O <strong className="text-[var(--cor-texto-principal)]">Nós Existimos</strong> é
              um site informativo criado para dar visibilidade a uma realidade
              frequentemente ignorada: a exclusão de pessoas autistas do mercado de
              trabalho. Enquanto{" "}
              <a href="https://www.autism.org.uk/what-we-do/news/new-data-on-the-autism-employment-gap" target="_blank" rel="noopener noreferrer" lang="en" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">cerca de 85% dos adultos autistas estão desempregados
              ou subempregados<span className="sr-only"> (abre em nova aba)</span></a>, o preconceito e a falta de informação continuam sendo
              as maiores barreiras.
            </p>
            <p className="prosa text-[var(--cor-texto-corpo)] leading-relaxed mb-4">
              O nome é uma afirmação: nós existimos, somos capazes e merecemos
              oportunidades justas. Este site reúne informações sobre direitos,
              recursos de apoio e orientações para empresas, servindo como
              referência para quem busca conhecimento sobre o tema.
            </p>
            <p className="prosa text-[var(--cor-texto-corpo)] leading-relaxed">
              Acreditamos que a informação é o primeiro passo para a mudança. Por
              isso, todo o conteúdo deste site é gratuito, acessível e pensado para
              alcançar o maior número possível de pessoas.
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Valores */}
      <section aria-label="Missão e Valores" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">Missão e Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--cor-fundo)] rounded-xl p-8 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-dourado)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center mb-5">
                <Target size={24} className="text-[var(--cor-dourado)]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão do Site</h3>
              <p className="text-[var(--cor-texto-corpo)] leading-relaxed">
                Reunir e difundir informações confiáveis sobre o autismo no mercado
                de trabalho, contribuindo para a conscientização da sociedade e
                servindo como referência para a criação de ambientes profissionais
                mais inclusivos.
              </p>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-8 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-azul-acolhedor)]">
              <div className="w-12 h-12 rounded-lg bg-[var(--cor-azul-acolhedor)]/10 flex items-center justify-center mb-5">
                <Eye size={24} className="text-[var(--cor-azul-acolhedor)]" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold mb-4">O que Acreditamos</h3>
              <p className="text-[var(--cor-texto-corpo)] leading-relaxed">
                Que a informação é o primeiro passo para a mudança. Um mercado de
                trabalho onde a neurodiversidade é valorizada começa quando pessoas,
                famílias e empresas têm acesso a conhecimento de qualidade sobre o
                tema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section aria-label="Nossos Valores" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Nossos Valores
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Princípios que guiam cada conteúdo, cada decisão e cada ação do
            projeto.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor) => {
              const Icon = valor.icon;
              return (
                <div
                  key={valor.titulo}
                  className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[var(--cor-dourado)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{valor.titulo}</h3>
                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                    {valor.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A quem se destina */}
      <section aria-label="A quem se destina" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            A quem se destina
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Este site foi pensado para todas as pessoas que desejam contribuir
            para um mercado de trabalho mais inclusivo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {publico.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.titulo}
                  className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--cor-azul-acolhedor)]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon
                      size={22}
                      className="text-[var(--cor-azul-acolhedor)]"
                    />
                  </div>
                  <h3 className="text-base font-bold mb-2">{item.titulo}</h3>
                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Por que o site existe */}
      <section aria-label="Por que este site existe" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Por que este site existe
            </h2>
            <div className="prosa space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed">
              <p>
                O Brasil tem milhões de pessoas autistas, mas a maioria permanece
                invisível no mercado de trabalho. Mesmo com legislação que garante
                direitos, a falta de informação e o preconceito criam barreiras
                quase intransponíveis.
              </p>
              <p>
                Muitos empregadores ainda associam o autismo à incapacidade.
                Muitos autistas não conhecem seus direitos. Muitas famílias não
                sabem onde buscar apoio. Este site existe para preencher essas
                lacunas.
              </p>
              <p>
                Acreditamos que quando a sociedade entende o autismo, quando as
                empresas aprendem a incluir e quando as pessoas autistas conhecem
                seus direitos, a transformação acontece. E ela já está
                acontecendo.
              </p>
              <p className="text-[var(--cor-texto-principal)] font-semibold text-center text-lg pt-4">
                Nós existimos. E estamos construindo um futuro mais justo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Faça parte dessa mudança" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-6">Faça parte dessa mudança</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/informacao/o-que-e-autismo"
              className="inline-flex items-center gap-2 bg-[var(--cor-azul-base)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
            >
              Comece por aqui
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/recursos/grupos-de-ajuda"
              className="inline-flex items-center gap-2 border-2 border-[var(--cor-azul-profundo)] text-[var(--cor-azul-profundo)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--cor-azul-profundo)]/5 transition min-h-12"
            >
              Encontre apoio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
