import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  BookOpen,
  ExternalLink,
  Calendar,
  ArrowRight,
  Brain,
  Scale,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legislação sobre Autismo no Brasil",
  description:
    "Conheça as principais leis brasileiras que protegem os direitos das pessoas com Transtorno do Espectro Autista (TEA): Lei Berenice Piana, Lei de Cotas, Estatuto da Pessoa com Deficiência e Lei Romeo Mion.",
};

const leis = [
  {
    numero: "Lei 12.764/2012",
    nome: "Lei Berenice Piana",
    data: "27 de dezembro de 2012",
    descricao:
      "Institui a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista. É o marco legal mais importante para os direitos dos autistas no Brasil, pois equipara a pessoa com TEA à pessoa com deficiência para todos os efeitos legais.",
    pontos: [
      "Define o conceito de Transtorno do Espectro Autista para fins legais",
      "Estabelece que a pessoa com TEA é considerada pessoa com deficiência",
      "Garante direito a diagnóstico precoce, tratamento, terapias e medicação",
      "Assegura acesso à educação, ao trabalho e a serviços de saúde pelo SUS",
      "Prevê atendimento multiprofissional e nutrição adequada",
      "Estabelece punição (multa de 3 a 20 salários mínimos) ao gestor escolar que recusar matrícula",
      "Incentiva a formação e capacitação de profissionais especializados",
      "Estimula pesquisas científicas sobre o TEA",
    ],
    link: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm",
  },
  {
    numero: "Lei 8.213/1991",
    nome: "Lei de Cotas para Pessoas com Deficiência",
    data: "24 de julho de 1991",
    descricao:
      "Dispõe sobre os Planos de Benefícios da Previdência Social e estabelece a obrigatoriedade de empresas com 100 ou mais empregados preencherem uma parcela de seus cargos com pessoas com deficiência ou reabilitados. Aplicável a autistas desde a Lei Berenice Piana.",
    pontos: [
      "Empresas com 100 a 200 empregados: reserva de 2% das vagas",
      "Empresas com 201 a 500 empregados: reserva de 3% das vagas",
      "Empresas com 501 a 1.000 empregados: reserva de 4% das vagas",
      "Empresas com mais de 1.001 empregados: reserva de 5% das vagas",
      "A dispensa de trabalhador com deficiência só pode ocorrer após contratação de substituto em condição semelhante",
      "Fiscalização pelo Ministério do Trabalho com aplicação de multas por descumprimento",
      "A empresa deve garantir acessibilidade e adaptações no ambiente de trabalho",
    ],
    link: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
  },
  {
    numero: "Lei 13.146/2015",
    nome: "Lei Brasileira de Inclusão (Estatuto da Pessoa com Deficiência)",
    data: "6 de julho de 2015",
    descricao:
      "Instituiu o Estatuto da Pessoa com Deficiência, destinado a assegurar e promover, em condições de igualdade, o exercício dos direitos e das liberdades fundamentais por pessoa com deficiência, visando à sua inclusão social e cidadania. Aplica-se integralmente a pessoas autistas.",
    pontos: [
      "Define o conceito de pessoa com deficiência com base no modelo social (barreiras x funcionalidade)",
      "Garante direito ao trabalho em ambiente acessível e inclusivo",
      "Estabelece o direito a adaptações razoáveis no ambiente de trabalho",
      "Proíbe qualquer forma de discriminação em razão da deficiência",
      "Garante acessibilidade em serviços públicos e privados",
      "Assegura direito à habilitação e reabilitação profissional",
      "Prevê tecnologia assistiva e apoios necessários",
      "Estabelece penalidades para discriminação no trabalho (reclusão de 2 a 5 anos e multa)",
      "Garante prioridade em processos judiciais e administrativos",
    ],
    link: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
  },
  {
    numero: "Lei 13.977/2020",
    nome: "Lei Romeo Mion",
    data: "8 de janeiro de 2020",
    descricao:
      "Alterou a Lei Berenice Piana para criar a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA). O nome homenageia Romeo, filho do apresentador Marcos Mion, diagnosticado com autismo.",
    pontos: [
      "Cria a CIPTEA — Carteira de Identificação da Pessoa com TEA",
      "A carteira é expedida gratuitamente pelos órgãos responsáveis dos estados e municípios",
      "Garante atenção integral, prioridade e acesso a serviços públicos e privados",
      "Válida em todo o território nacional por 5 anos",
      "Contém dados do portador, responsável legal, equipe médica e foto",
      "Facilita o exercício de direitos sem a necessidade de portar laudos médicos",
      "O veto presidencial ao símbolo do quebra-cabeça foi derrubado pelo Congresso",
    ],
    link: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm",
  },
];

