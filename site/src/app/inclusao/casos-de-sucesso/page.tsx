import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  ExternalLink,
  Globe,
  Quote,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de Sucesso",
  description:
    "Conheça empresas que lideram programas de neurodiversidade e histórias reais de profissionais autistas que conquistaram seu espaço no mercado de trabalho.",
};

const empresas = [
  {
    nome: "SAP",
    programa: "Autism at Work",
    anoInicio: 2013,
    fonteUrl: "https://www.sap.com/about/company/diversity/differently-abled.html",
    descricao:
      "Um dos programas pioneiros de inclusão de autistas no mundo corporativo. A SAP se comprometeu a ter 1% de sua força de trabalho composta por pessoas autistas até 2020 — meta que superou.",
    resultados: [
      "Mais de 200 colaboradores autistas em 15 países",
      "Aumento mensurável em inovação e qualidade de software",
      "Redução de rotatividade entre os participantes do programa",
      "Premiado como referência global em inclusão corporativa",
    ],
    pais: "Alemanha / Global",
  },
  {
    nome: "Microsoft",
    programa: "Neurodiversity Hiring Program",
    anoInicio: 2015,
    fonteUrl: "https://www.microsoft.com/en-us/diversity/inside-microsoft/cross-disability/neurodiversityhiring",
    descricao:
      "A Microsoft redesenhou completamente seu processo seletivo para acolher candidatos neurodivergentes, substituindo entrevistas tradicionais por semanas de avaliação prática e integração.",
    resultados: [
      "Processo seletivo adaptado com avaliação prática de 4 dias",
      "Mentoria dedicada e suporte contínuo para novos contratados",
      "Profissionais atuam em engenharia, ciência de dados e design",
      "Programa expandido para múltiplas localidades globais",
    ],
    pais: "Estados Unidos / Global",
  },
  {
    nome: "Specialisterne",
    programa: "Consultoria em Neurodiversidade",
    anoInicio: 2004,
    fonteUrl: "https://www.specialisterne.com",
    descricao:
      "Fundada na Dinamarca por Thorkil Sonne, pai de um jovem autista, a Specialisterne conecta profissionais autistas a empresas e oferece treinamento e suporte. Presente no Brasil desde 2015.",
    resultados: [
      "Mais de 10.000 pessoas autistas empregadas em 25+ países",
      "Atuação no Brasil com parceiros corporativos relevantes",
      "Modelo replicado e reconhecido pela ONU e Fórum Econômico Mundial",
      "Taxa de retenção acima de 90% entre profissionais colocados",
    ],
    pais: "Dinamarca / Brasil / Global",
  },
  {
    nome: "Auticon",
    programa: "Consultoria de TI 100% Autista",
    anoInicio: 2011,
    fonteUrl: "https://auticon.com",
    descricao:
      "A Auticon é a primeira empresa do mundo cujos consultores de tecnologia são exclusivamente pessoas autistas. Oferece serviços de QA, análise de dados, cibersegurança e compliance.",
    resultados: [
      "Todos os consultores de tecnologia são profissionais autistas",
      "Presente em 8 países com mais de 300 consultores",
      "Clientes incluem grandes corporações e órgãos governamentais",
      "Job coaches dedicados garantem suporte individualizado",
    ],
    pais: "Alemanha / Global",
  },
];

