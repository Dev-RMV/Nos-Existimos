import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileText,
  HandHeart,
  Heart,
  Lightbulb,
  MessageCircle,
  Scale,
  Shield,
  Sparkles,
  Star,
  Target,
  User,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guia para Autistas",
  description:
    "Guia completo para profissionais autistas: conheça seus direitos, prepare-se para entrevistas, saiba sobre disclosure e encontre organizações de apoio.",
};

const direitos = [
  {
    icon: Scale,
    titulo: "Lei de Cotas (Lei 8.213/1991)",
    descricao:
      "Empresas com 100+ funcionários devem reservar de 2% a 5% das vagas para PcD. Com laudo de TEA, você é elegível para essas vagas.",
  },
  {
    icon: Shield,
    titulo: "Lei Berenice Piana (Lei 12.764/2012)",
    descricao:
      "Reconhece o autista como pessoa com deficiência para todos os efeitos legais, garantindo os mesmos direitos e proteções.",
  },
  {
    icon: FileText,
    titulo: "CIPTEA — Carteira de Identificação",
    descricao:
      "A Lei Romeo Mion (13.977/2020) criou a CIPTEA, que facilita a comprovação do diagnóstico sem necessidade de expor o laudo completo.",
  },
  {
    icon: HandHeart,
    titulo: "Adaptação razoável",
    descricao:
      "O Estatuto da PcD (Lei 13.146/2015) garante que a empresa deve fornecer adaptações no ambiente de trabalho sem custo para você.",
  },
];

const pontosFortes = [
  {
    titulo: "Atenção a detalhes",
    descricao:
      "Capacidade de perceber padrões, erros e inconsistências que outros podem não notar. Valioso em áreas como QA, análise de dados e revisão.",
  },
  {
    titulo: "Hiperfoco produtivo",
    descricao:
      "Quando o assunto é do seu interesse, você pode manter concentração intensa e prolongada, gerando alta produtividade.",
  },
  {
    titulo: "Pensamento lógico e sistemático",
    descricao:
      "Tendência natural a organizar informações, seguir processos e pensar de forma estruturada. Essencial em TI, engenharia e ciências.",
  },
  {
    titulo: "Honestidade e objetividade",
    descricao:
      "Comunicação direta e transparente, sem jogos políticos. Cada vez mais valorizado em ambientes profissionais modernos.",
  },
  {
    titulo: "Conhecimento profundo",
    descricao:
      "Interesses especiais frequentemente se traduzem em expertise profunda e diferenciada em áreas específicas.",
  },
  {
    titulo: "Lealdade e comprometimento",
    descricao:
      "Quando encontra um ambiente adequado, o profissional autista tende a ser extremamente dedicado e fiel à organização.",
  },
];

const dicasEntrevista = [
  {
    titulo: "Antes da entrevista",
    itens: [
      "Pesquise a empresa e a vaga com antecedência",
      "Prepare respostas para perguntas comuns e pratique em voz alta",
      "Visite o local antes, se possível, para se familiarizar",
      "Planeje o trajeto e chegue com folga de tempo",
      "Leve uma garrafa de água e objetos de autorregulação, se usar",
    ],
  },
  {
    titulo: "Durante a entrevista",
    itens: [
      "Peça esclarecimento se uma pergunta for vaga ou ambígua — isso é aceitável",
      "Foque em exemplos concretos das suas habilidades",
      "Não precisa forçar contato visual se for desconfortável",
      "Se precisar de um momento para pensar, diga 'preciso de um instante para refletir'",
      "Pergunte sobre a cultura e o ambiente de trabalho",
    ],
  },
  {
    titulo: "Depois da entrevista",
    itens: [
      "Envie um e-mail de agradecimento breve e profissional",
      "Anote o que deu certo e o que pode melhorar para próximas vezes",
      "Se não tiver retorno no prazo informado, envie um follow-up educado",
      "Não se culpe se não for selecionado — processos seletivos são imperfeitos",
    ],
  },
];

const adaptacoesParaSolicitar = [
  "Instruções por escrito além de verbais",
  "Fones de ouvido com cancelamento de ruído",
  "Estação de trabalho em área menos movimentada",
  "Flexibilidade de horário ou trabalho remoto/híbrido",
  "Reuniões com pauta prévia e tempo definido",
  "Feedback regular, claro e direto",
  "Iluminação ajustável na sua estação",
  "Pausas regulares para descompressão sensorial",
];