export default function LegislacaoPage() {
  return (
    <>
      {/* Header da página */}
      <section className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Informação", href: "/informacao" },
              { label: "Legislação" },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              <BookOpen size={28} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Legislação
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            As principais leis brasileiras que garantem e protegem os direitos das pessoas
            com Transtorno do Espectro Autista.
          </p>
        </div>
      </section>

      {/* Lista de Leis */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {leis.map((lei, i) => (
              <div
                key={i}
                className="bg-[var(--cor-fundo)] rounded-xl border border-[var(--cor-cinza-claro)] overflow-hidden"
              >
                {/* Cabeçalho da lei */}
                <div className="bg-[var(--cor-fundo-secundario)] p-5 sm:p-6 border-b border-[var(--cor-cinza-claro)]">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-[var(--cor-azul-acolhedor)]">
                        {lei.numero}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[var(--cor-texto-principal)] mt-1">
                        {lei.nome}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--cor-cinza-texto)] shrink-0">
                      <Calendar size={14} />
                      <span>{lei.data}</span>
                    </div>
                  </div>
                </div>

                {/* Corpo */}
                <div className="p-5 sm:p-6">
                  <p className="text-[var(--cor-texto-corpo)] leading-relaxed mb-5">
                    {lei.descricao}
                  </p>

                  <div className="bg-[var(--cor-fundo-secundario)] rounded-lg p-4 mb-5">
                    <h3 className="text-sm font-bold text-[var(--cor-texto-principal)] mb-3 uppercase tracking-wide">
                      Principais pontos
                    </h3>
                    <ul className="space-y-2">
                      {lei.pontos.map((ponto, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm text-[var(--cor-texto-corpo)] leading-relaxed"
                        >
                          <span className="text-[var(--cor-dourado)] font-bold mt-0.5 shrink-0">
                            &bull;
                          </span>
                          {ponto}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={lei.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cor-azul-acolhedor)] hover:underline"
                  >
                    <ExternalLink size={14} />
                    Ler texto completo no Planalto.gov.br
                  <span className="sr-only"> (abre em nova aba)</span></a>
                </div>
              </div>
            ))}
          </div>

          {/* Nota sobre outras leis */}
          <div className="bg-[var(--cor-fundo-secundario)] border-l-4 border-l-[var(--cor-dourado)] rounded-r-xl p-5 mt-10">
            <h3 className="font-bold text-[var(--cor-texto-principal)] mb-2">
              Outras normas relevantes
            </h3>
            <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
              Além das leis federais listadas acima, existem diversas leis estaduais e
              municipais que ampliam os direitos das pessoas autistas. Muitos estados possuem
              legislação própria sobre CIPTEA, isenções fiscais e programas de inclusão no
              mercado de trabalho. Consulte a legislação do seu estado e município para
              conhecer todos os seus direitos.
            </p>
          </div>

          {/* Links relacionados */}
          <div className="border-t border-[var(--cor-cinza-claro)] pt-8 mt-12">
            <h2 className="text-xl font-bold text-[var(--cor-texto-principal)] mb-6">
              Continue explorando
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                href="/informacao/mitos-e-verdades"
                className="group flex items-center gap-3 bg-[var(--cor-fundo-secundario)] rounded-xl p-4 border border-[var(--cor-cinza-claro)] hover:border-[var(--cor-dourado)] transition-colors"
              >
                <HelpCircle size={20} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--cor-texto-principal)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors">
                  Mitos e Verdades
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
