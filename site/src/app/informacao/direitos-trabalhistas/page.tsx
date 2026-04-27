import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Scale,
  ShieldCheck,
  Briefcase,
  CreditCard,
  Wrench,
  BadgeDollarSign,
  Users,
  ArrowRight,
  Brain,
  BookOpen,
  HelpCircle,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Direitos Trabalhistas de Pessoas Autistas",
  description:
    "Conheça os direitos trabalhistas garantidos por lei para pessoas com Transtorno do Espectro Autista (TEA): Lei Berenice Piana, Lei de Cotas, BPC, adaptações e isenções.",
};

const direitos = [
  {
    icon: ShieldCheck,
    titulo: "Lei Berenice Piana (Lei 12.764/2012)",
    fonteUrl: "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm",
    descricao:
      "Marco legal fundamental para os direitos das pessoas autistas no Brasil. Esta lei instituiu a Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista e equiparou, para todos os efeitos legais, a pessoa com TEA à pessoa com deficiência.",
    pontos: [
      "A pessoa autista é considerada pessoa com deficiência para todos os efeitos legais",
      "Direito ao diagnóstico precoce, ainda que não definitivo",
      "Direito ao acesso a educação e ensino profissionalizante",
      "Direito à moradia, ao mercado de trabalho e à previdência social",
      "Direito a atendimento multiprofissional pelo SUS",
      "Punição de 3 a 20 salários mínimos para gestores escolares que recusarem matrícula",
    ],
  },
  {
    icon: Users,
    titulo: "Lei de Cotas (Lei 8.213/1991)",
    fonteUrl: "https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm",
    descricao:
      "Como a Lei Berenice Piana equipara autistas a pessoas com deficiência, a Lei de Cotas se aplica integralmente. Empresas com 100 ou mais funcionários são obrigadas a preencher uma porcentagem de seus cargos com pessoas com deficiência.",
    pontos: [
      "100 a 200 funcionários: 2% das vagas reservadas",
      "201 a 500 funcionários: 3% das vagas reservadas",
      "501 a 1.000 funcionários: 4% das vagas reservadas",
      "Acima de 1.001 funcionários: 5% das vagas reservadas",
      "A empresa não pode exigir experiência prévia para a vaga de cota",
      "O descumprimento gera multa aplicada pelo Ministério do Trabalho",
    ],
  },
  {
    icon: CreditCard,
    titulo: "Lei Romeo Mion (Lei 13.977/2020)",
    fonteUrl: "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm",
    descricao:
      "Criou a Carteira de Identificação da Pessoa com Transtorno do Espectro Autista (CIPTEA), que garante atenção integral, prioridade de atendimento e acesso a serviços públicos e privados.",
    pontos: [
      "CIPTEA é expedida gratuitamente pelos órgãos responsáveis de cada estado",
      "Garante prioridade de atendimento em serviços públicos e privados",
      "Válida em todo o território nacional",
      "Contém informações sobre o portador, responsável e profissional de saúde",
      "Facilita a comprovação da condição sem necessidade de laudos a cada solicitação",
      "Validade de 5 anos, com atualização gratuita",
    ],
  },
  {
    icon: BadgeDollarSign,
    titulo: "Benefício de Prestação Continuada (BPC/LOAS)",
    fonteUrl: "https://www.planalto.gov.br/ccivil_03/leis/l8742.htm",
    descricao:
      "O BPC é um benefício assistencial no valor de um salário mínimo destinado a pessoas com deficiência (incluindo autistas) que comprovem não possuir meios de prover a própria manutenção.",
    pontos: [
      "Valor de 1 salário mínimo mensal",
      "Não exige contribuição prévia ao INSS",
      "Renda familiar per capita deve ser inferior a 1/4 do salário mínimo",
      "É necessário passar por avaliação social e médica do INSS",
      "Pode ser acumulado com remuneração de aprendiz por até 2 anos",
      "Não gera direito a 13º salário nem pensão por morte",
    ],
  },
  {
    icon: Wrench,
    titulo: "Adaptações Razoáveis no Trabalho",
    fonteUrl: "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm",
    descricao:
      "A Lei Brasileira de Inclusão (Lei 13.146/2015) garante que a pessoa com deficiência tem direito a adaptações razoáveis no ambiente de trabalho. A empresa deve promover ajustes que permitam a plena participação do trabalhador autista.",
    pontos: [
      "Adequação do ambiente sensorial (iluminação, ruído, temperatura)",
      "Flexibilização de horários conforme necessidade",
      "Comunicação clara e por escrito quando necessário",
      "Disponibilização de espaço para pausas sensoriais",
      "Processos seletivos adaptados e acessíveis",
      "Treinamento da equipe sobre neurodiversidade",
      "Designação de mentor ou pessoa de referência na empresa",
    ],
  },
  {
    icon: Scale,
    titulo: "Isenções e Benefícios Fiscais",
    descricao:
      "Pessoas autistas e seus responsáveis têm direito a isenções e benefícios fiscais previstos em lei, assim como outras pessoas com deficiência.",
    pontos: [
      "Isenção de IPI na compra de veículos novos",
      "Isenção de ICMS (varia por estado) na compra de veículos",
      "Isenção de IPVA (varia por estado)",
      "Isenção de IOF em operações de crédito para compra de veículos",
      "Possibilidade de dedução de despesas médicas e terapêuticas no Imposto de Renda",
      "Prioridade na restituição do Imposto de Renda",
    ],
  },
];