const organizacoes = [
  {
    nome: "Specialisterne",
    descricao:
      "Organização internacional presente no Brasil que conecta profissionais autistas a empresas inclusivas, oferecendo treinamento e suporte.",
    url: "https://specialisterne.com.br",
  },
  {
    nome: "Autismo e Realidade",
    descricao:
      "Organização brasileira que oferece informação, capacitação e apoio para autistas e familiares, incluindo orientação sobre empregabilidade.",
    url: "https://autismoerealidade.org.br",
  },
  {
    nome: "AACD",
    descricao:
      "Associação de Assistência à Criança Deficiente oferece programas de reabilitação e inclusão profissional para pessoas com deficiência.",
    url: "https://aacd.org.br",
  },
  {
    nome: "Instituto Jô Clemente",
    descricao:
      "Atua na inclusão profissional de PcD com programas de qualificação, encaminhamento ao mercado de trabalho e apoio contínuo.",
    url: "https://ijc.org.br",
  },
  {
    nome: "Programa Emprego Apoiado",
    descricao:
      "Metodologia de inclusão profissional que oferece suporte individualizado para PcD, incluindo autistas, no ambiente de trabalho.",
    url: "https://empregopoiado.org.br",
  },
];

export default function ParaAutistas() {
  return (
    <>
      {/* Header */}
      <section aria-label="Guia para profissionais autistas" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Inclusão", href: "/inclusao/para-autistas" },
              { label: "Guia para Autistas" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <User size={32} className="text-[var(--cor-dourado)]" aria-hidden="true" />
              <span className="text-[var(--cor-hero-destaque)] font-semibold text-sm uppercase tracking-wider">
                Guia Completo
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Guia para profissionais autistas
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Seus direitos, seus pontos fortes e tudo o que você precisa saber para navegar
              o mercado de trabalho com confiança.
            </p>
          </div>
        </div>
      </section>

      {/* Conheça seus direitos */}
      <section aria-label="Conheça seus direitos" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Conheça seus direitos
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            A legislação brasileira garante proteções importantes para pessoas autistas no
            mercado de trabalho. Conhecer seus direitos é o primeiro passo.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {direitos.map((d) => {
              const Icon = d.icon;
              return (
                <div
                  key={d.titulo}
                  className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] border-l-4 border-l-[var(--cor-dourado)]"
                >
                  <div className="flex items-start gap-4">
                    <Icon
                      size={24}
                      className="text-[var(--cor-dourado)] flex-shrink-0 mt-1"
                    />
                    <div>
                      <h3 className="font-bold mb-2">{d.titulo}</h3>
                      <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                        {d.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/informacao/direitos-trabalhistas"
              className="inline-flex items-center gap-2 text-[var(--cor-azul-acolhedor)] font-semibold hover:underline"
            >
              Ver legislação completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Identifique seus pontos fortes */}
      <section aria-label="Identifique seus pontos fortes" className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Identifique seus pontos fortes
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            O autismo traz características que são verdadeiras vantagens profissionais.
            Reconheça e valorize o que você tem de melhor.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pontosFortes.map((pf) => (
              <div
                key={pf.titulo}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]"
              >
                <Star size={20} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
                <h3 className="font-bold mb-2">{pf.titulo}</h3>
                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                  {pf.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prepare-se para entrevistas */}
      <section aria-label="Prepare-se para entrevistas" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Prepare-se para entrevistas
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Entrevistas podem ser desafiadoras, mas com preparação adequada você pode
            mostrar todo o seu potencial.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dicasEntrevista.map((fase) => (
              <div
                key={fase.titulo}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]"
              >
                <h3 className="font-bold text-lg mb-4 text-[var(--cor-azul-profundo)] flex items-center gap-2">
                  <BriefcaseBusiness size={20} />
                  {fase.titulo}
                </h3>
                <ul className="space-y-3">
                  {fase.itens.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-[var(--cor-texto-corpo)]"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[var(--cor-dourado)] flex-shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptações que pode solicitar */}
      <section aria-label="Adaptações que você pode solicitar" className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
              Adaptações que você pode solicitar
            </h2>
            <p className="text-center text-[var(--cor-texto-corpo)] mb-8">
              A lei garante o direito a adaptações razoáveis no ambiente de trabalho. Aqui
              estão algumas que você pode pedir:
            </p>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 sm:p-8 border border-[var(--cor-cinza-claro)]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {adaptacoesParaSolicitar.map((a) => (
                  <div
                    key={a}
                    className="flex items-start gap-2 text-sm text-[var(--cor-texto-corpo)]"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-[var(--cor-dourado)] flex-shrink-0 mt-0.5"
                    />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-[var(--cor-dourado-suave)]/10 rounded-lg p-4">
                <p className="text-sm text-[var(--cor-texto-corpo)]">
                  <strong>Importante:</strong> Você não precisa justificar cada adaptação em
                  detalhes. Basta informar que é pessoa com TEA e apresentar seu laudo ou
                  CIPTEA. A empresa tem a obrigação legal de fornecer adaptações razoáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <section aria-label="Contar ou não o diagnóstico?" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle size={28} className="text-[var(--cor-azul-acolhedor)]" aria-hidden="true" />
              <h2 className="text-2xl sm:text-3xl font-bold">
                Contar ou não o diagnóstico?
              </h2>
            </div>
            <p className="text-center text-[var(--cor-texto-corpo)] mb-8">
              A decisão de revelar (disclosure) o diagnóstico de TEA no trabalho é pessoal.
              Não existe resposta certa — depende do seu contexto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Lightbulb size={20} className="text-[var(--cor-dourado)]" aria-hidden="true" />
                  Vantagens de contar
                </h3>
                <ul className="space-y-2 text-sm text-[var(--cor-texto-corpo)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-dourado)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Acesso a adaptações razoáveis previstas em lei</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-dourado)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Elegibilidade para vagas PcD (Lei de Cotas)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-dourado)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Colegas e gestores entendem melhor suas necessidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-dourado)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Menos necessidade de mascarar — menor esgotamento</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Heart size={20} className="text-[var(--cor-azul-acolhedor)]" aria-hidden="true" />
                  Pontos de atenção
                </h3>
                <ul className="space-y-2 text-sm text-[var(--cor-texto-corpo)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-azul-acolhedor)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Infelizmente, preconceito ainda existe em muitos ambientes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-azul-acolhedor)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Alguns gestores podem subestimar suas capacidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-azul-acolhedor)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Você decide quando, para quem e quanto contar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-[var(--cor-azul-acolhedor)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <span>Disclosure pode ser parcial — conte só o necessário</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[var(--cor-dourado-suave)]/10 rounded-xl p-6 border border-[var(--cor-dourado)]/20">
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                <strong>Dica:</strong> Se decidir contar, escolha o momento adequado. Pode
                ser durante o processo seletivo (se for vaga PcD), no onboarding com seu
                gestor direto, ou quando sentir que tem confiança suficiente. Foque em
                explicar o que funciona melhor para você no dia a dia, em vez de listar
                dificuldades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizações de apoio */}
      <section aria-label="Organizações que podem ajudar" className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Organizações que podem ajudar
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Essas organizações oferecem apoio com empregabilidade, capacitação e inclusão
            profissional para autistas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {organizacoes.map((org) => (
              <div
                key={org.nome}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] flex flex-col"
              >
                <h3 className="font-bold text-lg mb-2">{org.nome}</h3>
                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-4 flex-1">
                  {org.descricao}
                </p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cor-azul-acolhedor)] hover:underline"
                >
                  Visitar site <ExternalLink size={14} />
                <span className="sr-only"> (abre em nova aba)</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Você não está sozinho" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles size={40} className="text-[var(--cor-dourado)] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Você não está sozinho
            </h2>
            <p className="text-[var(--cor-texto-corpo)] mb-8 leading-relaxed">
              Muitos profissionais autistas já conquistaram seu espaço no mercado de trabalho.
              Conheça histórias inspiradoras de quem já trilhou esse caminho.
            </p>
            <Link
              href="/inclusao/casos-de-sucesso"
              className="inline-flex items-center gap-2 bg-[var(--cor-dourado)] text-[var(--cor-azul-base)] font-bold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
            >
              Ver casos de sucesso
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Links relacionados */}
      <section aria-label="Conteúdos relacionados" className="py-12 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold mb-6">Conteúdos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/inclusao/para-empresas"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Guia para Empresas
              </h3>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                Compartilhe com seu empregador para promover inclusão.
              </p>
            </Link>
            <Link
              href="/informacao/direitos-trabalhistas"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Direitos Trabalhistas
              </h3>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                Legislação detalhada sobre seus direitos no trabalho.
              </p>
            </Link>
            <Link
              href="/recursos/grupos-de-ajuda"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Grupos de Ajuda
              </h3>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                Comunidades e redes de apoio para autistas.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
