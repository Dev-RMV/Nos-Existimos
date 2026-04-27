import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description:
    "Respostas para as dúvidas mais comuns sobre autismo e mercado de trabalho, direitos, diagnóstico, inclusão e adaptações.",
};

const perguntas = [
  {
    pergunta: "Autistas podem trabalhar?",
    resposta:
      "Sim, absolutamente. Pessoas autistas podem exercer qualquer profissão, desde que recebam o suporte adequado. Muitos autistas possuem habilidades valorizadas no mercado, como atenção a detalhes, pensamento lógico, criatividade e capacidade de concentração profunda (hiperfoco). O que frequentemente falta não é capacidade, mas sim ambientes de trabalho adaptados e livres de preconceito.",
  },
  {
    pergunta: "Sou obrigado a revelar meu diagnóstico no trabalho?",
    resposta:
      "Não. A divulgação do diagnóstico de TEA é uma decisão pessoal. A legislação brasileira protege o sigilo médico. No entanto, revelar o diagnóstico pode facilitar o acesso a adaptações razoáveis e a proteção legal. A decisão deve ser tomada considerando o ambiente de trabalho, a cultura da empresa e o nível de conforto pessoal. Ninguém pode ser demitido ou prejudicado por revelar o diagnóstico.",
  },
  {
    pergunta: "O que é a Lei de Cotas?",
    resposta:
      "A Lei de Cotas (Lei 8.213/1991) determina que empresas com 100 ou mais funcionários devem reservar de 2% a 5% das vagas para pessoas com deficiência. Desde 2012, com a Lei Berenice Piana (12.764), autistas são considerados pessoas com deficiência para todos os efeitos legais, incluindo a Lei de Cotas. Isso significa que empresas devem incluir profissionais autistas em seus programas de contratação.",
  },
  {
    pergunta: "O que são adaptações razoáveis no trabalho?",
    resposta:
      "Adaptações razoáveis são ajustes no ambiente ou na rotina de trabalho que permitem a participação plena do profissional autista. Exemplos incluem: redução de estímulos sensoriais (iluminação, ruído), comunicação clara e objetiva, rotinas previsíveis, pausas sensoriais, home office, fones de ouvido com cancelamento de ruído e instruções por escrito. A empresa tem obrigação legal de providenciar adaptações razoáveis.",
  },
  {
    pergunta: "Como funciona o processo seletivo inclusivo?",
    resposta:
      "Um processo seletivo inclusivo evita barreiras desnecessárias para candidatos autistas. Isso inclui: fornecer as perguntas da entrevista com antecedência, evitar dinâmicas de grupo, permitir respostas por escrito, dar tempo extra, usar linguagem direta e avaliar competências técnicas ao invés de habilidades sociais artificiais. Empresas como SAP, Microsoft e Specialisterne já adotam processos adaptados.",
  },
  {
    pergunta: "Autismo é doença?",
    resposta:
      "Não. O Transtorno do Espectro Autista (TEA) é uma condição do neurodesenvolvimento, não uma doença. Autistas possuem um funcionamento neurológico diferente, o que impacta a forma como percebem o mundo, se comunicam e interagem socialmente. O autismo é um espectro, o que significa que cada pessoa autista tem características únicas, com diferentes níveis de suporte necessário.",
  },
  {
    pergunta: "Quais profissões são mais indicadas para autistas?",
    resposta:
      "Não existe uma profissão única ideal. Autistas atuam com sucesso em áreas como tecnologia, ciência, artes, engenharia, contabilidade, biblioteconomia, design e muitas outras. O mais importante é que a profissão esteja alinhada aos interesses e habilidades da pessoa, e que o ambiente de trabalho seja acolhedor. O mito de que autistas só podem trabalhar com tecnologia é prejudicial e limitante.",
  },
  {
    pergunta: "Como uma empresa pode se tornar mais inclusiva?",
    resposta:
      "O caminho para a inclusão envolve: capacitar gestores e equipes sobre neurodiversidade, adaptar processos seletivos, oferecer adaptações razoáveis, designar mentores, criar canais de comunicação claros, respeitar limites sensoriais e valorizar diferentes estilos de trabalho. Consultar profissionais autistas e organizações especializadas é fundamental para que as ações sejam efetivas e não apenas simbólicas.",
  },
  {
    pergunta: "Autistas têm direito a aposentadoria especial?",
    resposta:
      "Pessoas autistas com deficiência reconhecida podem ter direito a aposentadoria por tempo de contribuição reduzido ou ao Benefício de Prestação Continuada (BPC/LOAS), que garante um salário mínimo mensal para pessoas com deficiência em situação de vulnerabilidade econômica. O acesso depende de avaliação médica e social do INSS. A CIPTEA (Carteira de Identificação da Pessoa com TEA) facilita esse processo.",
  },
  {
    pergunta: "Como conseguir a CIPTEA?",
    resposta:
      "A CIPTEA (Carteira de Identificação da Pessoa com Transtorno do Espectro Autista) foi criada pela Lei Romeo Mion (13.977/2020). Para obtê-la, é necessário apresentar laudo médico comprovando o diagnóstico de TEA. O documento é emitido gratuitamente por órgãos municipais ou estaduais de saúde e tem validade de 5 anos, devendo ser renovado com atualização da foto.",
  },
  {
    pergunta: "Meu filho foi diagnosticado com autismo. O que fazer?",
    resposta:
      "O primeiro passo é buscar acompanhamento multidisciplinar (neuropediatra, fonoaudiólogo, terapeuta ocupacional, psicólogo). O SUS oferece atendimento gratuito através dos CER e CAPS. Procure também grupos de apoio de familiares, como a AMA e as APAEs. Informe-se sobre seus direitos e os da criança. Lembre-se: o diagnóstico não muda quem seu filho é — apenas oferece ferramentas para apoiá-lo melhor.",
  },
  {
    pergunta: "Posso ser demitido por ser autista?",
    resposta:
      "A demissão motivada pelo diagnóstico de autismo é discriminatória e ilegal. A Lei 9.029/1995 proíbe práticas discriminatórias na relação de trabalho. Além disso, trabalhadores com deficiência contratados pela Lei de Cotas só podem ser demitidos sem justa causa se a empresa contratar outro profissional com deficiência para a mesma vaga. Em caso de demissão discriminatória, busque orientação jurídica ou denuncie ao Ministério Público do Trabalho.",
  },
  {
    pergunta: "O que é mascaramento (masking)?",
    resposta:
      "Mascaramento é o esforço consciente ou inconsciente que autistas fazem para esconder suas características e se comportar de forma considerada 'normal'. Isso inclui forçar contato visual, imitar expressões faciais e suprimir stims (movimentos repetitivos). Embora possa facilitar a interação social, o mascaramento é extremamente exaustivo e está associado a burnout autista, ansiedade e depressão. Ambientes de trabalho inclusivos reduzem a necessidade de mascaramento.",
  },
  {
    pergunta: "O que é burnout autista?",
    resposta:
      "O burnout autista é um estado de exaustão física, mental e emocional causado pelo esforço crônico de se adaptar a um mundo não projetado para autistas. Diferente do burnout comum, pode incluir perda de habilidades previamente adquiridas, aumento da sensibilidade sensorial e dificuldade de funcionamento básico. É frequentemente causado por mascaramento prolongado, sobrecarga sensorial e falta de adaptações adequadas no trabalho.",
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
              Respostas para as dúvidas mais comuns sobre autismo, mercado de
              trabalho, direitos e inclusão profissional.
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
            Não encontrou sua dúvida?
          </h2>
          <p className="text-[var(--cor-texto-corpo)] mb-8 max-w-xl mx-auto leading-relaxed">
            Explore nosso conteúdo informativo ou visite as páginas dos grupos
            de ajuda para orientação.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/informacao/o-que-e-autismo"
              className="inline-flex items-center gap-2 bg-[var(--cor-azul-base)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
            >
              O que é autismo
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
