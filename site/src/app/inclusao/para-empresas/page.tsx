import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Eye,
  Handshake,
  Headphones,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Volume2,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Guia para Empresas",
  description:
    "Guia completo para empresas que desejam contratar e incluir profissionais autistas. Benefícios, passo a passo, adaptações e legislação.",
};

const beneficios = [
  {
    icon: Target,
    titulo: "Hiperfoco e precisão",
    descricao:
      "Profissionais autistas frequentemente demonstram atenção excepcional a detalhes e capacidade de manter o foco prolongado em tarefas complexas.",
  },
  {
    icon: Lightbulb,
    titulo: "Pensamento inovador",
    descricao:
      "A neurodiversidade traz perspectivas únicas para resolução de problemas, impulsionando inovação e criatividade nas equipes.",
  },
  {
    icon: ShieldCheck,
    titulo: "Lealdade e comprometimento",
    descricao:
      "Estudos mostram que funcionários autistas tendem a ter menor rotatividade e alto comprometimento com suas funções.",
    fonte: { nome: "HBR — Neurodiversity as Competitive Advantage", url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage" },
  },
  {
    icon: TrendingUp,
    titulo: "Produtividade elevada",
    descricao:
      "A JPMorgan relatou que profissionais autistas em seu programa eram 48% mais rápidos e 92% mais produtivos que colegas neurotípicos.",
    fonte: { nome: "HBR — Neurodiversity as Competitive Advantage", url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage" },
  },
  {
    icon: Users,
    titulo: "Melhoria do clima organizacional",
    descricao:
      "Empresas inclusivas reportam maior satisfação geral dos funcionários e melhor comunicação entre equipes.",
  },
  {
    icon: Handshake,
    titulo: "Responsabilidade social",
    descricao:
      "Demonstra compromisso real com ESG e diversidade, fortalecendo a marca empregadora e a reputação da empresa.",
  },
];

const passos = [
  {
    numero: 1,
    titulo: "Sensibilize a liderança e as equipes",
    descricao:
      "Promova treinamentos sobre neurodiversidade para gestores e colaboradores. Desmistifique o autismo e combata estereótipos. A conscientização é a base de qualquer programa inclusivo bem-sucedido.",
    dica: "Convide palestrantes autistas para compartilhar suas experiências.",
  },
  {
    numero: 2,
    titulo: "Adapte o processo seletivo",
    descricao:
      "Revise descrições de vagas para focar em habilidades reais necessárias. Ofereça alternativas a entrevistas tradicionais, como testes práticos, períodos de experiência ou entrevistas estruturadas com perguntas previamente enviadas.",
    dica: "Evite perguntas abstratas como 'onde você se vê em 5 anos?'.",
  },
  {
    numero: 3,
    titulo: "Prepare o ambiente de trabalho",
    descricao:
      "Identifique e minimize estímulos sensoriais excessivos. Ofereça espaços silenciosos, permita uso de fones de ouvido e considere flexibilidade de horários e trabalho remoto.",
    dica: "Essas adaptações beneficiam todos os funcionários, não apenas autistas.",
  },
  {
    numero: 4,
    titulo: "Implemente suporte contínuo",
    descricao:
      "Designe mentores ou 'buddies' para os primeiros meses. Mantenha check-ins regulares com instruções claras e feedback direto. Documente processos e expectativas por escrito.",
    dica: "Comunicação clara e objetiva é a chave do sucesso.",
  },
  {
    numero: 5,
    titulo: "Avalie e aprimore constantemente",
    descricao:
      "Meça resultados do programa com métricas objetivas. Colete feedback dos profissionais autistas e das equipes. Ajuste políticas com base em dados reais e compartilhe aprendizados internamente.",
    dica: "Publique relatórios de impacto para inspirar outras empresas.",
  },
];

const adaptacoes = [
  {
    icon: Headphones,
    titulo: "Ambiente sensorial",
    itens: [
      "Ofereça fones com cancelamento de ruído",
      "Permita ajuste de iluminação na estação de trabalho",
      "Disponibilize espaços silenciosos para concentração",
      "Reduza estímulos visuais excessivos em áreas comuns",
    ],
  },
  {
    icon: Clock,
    titulo: "Rotina e organização",
    itens: [
      "Forneça cronogramas claros e previsíveis",
      "Avise com antecedência sobre mudanças de rotina",
      "Permita flexibilidade de horários quando possível",
      "Documente processos e expectativas por escrito",
    ],
  },
  {
    icon: Eye,
    titulo: "Comunicação",
    itens: [
      "Use linguagem direta e objetiva",
      "Evite sarcasmo e expressões ambíguas em instruções",
      "Ofereça feedback por escrito além do verbal",
      "Permita tempo extra para processamento de informações",
    ],
  },
  {
    icon: Wrench,
    titulo: "Espaço físico",
    itens: [
      "Ofereça opção de trabalho remoto ou híbrido",
      "Disponibilize estações de trabalho em áreas menos movimentadas",
      "Permita personalização do espaço de trabalho",
      "Tenha uma sala de descompressão disponível",
    ],
  },
];

export default function ParaEmpresas() {
  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Inclusão", href: "/inclusao/para-empresas" },
              { label: "Guia para Empresas" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Building2 size={32} className="text-[var(--cor-dourado)]" aria-hidden="true" />
              <span className="text-[var(--cor-hero-destaque)] font-semibold text-sm uppercase tracking-wider">
                Guia Completo
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Inclusão de autistas na sua empresa
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Tudo o que sua empresa precisa saber para contratar, acolher e reter
              profissionais autistas. Um guia prático e baseado em evidências.
            </p>
          </div>
        </div>
      </section>

      {/* Por que contratar */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Por que contratar profissionais autistas?
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            A neurodiversidade não é apenas uma questão de responsabilidade social — é uma
            vantagem competitiva comprovada por empresas líderes globais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.titulo}
                  className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[var(--cor-dourado)]" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{b.titulo}</h3>
                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                    {b.descricao}
                  </p>
                  {b.fonte && (
                    <a
                      href={b.fonte.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline mt-2 inline-block"
                    >
                      Fonte: {b.fonte.nome}
                    <span className="sr-only"> (abre em nova aba)</span></a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 Passos - Timeline */}
      <section className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Como começar: 5 passos essenciais
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Um roteiro prático para implementar um programa de neurodiversidade na sua
            organização.
          </p>
          <div className="relative max-w-3xl mx-auto">
            {/* Linha vertical da timeline */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--cor-dourado)]/30 hidden sm:block" />

            <div className="space-y-8">
              {passos.map((passo) => (
                <div key={passo.numero} className="relative flex gap-6">
                  {/* Número */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--cor-dourado)] text-[var(--cor-azul-base)] font-bold text-lg flex items-center justify-center z-10">
                    {passo.numero}
                  </div>
                  {/* Conteúdo */}
                  <div className="flex-1 bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]">
                    <h3 className="font-bold text-lg mb-2">{passo.titulo}</h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-3">
                      {passo.descricao}
                    </p>
                    <div className="flex items-start gap-2 bg-[var(--cor-dourado-suave)]/10 rounded-lg p-3">
                      <Sparkles
                        size={16}
                        className="text-[var(--cor-dourado)] flex-shrink-0 mt-0.5"
                      />
                      <p className="text-xs text-[var(--cor-texto-corpo)]">
                        <strong>Dica:</strong> {passo.dica}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adaptações no ambiente */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Adaptações no ambiente de trabalho
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Pequenas mudanças que fazem grande diferença — e beneficiam todos os colaboradores.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {adaptacoes.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.titulo}
                  className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={24} className="text-[var(--cor-azul-acolhedor)]" aria-hidden="true" />
                    <h3 className="font-bold text-lg">{cat.titulo}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.itens.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--cor-texto-corpo)]">
                        <CheckCircle2
                          size={16}
                          className="text-[var(--cor-dourado)] flex-shrink-0 mt-0.5"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Legislação resumida */}
      <section className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            O que diz a legislação
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            As principais leis brasileiras que protegem e promovem a inclusão de autistas no
            mercado de trabalho.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-dourado)]">
              <Scale size={28} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
              <h3 className="font-bold mb-2">Lei Berenice Piana</h3>
              <p className="text-xs text-[var(--cor-cinza-texto)] mb-2">Lei 12.764/2012</p>
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                Reconhece o autista como pessoa com deficiência para todos os efeitos legais,
                garantindo acesso a trabalho, educação e saúde.
              </p>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-dourado)]">
              <Users size={28} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
              <h3 className="font-bold mb-2">Lei de Cotas</h3>
              <p className="text-xs text-[var(--cor-cinza-texto)] mb-2">Lei 8.213/1991</p>
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                Empresas com 100+ funcionários devem reservar de 2% a 5% das vagas para PcD.
                Autistas com laudo são elegíveis para essas vagas.
              </p>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-dourado)]">
              <ShieldCheck size={28} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
              <h3 className="font-bold mb-2">Estatuto da PcD</h3>
              <p className="text-xs text-[var(--cor-cinza-texto)] mb-2">Lei 13.146/2015</p>
              <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                Garante adaptação razoável no ambiente de trabalho e proíbe discriminação em
                processos seletivos e no exercício profissional.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/informacao/legislacao"
              className="inline-flex items-center gap-2 text-[var(--cor-azul-acolhedor)] font-semibold hover:underline"
            >
              Ver legislação completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles size={40} className="text-[var(--cor-dourado)] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Veja quem já está fazendo a diferença
            </h2>
            <p className="text-[var(--cor-texto-corpo)] mb-8 leading-relaxed">
              Empresas como{" "}
              <a href="https://www.sap.com/about/company/diversity/differently-abled.html" target="_blank" rel="noopener noreferrer" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">SAP<span className="sr-only"> (abre em nova aba)</span></a>,{" "}
              <a href="https://www.microsoft.com/en-us/diversity/inside-microsoft/cross-disability/neurodiversityhiring" target="_blank" rel="noopener noreferrer" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">Microsoft<span className="sr-only"> (abre em nova aba)</span></a> e{" "}
              <a href="https://auticon.com" target="_blank" rel="noopener noreferrer" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">Auticon<span className="sr-only"> (abre em nova aba)</span></a>{" "}
              já colhem os frutos da inclusão de profissionais autistas. Conheça seus programas e resultados.
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
      <section className="py-12 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg font-bold mb-6">Conteúdos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link
              href="/inclusao/para-autistas"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Guia para Autistas
              </h3>
              <p className="text-xs text-[var(--cor-texto-corpo)]">
                Direitos, dicas de entrevista e organizações de apoio.
              </p>
            </Link>
            <Link
              href="/inclusao/casos-de-sucesso"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Casos de Sucesso
              </h3>
              <p className="text-xs text-[var(--cor-texto-corpo)]">
                Empresas que lideram programas de neurodiversidade.
              </p>
            </Link>
            <Link
              href="/informacao/direitos-trabalhistas"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Direitos Trabalhistas
              </h3>
              <p className="text-xs text-[var(--cor-texto-corpo)]">
                Legislação detalhada sobre inclusão no trabalho.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
