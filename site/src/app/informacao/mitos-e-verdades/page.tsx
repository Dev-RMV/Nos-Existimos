import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, BookOpen, Scale, Brain, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Mitos e Verdades sobre o Autismo",
  description:
    "Desmistifique o autismo: conheça os mitos mais comuns sobre o Transtorno do Espectro Autista (TEA) e saiba quais são as verdades baseadas em evidências.",
};

const mitos = [
  {
    mito: "Autistas não sentem empatia nem têm sentimentos.",
    verdade:
      "Pessoas autistas sentem emoções intensamente. O que pode variar é a forma como expressam ou interpretam emoções dos outros. Muitos autistas possuem empatia profunda, mas podem demonstrá-la de maneiras diferentes do esperado socialmente.",
    fontes: [
      { nome: "NIH — Empathy in Autism", url: "https://pubmed.ncbi.nlm.nih.gov/19639354/" },
    ],
  },
  {
    mito: "O autismo é causado por vacinas.",
    verdade:
      "Essa informação falsa originou-se de um estudo fraudulento publicado em 1998 e retratado pela The Lancet em 2010. Dezenas de estudos científicos rigorosos, envolvendo milhões de crianças, comprovaram que não há nenhuma relação entre vacinas e autismo.",
    fontes: [
      { nome: "Retratação — The Lancet", url: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(10)60175-4/fulltext" },
      { nome: "OMS — Vacinas e Autismo", url: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
    ],
  },
  {
    mito: "Autismo é uma doença que tem cura.",
    verdade:
      "O autismo não é uma doença, é uma condição neurológica. Não existe cura porque não há o que curar. Terapias e suportes adequados podem ajudar a pessoa autista a desenvolver habilidades e melhorar sua qualidade de vida, mas o objetivo nunca é 'eliminar' o autismo.",
    fontes: [
      { nome: "OMS — Autism Fact Sheet", url: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
    ],
  },
  {
    mito: "Todo autista é gênio ou tem uma habilidade extraordinária.",
    verdade:
      "Embora algumas pessoas autistas tenham habilidades excepcionais em áreas específicas (chamadas de 'savant'), isso ocorre em uma minoria. A maioria tem um perfil variado de habilidades e dificuldades, assim como qualquer outra pessoa.",
  },
  {
    mito: "Autistas não conseguem trabalhar.",
    verdade:
      "Muitas pessoas autistas são profissionais competentes e dedicados. O alto desemprego se deve principalmente à falta de adaptações no ambiente de trabalho e ao preconceito nos processos seletivos — não à incapacidade. Empresas como SAP, Microsoft e JP Morgan têm programas específicos de contratação de autistas com resultados excelentes.",
    fontes: [
      { nome: "SAP — Autism at Work", url: "https://www.sap.com/about/company/diversity/differently-abled.html" },
      { nome: "Microsoft — Neurodiversity Hiring", url: "https://www.microsoft.com/en-us/diversity/inside-microsoft/cross-disability/neurodiversityhiring" },
      { nome: "HBR — Neurodiversity as Competitive Advantage", url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage" },
    ],
  },
  {
    mito: "O autismo só afeta crianças.",
    verdade:
      "O autismo é uma condição que acompanha a pessoa durante toda a vida. Crianças autistas tornam-se adultos autistas. Muitos adultos, inclusive, só recebem o diagnóstico na vida adulta, especialmente mulheres que aprenderam a mascarar suas características.",
    fontes: [
      { nome: "NIH — Autism in Adults", url: "https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" },
    ],
  },
  {
    mito: "Autistas preferem ficar sozinhos e não querem amigos.",
    verdade:
      "Muitas pessoas autistas desejam ter relacionamentos e amizades, mas podem ter dificuldade em navegar as regras sociais implícitas. O isolamento frequentemente é resultado da rejeição social, não de uma escolha. Oferecer ambientes estruturados e acolhedores facilita a socialização.",
  },
  {
    mito: "Má criação dos pais causa autismo.",
    verdade:
      "O autismo tem base neurobiológica e forte componente genético. A teoria da 'mãe geladeira', que culpava os pais, foi completamente refutada pela ciência há décadas. Pais de autistas precisam de apoio, não de culpa.",
    fontes: [
      { nome: "NIH — Genética do Autismo", url: "https://www.genome.gov/Genetic-Disorders/Autism-Spectrum-Disorder" },
    ],
  },
  {
    mito: "Se a pessoa fala e faz contato visual, não é autista.",
    verdade:
      "O espectro autista é muito amplo. Muitas pessoas autistas falam fluentemente e conseguem fazer contato visual (embora possa ser desconfortável). O masking (camuflagem social) pode fazer com que a pessoa pareça neurotípica em algumas situações, mas com grande custo emocional.",
  },
  {
    mito: "Autistas não podem ter relacionamentos amorosos ou formar famílias.",
    verdade:
      "Pessoas autistas podem e têm relacionamentos amorosos saudáveis, se casam e formam famílias. Podem precisar de maior clareza na comunicação dentro do relacionamento, mas são perfeitamente capazes de conexões afetivas profundas.",
  },
  {
    mito: "Todos os autistas são iguais.",
    verdade:
      "O ditado na comunidade autista diz: 'Se você conheceu um autista, você conheceu UM autista.' O espectro é extremamente diverso. Cada pessoa tem seu próprio perfil de habilidades, desafios, interesses e personalidade.",
  },
  {
    mito: "Autismo é resultado de tempo demais em telas.",
    verdade:
      "O autismo é uma condição neurológica presente desde o nascimento, com forte base genética. O uso de telas não causa autismo. No entanto, os sinais de autismo podem se tornar mais visíveis na idade em que as crianças começam a usar mais telas, o que gera uma correlação falsa.",
    fontes: [
      { nome: "OMS — Autism Fact Sheet", url: "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" },
    ],
  },
];

export default function MitosEVerdadesPage() {
  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Informação", href: "/informacao" },
              { label: "Mitos e Verdades" },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              <ShieldAlert size={28} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Mitos e Verdades
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            A desinformação sobre o autismo alimenta o preconceito. Conheça os mitos mais
            comuns e as verdades baseadas em ciência.
          </p>
        </div>
      </section>

      {/* Cards de Mitos e Verdades */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {mitos.map((item, i) => (
              <div
                key={i}
                className="bg-[var(--cor-fundo)] rounded-xl border border-[var(--cor-cinza-claro)] overflow-hidden"
              >
                {/* Mito */}
                <div className="flex items-start gap-4 p-5 sm:p-6 bg-red-50 dark:bg-red-950/20 border-b border-[var(--cor-cinza-claro)]">
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-red-600 dark:text-red-400 font-bold text-lg" aria-hidden="true">
                      &#10005;
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      Mito
                    </span>
                    <p className="text-[var(--cor-texto-principal)] font-semibold mt-1 leading-relaxed">
                      {item.mito}
                    </p>
                  </div>
                </div>

                {/* Verdade */}
                <div className="flex items-start gap-4 p-5 sm:p-6">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg" aria-hidden="true">
                      &#10003;
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-600 dark:text-green-400">
                      Verdade
                    </span>
                    <p className="text-[var(--cor-texto-corpo)] mt-1 leading-relaxed text-sm">
                      {item.verdade}
                    </p>
                    {item.fontes && (
                      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
                        {item.fontes.map((f: { nome: string; url: string }) => (
                          <a
                            key={f.url}
                            href={f.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-[var(--cor-azul-acolhedor)] hover:underline"
                          >
                            Fonte: {f.nome}
                          <span className="sr-only"> (abre em nova aba)</span></a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Links relacionados */}
          <div className="border-t border-[var(--cor-cinza-claro)] pt-8 mt-12">
            <h2 className="text-xl font-bold text-[var(--cor-texto-principal)] mb-6">
              Continue explorando
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/informacao/o-que-e-autismo"
                className="group flex items-center gap-3 bg-[var(--cor-fundo-secundario)] rounded-xl p-4 border border-[var(--cor-cinza-claro)] hover:border-[var(--cor-dourado)] transition-colors"
              >
                <Brain size={20} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--cor-texto-principal)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors">
                  O que é Autismo
                </span>
                <ArrowRight size={14} className="ml-auto text-[var(--cor-cinza-texto)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors" aria-hidden="true" />
              </Link>
              <Link
                href="/informacao/direitos-trabalhistas"
                className="group flex items-center gap-3 bg-[var(--cor-fundo-secundario)] rounded-xl p-4 border border-[var(--cor-cinza-claro)] hover:border-[var(--cor-dourado)] transition-colors"
              >
                <Scale size={20} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--cor-texto-principal)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors">
                  Direitos Trabalhistas
                </span>
                <ArrowRight size={14} className="ml-auto text-[var(--cor-cinza-texto)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors" aria-hidden="true" />
              </Link>
              <Link
                href="/informacao/legislacao"
                className="group flex items-center gap-3 bg-[var(--cor-fundo-secundario)] rounded-xl p-4 border border-[var(--cor-cinza-claro)] hover:border-[var(--cor-dourado)] transition-colors"
              >
                <BookOpen size={20} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--cor-texto-principal)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors">
                  Legislação
                </span>
                <ArrowRight size={14} className="ml-auto text-[var(--cor-cinza-texto)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
