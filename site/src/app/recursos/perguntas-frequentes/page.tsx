import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Respostas para as duvidas mais comuns sobre autismo e mercado de trabalho, direitos, diagnostico, inclusao e adaptacoes.",
};

const perguntas = [
  {
    pergunta: "Autistas podem trabalhar?",
    resposta:
      "Sim, absolutamente. Pessoas autistas podem exercer qualquer profissao, desde que recebam o suporte adequado. Muitos autistas possuem habilidades valorizadas no mercado, como atencao a detalhes, pensamento logico, criatividade e capacidade de concentracao profunda (hiperfoco). O que frequentemente falta nao e capacidade, mas sim ambientes de trabalho adaptados e livres de preconceito.",
  },
  {
    pergunta: "Sou obrigado a revelar meu diagnostico no trabalho?",
    resposta:
      "Nao. A divulgacao do diagnostico de TEA e uma decisao pessoal. A legislacao brasileira protege o sigilo medico. No entanto, revelar o diagnostico pode facilitar o acesso a adaptacoes razoaveis e a protecao legal. A decisao deve ser tomada considerando o ambiente de trabalho, a cultura da empresa e o nível de conforto pessoal. Ninguem pode ser demitido ou prejudicado por revelar o diagnostico.",
  },
  {
    pergunta: "O que e a Lei de Cotas?",
    resposta:
      "A Lei de Cotas (Lei 8.213/1991) determina que empresas com 100 ou mais funcionarios devem reservar de 2% a 5% das vagas para pessoas com deficiencia. Desde 2012, com a Lei Berenice Piana (12.764), autistas sao considerados pessoas com deficiencia para todos os efeitos legais, incluindo a Lei de Cotas. Isso significa que empresas devem incluir profissionais autistas em seus programas de contratacao.",
  },
  {
    pergunta: "O que sao adaptacoes razoaveis no trabalho?",
    resposta:
      "Adaptacoes razoaveis sao ajustes no ambiente ou na rotina de trabalho que permitem a participacao plena do profissional autista. Exemplos incluem: reducao de estimulos sensoriais (iluminacao, ruido), comunicacao clara e objetiva, rotinas previsiveis, pausas sensoriais, home office, fones de ouvido com cancelamento de ruido e instrucoes por escrito. A empresa tem obrigacao legal de providenciar adaptacoes razoaveis.",
  },
  {
    pergunta: "Como funciona o processo seletivo inclusivo?",
    resposta:
      "Um processo seletivo inclusivo evita barreiras desnecessarias para candidatos autistas. Isso inclui: fornecer as perguntas da entrevista com antecedencia, evitar dinamicas de grupo, permitir respostas por escrito, dar tempo extra, usar linguagem direta e avaliar competencias tecnicas ao inves de habilidades sociais artificiais. Empresas como SAP, Microsoft e Specialisterne ja adotam processos adaptados.",
  },
  {
    pergunta: "Autismo e doenca?",
    resposta:
      "Nao. O Transtorno do Espectro Autista (TEA) e uma condicao do neurodesenvolvimento, nao uma doenca. Autistas possuem um funcionamento neurologico diferente, o que impacta a forma como percebem o mundo, se comunicam e interagem socialmente. O autismo e um espectro, o que significa que cada pessoa autista tem caracteristicas unicas, com diferentes niveis de suporte necessario.",
  },
  {
    pergunta: "Quais profissoes sao mais indicadas para autistas?",
    resposta:
      "Nao existe uma profissao unica ideal. Autistas atuam com sucesso em areas como tecnologia, ciencia, artes, engenharia, contabilidade, biblioteconomia, design e muitas outras. O mais importante e que a profissao esteja alinhada aos interesses e habilidades da pessoa, e que o ambiente de trabalho seja acolhedor. O mito de que autistas so podem trabalhar com tecnologia e prejudicial e limitante.",
  },
  {
    pergunta: "Como uma empresa pode se tornar mais inclusiva?",
    resposta:
      "O caminho para a inclusao envolve: capacitar gestores e equipes sobre neurodiversidade, adaptar processos seletivos, oferecer adaptacoes razoaveis, designar mentores, criar canais de comunicacao claros, respeitar limites sensoriais e valorizar diferentes estilos de trabalho. Consultar profissionais autistas e organizacoes especializadas e fundamental para que as acoes sejam efetivas e nao apenas simbolicas.",
  },
  {
    pergunta: "Autistas tem direito a aposentadoria especial?",
    resposta:
      "Pessoas autistas com deficiencia reconhecida podem ter direito a aposentadoria por tempo de contribuicao reduzido ou ao Beneficio de Prestacao Continuada (BPC/LOAS), que garante um salario minimo mensal para pessoas com deficiencia em situacao de vulnerabilidade economica. O acesso depende de avaliacao medica e social do INSS. A CIPTEA (Carteira de Identificacao da Pessoa com TEA) facilita esse processo.",
  },
  {
    pergunta: "Como conseguir a CIPTEA?",
    resposta:
      "A CIPTEA (Carteira de Identificacao da Pessoa com Transtorno do Espectro Autista) foi criada pela Lei Romeo Mion (13.977/2020). Para obte-la, e necessario apresentar laudo medico comprovando o diagnostico de TEA. O documento e emitido gratuitamente por orgaos municipais ou estaduais de saude e tem validade de 5 anos, devendo ser renovado com atualizacao da foto.",
  },
  {
    pergunta: "Meu filho foi diagnosticado com autismo. O que fazer?",
    resposta:
      "O primeiro passo e buscar acompanhamento multidisciplinar (neuropediatra, fonoaudiologo, terapeuta ocupacional, psicologo). O SUS oferece atendimento gratuito atraves dos CER e CAPS. Procure tambem grupos de apoio de familiares, como a AMA e as APAEs. Informe-se sobre seus direitos e os da crianca. Lembre-se: o diagnostico nao muda quem seu filho e — apenas oferece ferramentas para apoiá-lo melhor.",
  },
  {
    pergunta: "Posso ser demitido por ser autista?",
    resposta:
      "A demissao motivada pelo diagnostico de autismo e discriminatoria e ilegal. A Lei 9.029/1995 proibe praticas discriminatorias na relacao de trabalho. Alem disso, trabalhadores com deficiencia contratados pela Lei de Cotas so podem ser demitidos sem justa causa se a empresa contratar outro profissional com deficiencia para a mesma vaga. Em caso de demissao discriminatoria, busque orientacao juridica ou denuncie ao Ministerio Publico do Trabalho.",
  },
  {
    pergunta: "O que e mascaramento (masking)?",
    resposta:
      "Mascaramento e o esforco consciente ou inconsciente que autistas fazem para esconder suas caracteristicas e se comportar de forma considerada 'normal'. Isso inclui forcar contato visual, imitar expressoes faciais e suprimir stims (movimentos repetitivos). Embora possa facilitar a interacao social, o mascaramento e extremamente exaustivo e esta associado a burnout autista, ansiedade e depressao. Ambientes de trabalho inclusivos reduzem a necessidade de mascaramento.",
  },
  {
    pergunta: "O que e burnout autista?",
    resposta:
      "O burnout autista e um estado de exaustao fisica, mental e emocional causado pelo esforco cronico de se adaptar a um mundo nao projetado para autistas. Diferente do burnout comum, pode incluir perda de habilidades previamente adquiridas, aumento da sensibilidade sensorial e dificuldade de funcionamento basico. E frequentemente causado por mascaramento prolongado, sobrecarga sensorial e falta de adaptacoes adequadas no trabalho.",
  },
];