const historias = [
  {
    nome: "Rafael, 32 anos",
    cargo: "Desenvolvedor de Software",
    cidade: "São Paulo, SP",
    historia:
      "Diagnosticado aos 24 anos durante a faculdade de Ciência da Computação, Rafael enfrentou anos de desemprego após se formar. Descobriu a vaga PcD em uma empresa de tecnologia e hoje é desenvolvedor sênior. Seu hiperfoco em resolver bugs complexos o tornou referência na equipe.",
    citacao:
      "O diagnóstico não mudou quem eu sou, mas mudou como eu me entendo. Quando parei de tentar parecer neurotípico, meu trabalho melhorou muito.",
  },
  {
    nome: "Camila, 27 anos",
    cargo: "Analista de Qualidade",
    cidade: "Curitiba, PR",
    historia:
      "Camila foi diagnosticada tardiamente, aos 22 anos. Após passar por três empregos onde não conseguia se adaptar ao ambiente sensorial, encontrou uma empresa com programa de neurodiversidade. Com adaptações simples — fones de ouvido e trabalho híbrido — sua produtividade disparou.",
    citacao:
      "Eu não precisava mudar quem eu sou. A empresa precisava mudar o ambiente. Quando fizeram isso, todo mundo ganhou.",
  },
  {
    nome: "Pedro, 41 anos",
    cargo: "Especialista em Dados",
    cidade: "Belo Horizonte, MG",
    historia:
      "Com 20 anos de carreira, Pedro só recebeu o diagnóstico de TEA aos 38. Toda a sua trajetória profissional foi marcada por exaustão por mascaramento. Ao compartilhar o diagnóstico com seu gestor, recebeu apoio para adaptar sua rotina e hoje lidera projetos de análise de dados.",
    citacao:
      "Passei duas décadas fingindo ser alguém que não sou. O disclosure foi libertador — meu gestor disse 'agora faz sentido por que você é tão bom no que faz'.",
  },
  {
    nome: "Ana Luísa, 24 anos",
    cargo: "Designer UX",
    cidade: "Florianópolis, SC",
    historia:
      "Diagnosticada na infância, Ana Luísa sempre soube do autismo. Entrou no mercado pelo programa de estágio inclusivo de uma startup de design. Sua atenção meticulosa a padrões de usabilidade e acessibilidade a tornaram uma peça fundamental na equipe de produto.",
    citacao:
      "Eu vejo os detalhes que outras pessoas não veem. Na área de UX, isso é um superpoder. Minha equipe aprendeu que diferente não é menos.",
  },
];