export default function DireitosTrabalhistas() {
  return (
    <>
      {/* Header da página */}
      <section aria-label="Direitos Trabalhistas" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Informação", href: "/informacao" },
              { label: "Direitos Trabalhistas" },
            ]}
          />
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center">
              <Briefcase size={28} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Direitos Trabalhistas
            </h1>
          </div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            Conheça os direitos garantidos por lei para pessoas com Transtorno do Espectro
            Autista no mercado de trabalho e na vida civil.
          </p>
        </div>
      </section>

      {/* Alerta informativo */}
      <section aria-label="Alerta informativo sobre direitos" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[var(--cor-fundo-secundario)] border-l-4 border-l-[var(--cor-dourado)] rounded-r-xl p-5">
            <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
              <strong className="text-[var(--cor-texto-principal)]">Importante:</strong>{" "}
              Desde a Lei Berenice Piana (2012), a pessoa com TEA é considerada pessoa com
              deficiência para todos os efeitos legais. Isso significa que{" "}
              <strong className="text-[var(--cor-texto-principal)]">
                todos os direitos assegurados a pessoas com deficiência se aplicam automaticamente
                a pessoas autistas
              </strong>, incluindo os previstos na Lei Brasileira de Inclusão (Estatuto da Pessoa
              com Deficiência).
            </p>
          </div>
        </div>
      </section>

      {/* Seções de Direitos */}
      <section aria-label="Seções de direitos trabalhistas" className="pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-8">
            {direitos.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[var(--cor-fundo)] rounded-xl border border-[var(--cor-cinza-claro)] overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center shrink-0">
                        <Icon size={24} className="text-[var(--cor-dourado)]" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-[var(--cor-texto-principal)]">
                          {item.titulo}
                        </h2>
                      </div>
                    </div>

                    <p className="text-[var(--cor-texto-corpo)] leading-relaxed mb-3">
                      {item.descricao}
                    </p>
                    {item.fonteUrl && (
                      <p className="mb-5">
                        <a
                          href={item.fonteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--cor-azul-acolhedor)] hover:underline inline-flex items-center gap-1"
                        >
                          <ExternalLink size={12} />
                          Ler texto oficial da lei
                        <span className="sr-only"> (abre em nova aba)</span></a>
                      </p>
                    )}
                    {!item.fonteUrl && <div className="mb-5" />}

                    <div className="bg-[var(--cor-fundo-secundario)] rounded-lg p-4">
                      <h3 className="text-sm font-bold text-[var(--cor-texto-principal)] mb-3 uppercase tracking-wide">
                        Principais pontos
                      </h3>
                      <ul className="space-y-2">
                        {item.pontos.map((ponto, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-[var(--cor-texto-corpo)] leading-relaxed"
                          >
                            <span className="text-[var(--cor-dourado-texto)] font-bold mt-0.5 shrink-0">
                              &bull;
                            </span>
                            {ponto}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Legislação */}
          <div className="bg-[var(--cor-azul-base)] text-white rounded-xl p-6 sm:p-8 mt-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-2">
                  Quer ler o texto completo das leis?
                </h2>
                <p className="text-sm text-white/80 leading-relaxed">
                  Acesse nossa página de legislação com links diretos para o texto oficial
                  de cada lei no portal do Planalto.
                </p>
              </div>
              <Link
                href="/informacao/legislacao"
                className="inline-flex items-center gap-2 bg-[var(--cor-dourado)] text-[var(--cor-azul-base)] font-bold px-6 py-3 rounded-lg hover:brightness-110 transition shrink-0 min-h-12"
              >
                Ver legislação
                <ExternalLink size={16} />
              </Link>
            </div>
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
                href="/informacao/mitos-e-verdades"
                className="group flex items-center gap-3 bg-[var(--cor-fundo-secundario)] rounded-xl p-4 border border-[var(--cor-cinza-claro)] hover:border-[var(--cor-dourado)] transition-colors"
              >
                <HelpCircle size={20} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
                <span className="text-sm font-semibold text-[var(--cor-texto-principal)] group-hover:text-[var(--cor-azul-acolhedor)] transition-colors">
                  Mitos e Verdades
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