export default function PerguntasFrequentesPage() {
  return (
    <>
      <section aria-label="Perguntas Frequentes" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Recursos", href: "/recursos" },
              { label: "Perguntas Frequentes" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Perguntas Frequentes
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Respostas para as duvidas mais comuns sobre autismo, mercado de
              trabalho, direitos e inclusao profissional.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Lista de perguntas e respostas" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-6">
            {perguntas.map((item, index) => (
              <article
                key={index}
                className="bg-[var(--cor-fundo)] rounded-xl border border-[var(--cor-cinza-claro)] overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HelpCircle
                        size={18}
                        className="text-[var(--cor-dourado)]"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-[var(--cor-texto-principal)] mb-3">
                        {item.pergunta}
                      </h2>
                      <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                        {item.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Não encontrou sua dúvida?" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Nao encontrou sua duvida?
          </h2>
          <p className="text-[var(--cor-texto-corpo)] mb-8 max-w-xl mx-auto leading-relaxed">
            Explore nosso conteudo informativo ou entre em contato com os grupos
            de ajuda para orientacao personalizada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/informacao/o-que-e-autismo"
              className="inline-flex items-center gap-2 bg-[var(--cor-azul-base)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
            >
              O que e autismo
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/recursos/grupos-de-ajuda"
              className="inline-flex items-center gap-2 border-2 border-[var(--cor-azul-profundo)] text-[var(--cor-azul-profundo)] font-semibold px-6 py-3 rounded-lg hover:bg-[var(--cor-azul-profundo)]/5 transition min-h-12"
            >
              Grupos de ajuda
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