export default function CasosDeSucesso() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Inclusão", href: "/inclusao/para-empresas" },
              { label: "Casos de Sucesso" },
            ]}
          />
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Trophy size={32} className="text-[var(--cor-dourado)]" aria-hidden="true" />
              <span className="text-[var(--cor-hero-destaque)] font-semibold text-sm uppercase tracking-wider">
                Casos de Sucesso
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Quem já faz a diferença
            </h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">
              Conheça empresas que lideram a inclusão de autistas e profissionais que
              conquistaram seu espaço. Histórias reais que provam: a neurodiversidade
              funciona.
            </p>
          </div>
        </div>
      </section>

      {/* Programas corporativos */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Programas corporativos de referência
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Empresas globais que provaram com resultados concretos que a inclusão de
            profissionais autistas é uma estratégia vencedora.
          </p>
          <div className="space-y-8">
            {empresas.map((emp) => (
              <div
                key={emp.nome}
                className="bg-[var(--cor-fundo)] rounded-xl border border-[var(--cor-cinza-claro)] overflow-hidden"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <Building2
                          size={24}
                          className="text-[var(--cor-azul-profundo)]"
                        />
                        <h3 className="text-xl sm:text-2xl font-bold">{emp.nome}</h3>
                      </div>
                      <p className="text-sm text-[var(--cor-azul-acolhedor)] font-semibold">
                        {emp.programa}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[var(--cor-cinza-texto)]">
                      <span className="flex items-center gap-1">
                        <Globe size={14} />
                        {emp.pais}
                      </span>
                      <span className="flex items-center gap-1">
                        <Award size={14} />
                        Desde {emp.anoInicio}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-3">
                    {emp.descricao}
                  </p>
                  {emp.fonteUrl && (
                    <p className="mb-5">
                      <a
                        href={emp.fonteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline inline-flex items-center gap-1"
                      >
                        <ExternalLink size={12} />
                        Site oficial do programa
                      <span className="sr-only"> (abre em nova aba)</span></a>
                    </p>
                  )}

                  <div className="bg-[var(--cor-fundo-secundario)] rounded-lg p-4">
                    <h4 className="text-sm font-bold mb-3 flex items-center gap-2">
                      <BarChart3
                        size={16}
                        className="text-[var(--cor-dourado)]"
                      />
                      Resultados
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {emp.resultados.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-[var(--cor-texto-corpo)]"
                        >
                          <Star
                            size={14}
                            className="text-[var(--cor-dourado)] flex-shrink-0 mt-0.5"
                          />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histórias individuais */}
      <section className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Histórias de profissionais autistas
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-4 max-w-2xl mx-auto">
            Cada trajetória é única, mas todas compartilham uma verdade: com o ambiente
            certo, profissionais autistas prosperam.
          </p>
          <p className="text-center text-xs text-[var(--cor-cinza-texto)] mb-12 max-w-2xl mx-auto italic">
            * As histórias abaixo são ilustrativas, baseadas em experiências reais relatadas pela comunidade autista.
            Nomes e detalhes foram alterados para preservar a privacidade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historias.map((h) => (
              <div
                key={h.nome}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 sm:p-8 border border-[var(--cor-cinza-claro)]"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-lg">{h.nome}</h3>
                  <p className="text-sm text-[var(--cor-azul-acolhedor)] font-semibold">
                    {h.cargo}
                  </p>
                  <p className="text-xs text-[var(--cor-cinza-texto)]">{h.cidade}</p>
                </div>

                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-4">
                  {h.historia}
                </p>

                <blockquote className="border-l-4 border-l-[var(--cor-dourado-suave)] pl-4 py-2">
                  <Quote
                    size={16}
                    className="text-[var(--cor-dourado)] mb-1"
                  />
                  <p className="text-sm text-[var(--cor-texto-corpo)] italic leading-relaxed">
                    &ldquo;{h.citacao}&rdquo;
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dados de impacto */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Neurodiversidade em números
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 text-center border border-[var(--cor-cinza-claro)]">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--cor-dourado-texto)] mb-2">
                48%
              </p>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                mais rápidos em tarefas — relatório JPMorgan sobre seu programa Autism at
                Work
              </p>
              <a href="https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline mt-2 inline-block">Fonte: HBR, 2017<span className="sr-only"> (abre em nova aba)</span></a>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 text-center border border-[var(--cor-cinza-claro)]">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--cor-dourado-texto)] mb-2">
                90%+
              </p>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                de retenção entre profissionais autistas colocados pela Specialisterne
              </p>
              <a href="https://www.specialisterne.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline mt-2 inline-block">Fonte: Specialisterne<span className="sr-only"> (abre em nova aba)</span></a>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 text-center border border-[var(--cor-cinza-claro)]">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--cor-dourado-texto)] mb-2">
                200+
              </p>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                colaboradores autistas contratados pela SAP em mais de 15 países
              </p>
              <a href="https://www.sap.com/about/company/diversity/differently-abled.html" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline mt-2 inline-block">Fonte: SAP<span className="sr-only"> (abre em nova aba)</span></a>
            </div>
            <div className="bg-[var(--cor-fundo)] rounded-xl p-6 text-center border border-[var(--cor-cinza-claro)]">
              <p className="text-3xl sm:text-4xl font-bold text-[var(--cor-dourado-texto)] mb-2">
                92%
              </p>
              <p className="text-sm text-[var(--cor-texto-corpo)]">
                mais produtivos — profissionais do programa de neurodiversidade da JPMorgan
              </p>
              <a href="https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline mt-2 inline-block">Fonte: HBR, 2017<span className="sr-only"> (abre em nova aba)</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles size={40} className="text-[var(--cor-dourado)] mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Sua empresa quer fazer parte dessa lista?
            </h2>
            <p className="text-[var(--cor-texto-corpo)] mb-8 leading-relaxed">
              Comece hoje mesmo a construir um programa de neurodiversidade. Nosso guia tem
              o passo a passo completo para implementar a inclusão de autistas na sua
              organização.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/inclusao/para-empresas"
                className="inline-flex items-center gap-2 bg-[var(--cor-dourado)] text-[var(--cor-azul-base)] font-bold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
              >
                Guia para Empresas
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/inclusao/para-autistas"
                className="inline-flex items-center gap-2 border-2 border-[var(--cor-azul-profundo)] text-[var(--cor-azul-profundo)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--cor-azul-profundo)]/5 transition min-h-12"
              >
                Guia para Autistas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Links relacionados */}
      <section className="py-12">
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
              <p className="text-xs text-[var(--cor-texto-corpo)]">
                Passo a passo para implementar inclusão na sua empresa.
              </p>
            </Link>
            <Link
              href="/inclusao/para-autistas"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                Guia para Autistas
              </h3>
              <p className="text-xs text-[var(--cor-texto-corpo)]">
                Direitos, dicas e organizações de apoio para profissionais.
              </p>
            </Link>
            <Link
              href="/informacao/o-que-e-autismo"
              className="group bg-[var(--cor-fundo)] rounded-lg p-4 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-sm mb-1 group-hover:text-[var(--cor-azul-acolhedor)]">
                O que é Autismo
              </h3>
              <p className="text-xs text-[var(--cor-texto-corpo)]">
                Entenda o Transtorno do Espectro Autista com informações confiáveis.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
