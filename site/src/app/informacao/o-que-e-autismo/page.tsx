import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Brain,
  Heart,
  Eye,
  MessageCircle,
  Puzzle,
  Users,
  Stethoscope,
  Briefcase,
  ArrowRight,
  Phone,
  BookOpen,
  Scale,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "O que é Autismo (TEA)",
  description:
    "Entenda o Transtorno do Espectro Autista (TEA): definição, características, níveis de suporte, diagnóstico e a relação entre autismo e o mercado de trabalho.",
};

const linksRelacionados = [
  { label: "Mitos e Verdades", href: "/informacao/mitos-e-verdades", icon: HelpCircle },
  { label: "Direitos Trabalhistas", href: "/informacao/direitos-trabalhistas", icon: Scale },
  { label: "Legislação", href: "/informacao/legislacao", icon: BookOpen },
];

export default function OQueEAutismoPage() {
  return (
    <>
      {/* Header da página */}
      <section aria-label="O que é Autismo" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Informação", href: "/informacao" },
              { label: "O que é Autismo" },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              <Brain size={28} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              O que é Autismo?
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Um guia completo sobre o Transtorno do Espectro Autista (TEA): da definição
            ao impacto no mercado de trabalho.
          </p>
        </div>
      </section>

      {/* Conteúdo principal + Sidebar */}
      <section aria-label="Conteúdo sobre o autismo" className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Conteúdo principal */}
            <div className="flex-1 min-w-0">
              {/* Definição */}
              <article className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Puzzle size={24} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--cor-texto-principal)]">
                    Definição
                  </h2>
                </div>
                <div className="prose space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed" style={{ maxWidth: "72ch" }}>
                  <p>
                    O <strong className="text-[var(--cor-texto-principal)]">Transtorno do Espectro Autista (TEA)</strong> é
                    uma condição do neurodesenvolvimento que afeta a forma como a pessoa percebe o mundo,
                    se comunica e interage socialmente. Não é uma doença — é uma variação neurológica
                    natural da diversidade humana.
                  </p>
                  <p>
                    O TEA é caracterizado por diferenças na comunicação social, padrões de comportamento
                    repetitivos ou restritos, e sensibilidades sensoriais variadas. Essas características
                    se manifestam de formas muito diferentes em cada pessoa, por isso o termo
                    &ldquo;espectro&rdquo;.
                  </p>
                  <p>
                    De acordo com a{" "}
                    <a href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" target="_blank" rel="noopener noreferrer" lang="en" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">Organização Mundial da Saúde (OMS)<span className="sr-only"> (abre em nova aba)</span></a>,
                    estima-se que 1 em cada 100 crianças no mundo esteja no espectro autista. No Brasil, estudos recentes sugerem
                    uma prevalência semelhante, o que significa que existem cerca de 2 milhões de
                    pessoas autistas no país.
                  </p>
                  <div className="bg-[var(--cor-fundo-secundario)] border-l-4 border-l-[var(--cor-dourado)] rounded-r-lg p-5">
                    <p className="text-sm font-medium text-[var(--cor-texto-principal)] mb-1">
                      Importante
                    </p>
                    <p className="text-sm">
                      O autismo não é causado por vacinas, má criação ou traumas. É uma condição
                      neurobiológica com forte componente genético, presente desde o nascimento.
                      (<a href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" target="_blank" rel="noopener noreferrer" lang="en" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">OMS<span className="sr-only"> (abre em nova aba)</span></a>)
                    </p>
                  </div>
                </div>
              </article>

              {/* Características */}
              <article className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Eye size={24} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--cor-texto-principal)]">
                    Principais Características
                  </h2>
                </div>
                <div className="space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed mb-6">
                  <p>
                    Cada pessoa autista é única, mas existem áreas comuns em que as diferenças
                    se manifestam. As principais incluem:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[var(--cor-fundo)] border border-[var(--cor-cinza-claro)] rounded-xl p-5">
                    <MessageCircle size={22} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">Comunicação Social</h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      Dificuldades em interpretar linguagem não-verbal (expressões faciais, tom de voz,
                      gestos), preferência por comunicação direta e literal, desafios em iniciar ou
                      manter conversas informais.
                    </p>
                  </div>

                  <div className="bg-[var(--cor-fundo)] border border-[var(--cor-cinza-claro)] rounded-xl p-5">
                    <Users size={22} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">Interação Social</h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      Dificuldade em compreender regras sociais implícitas, preferência por interações
                      estruturadas, necessidade de mais tempo para processar situações sociais
                      complexas.
                    </p>
                  </div>

                  <div className="bg-[var(--cor-fundo)] border border-[var(--cor-cinza-claro)] rounded-xl p-5">
                    <Puzzle size={22} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">Padrões de Comportamento</h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      Interesses intensos e profundos (hiperfoco), preferência por rotinas e
                      previsibilidade, movimentos repetitivos (stimming) que ajudam na
                      autorregulação.
                    </p>
                  </div>

                  <div className="bg-[var(--cor-fundo)] border border-[var(--cor-cinza-claro)] rounded-xl p-5">
                    <Eye size={22} className="text-[var(--cor-dourado)] mb-3" aria-hidden="true" />
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">Sensibilidade Sensorial</h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      Hiper ou hipossensibilidade a estímulos como luz, som, texturas, cheiros e
                      sabores. Ambientes com excesso de estímulos podem causar sobrecarga sensorial.
                    </p>
                  </div>
                </div>
              </article>

              {/* O Espectro */}
              <article className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Heart size={24} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--cor-texto-principal)]">
                    O Espectro Autista
                  </h2>
                </div>
                <div className="space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed">
                  <p>
                    O autismo é chamado de &ldquo;espectro&rdquo; porque se manifesta de formas
                    extremamente diversas. Não existe uma linha reta de &ldquo;menos autista&rdquo;
                    a &ldquo;mais autista&rdquo; — cada pessoa possui um perfil único de habilidades
                    e desafios.
                  </p>
                  <p>
                    Atualmente, o{" "}
                    <a href="https://www.psychiatry.org/psychiatrists/practice/dsm" target="_blank" rel="noopener noreferrer" lang="en" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">DSM-5<span className="sr-only"> (abre em nova aba)</span></a>{" "}
                    (Manual Diagnóstico e Estatístico de Transtornos Mentais)
                    classifica o TEA em três níveis de suporte:
                  </p>
                </div>

                <div className="space-y-4 mt-6">
                  <div className="bg-[var(--cor-fundo-secundario)] rounded-xl p-5 border border-[var(--cor-cinza-claro)]">
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">
                      <span className="text-[var(--cor-dourado-texto)]">Nível 1</span> — Necessita de suporte
                    </h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      A pessoa pode ter dificuldades em iniciar interações sociais e pode parecer
                      ter menos interesse em relacionamentos. Geralmente consegue se comunicar em
                      frases completas, mas pode ter dificuldade com a reciprocidade na conversa.
                      Muitas pessoas neste nível trabalham, estudam e vivem de forma independente,
                      mas podem precisar de apoio em situações específicas.
                    </p>
                  </div>

                  <div className="bg-[var(--cor-fundo-secundario)] rounded-xl p-5 border border-[var(--cor-cinza-claro)]">
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">
                      <span className="text-[var(--cor-dourado-texto)]">Nível 2</span> — Necessita de suporte substancial
                    </h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      Apresenta déficits mais marcados na comunicação social verbal e não-verbal.
                      Mesmo com apoio, pode ter dificuldades em interações sociais. Comportamentos
                      restritos e repetitivos são mais evidentes e podem interferir no funcionamento
                      em vários contextos. Mudanças de rotina causam estresse significativo.
                    </p>
                  </div>

                  <div className="bg-[var(--cor-fundo-secundario)] rounded-xl p-5 border border-[var(--cor-cinza-claro)]">
                    <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">
                      <span className="text-[var(--cor-dourado-texto)]">Nível 3</span> — Necessita de suporte muito substancial
                    </h3>
                    <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                      Déficits graves na comunicação social verbal e não-verbal causam prejuízos
                      severos no funcionamento. Interações sociais muito limitadas e resposta mínima
                      a interações de outros. Comportamentos restritos e repetitivos interferem
                      significativamente em todas as áreas da vida. Grande dificuldade com mudanças.
                    </p>
                  </div>
                </div>

                <div className="bg-[var(--cor-fundo-secundario)] border-l-4 border-l-[var(--cor-azul-acolhedor)] rounded-r-lg p-5 mt-6">
                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                    <strong className="text-[var(--cor-texto-principal)]">Nota:</strong> Os níveis de suporte
                    não são fixos. Uma mesma pessoa pode precisar de mais suporte em determinadas áreas
                    (como interação social) e menos em outras (como tarefas profissionais). Além disso,
                    o nível de suporte pode variar ao longo da vida dependendo do contexto e dos
                    recursos disponíveis.
                  </p>
                </div>
              </article>

              {/* Diagnóstico */}
              <article className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Stethoscope size={24} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--cor-texto-principal)]">
                    Diagnóstico
                  </h2>
                </div>
                <div className="space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed">
                  <p>
                    O diagnóstico do TEA é clínico, ou seja, é feito por profissionais de saúde
                    especializados (neurologistas, psiquiatras, psicólogos) através da observação
                    do comportamento e da história de desenvolvimento da pessoa. Não existe um
                    exame de sangue ou de imagem que identifique o autismo.
                  </p>
                  <p>
                    O diagnóstico pode ser feito em qualquer idade, embora os sinais geralmente
                    se manifestem nos primeiros anos de vida. Muitos adultos, especialmente mulheres,
                    são diagnosticados tardiamente porque aprenderam a &ldquo;mascarar&rdquo;
                    (camuflar) suas características autistas — um processo conhecido como
                    <em> masking</em>, que pode causar exaustão e problemas de saúde mental.
                  </p>

                  <h3 className="font-bold text-[var(--cor-texto-principal)] text-lg mt-6">
                    Sinais que podem indicar TEA em adultos:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm">
                    <li>Dificuldade persistente em interações sociais e em entender regras sociais implícitas</li>
                    <li>Interesses intensos e muito focados em temas específicos</li>
                    <li>Necessidade forte de rotina e previsibilidade</li>
                    <li>Sensibilidade sensorial (incômodo com luzes, sons, texturas)</li>
                    <li>Dificuldade em compreender sarcasmo, ironia ou linguagem figurada</li>
                    <li>Sensação constante de ser &ldquo;diferente&rdquo; dos outros</li>
                    <li>Exaustão após situações sociais prolongadas</li>
                    <li>Histórico de ansiedade, depressão ou burnout recorrente</li>
                  </ul>

                  <div className="bg-[var(--cor-fundo-secundario)] border-l-4 border-l-[var(--cor-dourado)] rounded-r-lg p-5 mt-4">
                    <p className="text-sm">
                      <strong className="text-[var(--cor-texto-principal)]">Onde buscar diagnóstico:</strong>{" "}
                      Procure neurologistas ou psiquiatras especializados em TEA. O SUS oferece
                      avaliação diagnóstica nos CAPS (Centros de Atenção Psicossocial) e em centros
                      de referência em TEA. A Lei Berenice Piana (12.764/2012) garante o direito ao
                      diagnóstico precoce (<a href="https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm" target="_blank" rel="noopener noreferrer" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">texto da lei<span className="sr-only"> (abre em nova aba)</span></a>).
                    </p>
                  </div>
                </div>
              </article>

              {/* Autismo e Trabalho */}
              <article className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase size={24} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-[var(--cor-texto-principal)]">
                    Autismo e o Mercado de Trabalho
                  </h2>
                </div>
                <div className="space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed">
                  <p>
                    A realidade das pessoas autistas no mercado de trabalho brasileiro é alarmante.
                    Estima-se que <strong className="text-[var(--cor-texto-principal)]">cerca de 85%
                    dos adultos autistas estejam desempregados ou subempregados</strong> (<a href="https://www.autism.org.uk/what-we-do/news/new-data-on-the-autism-employment-gap" target="_blank" rel="noopener noreferrer" lang="en" className="text-[var(--cor-azul-acolhedor)] underline hover:brightness-125">National Autistic Society<span className="sr-only"> (abre em nova aba)</span></a>), mesmo aqueles
                    com formação acadêmica e habilidades técnicas relevantes.
                  </p>
                  <p>
                    Os principais obstáculos incluem processos seletivos que valorizam habilidades
                    sociais sobre competências técnicas, ambientes de trabalho sensorialmente
                    hostis, falta de adaptações razoáveis e, sobretudo, o preconceito e a
                    desinformação sobre o que significa ser autista.
                  </p>

                  <h3 className="font-bold text-[var(--cor-texto-principal)] text-lg mt-6">
                    Pontos fortes que autistas frequentemente trazem ao trabalho:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {[
                      "Atenção excepcional a detalhes",
                      "Capacidade de hiperfoco em tarefas",
                      "Pensamento lógico e analítico",
                      "Honestidade e transparência",
                      "Comprometimento com qualidade",
                      "Lealdade e dedicação à empresa",
                      "Criatividade na resolução de problemas",
                      "Memória apurada para dados e fatos",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 bg-[var(--cor-fundo-secundario)] rounded-lg p-3"
                      >
                        <span className="text-[var(--cor-dourado-texto)] font-bold mt-0.5 shrink-0">+</span>
                        <span className="text-sm text-[var(--cor-texto-corpo)]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="font-bold text-[var(--cor-texto-principal)] text-lg mt-6">
                    Adaptações simples que fazem a diferença:
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-sm mt-2">
                    <li>Comunicação clara e direta, com instruções por escrito</li>
                    <li>Espaço de trabalho com menos estímulos sensoriais (luz, ruído)</li>
                    <li>Flexibilidade de horário e possibilidade de trabalho remoto</li>
                    <li>Avisar com antecedência sobre mudanças na rotina</li>
                    <li>Permitir uso de fones de ouvido com cancelamento de ruído</li>
                    <li>Processos seletivos adaptados (entrevistas estruturadas, testes práticos)</li>
                    <li>Respeito ao tempo de processamento de informações</li>
                  </ul>
                </div>
              </article>

              {/* Links relacionados */}
              <div className="border-t border-[var(--cor-cinza-claro)] pt-8 mt-12">
                <h2 className="text-xl font-bold text-[var(--cor-texto-principal)] mb-6">
                  Continue explorando
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {linksRelacionados.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group flex items-center gap-3 bg-[var(--cor-fundo-secundario)] rounded-xl p-4 border border-[var(--cor-cinza-claro)] hover:border-[var(--cor-dourado)] transition-colors"
                      >
                        <Icon size={20} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                        <span className="text-sm font-semibold text-[var(--cor-texto-principal)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors">
                          {link.label}
                        </span>
                        <ArrowRight size={14} className="ml-auto text-[var(--cor-cinza-texto)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors" aria-hidden="true" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar (desktop) */}
            <aside className="hidden lg:block w-72 shrink-0">
              <div className="sticky top-8 space-y-6">
                {/* Links rápidos */}
                <div className="bg-[var(--cor-fundo-secundario)] rounded-xl p-5 border border-[var(--cor-cinza-claro)]">
                  <h3 className="font-bold text-[var(--cor-texto-principal)] mb-4 text-sm uppercase tracking-wide">
                    Links Relacionados
                  </h3>
                  <nav className="space-y-2">
                    {linksRelacionados.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-[var(--cor-texto-corpo)] hover:text-[var(--cor-azul-acolhedor)] transition-colors py-1"
                        >
                          <Icon size={16} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Seção de ajuda */}
                <div className="bg-[var(--cor-azul-base)] text-white rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Phone size={18} className="text-[var(--cor-dourado)]" aria-hidden="true" />
                    <h3 className="font-bold text-sm uppercase tracking-wide">
                      Precisa de ajuda?
                    </h3>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed mb-4">
                    Se você ou alguém que você conhece está passando por um momento difícil,
                    ligue para o CVV. O serviço funciona 24 horas, por telefone, chat e e-mail.
                  </p>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-sm text-white/80 mb-1">Centro de Valorização da Vida</p>
                    <p className="text-3xl font-bold text-[var(--cor-dourado-texto)]">188</p>
                    <p className="text-sm text-white/80 mt-1">Ligação gratuita, 24h</p>
                  </div>
                  <p className="text-sm text-white/80 mt-3 leading-relaxed">
                    Também disponível em{" "}
                    <span className="text-white/80 font-medium">www.cvv.org.br</span>{" "}
                    para chat e e-mail.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
