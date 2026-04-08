import type { Metadata } from "next";
import Link from "next/link";
import {
  Accessibility,
  Monitor,
  Type,
  Keyboard,
  Eye,
  Moon,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Acessibilidade",
  description:
    "Declaracao de acessibilidade do site Nos Existimos. Nosso compromisso com as diretrizes WCAG 2.1 AA e os recursos disponiveis.",
};

const recursos = [
  {
    icon: Moon,
    titulo: "Modo escuro",
    descricao:
      "Alternancia entre tema claro e escuro para reduzir a fadiga visual e adaptar-se a diferentes preferencias sensoriais.",
  },
  {
    icon: Type,
    titulo: "Ajuste de fonte",
    descricao:
      "Possibilidade de aumentar ou reduzir o tamanho do texto para melhor legibilidade, respeitando as configuracoes do navegador.",
  },
  {
    icon: Keyboard,
    titulo: "Navegacao por teclado",
    descricao:
      "Todas as funcionalidades do site sao acessiveis via teclado, com indicadores visiveis de foco e ordem logica de tabulacao.",
  },
  {
    icon: Eye,
    titulo: "Leitor de tela",
    descricao:
      "Estrutura semantica com landmarks ARIA, textos alternativos em imagens e hierarquia de titulos para compatibilidade com leitores de tela.",
  },
  {
    icon: Monitor,
    titulo: "Design responsivo",
    descricao:
      "Layout adaptavel a diferentes tamanhos de tela, de smartphones a desktops, garantindo boa experiencia em qualquer dispositivo.",
  },
  {
    icon: Accessibility,
    titulo: "Contraste adequado",
    descricao:
      "Cores cuidadosamente escolhidas para garantir contraste minimo de 4.5:1 entre texto e fundo, conforme WCAG 2.1 AA.",
  },
];

const diretrizes = [
  "Perceptivel: conteudo apresentado de formas que todos possam perceber, com alternativas textuais e contraste adequado.",
  "Operavel: navegacao completa por teclado, tempo suficiente para leitura e ausencia de conteudo que cause convulsoes.",
  "Compreensivel: linguagem clara e direta, comportamento previsivel e ajuda na prevencao de erros.",
  "Robusto: compatibilidade com tecnologias assistivas atuais e futuras, incluindo leitores de tela.",
];

export default function AcessibilidadePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb items={[{ label: "Acessibilidade" }]} />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Acessibilidade
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Nosso compromisso com um site acessivel para todas as pessoas,
              independentemente de suas necessidades ou habilidades.
            </p>
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
                <Accessibility
                  size={24}
                  className="text-[var(--cor-dourado)]"
                />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Nosso compromisso
              </h2>
            </div>
            <div className="space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed">
              <p>
                O <strong className="text-[var(--cor-texto-principal)]">Nos Existimos</strong>{" "}
                tem o compromisso de tornar este site acessivel ao maior numero
                possivel de pessoas, incluindo aquelas com deficiencias visuais,
                auditivas, motoras e cognitivas.
              </p>
              <p>
                Este site busca atender as{" "}
                <strong className="text-[var(--cor-texto-principal)]">
                  Diretrizes de Acessibilidade para Conteudo Web (WCAG) 2.1
                </strong>{" "}
                no nivel{" "}
                <strong className="text-[var(--cor-texto-principal)]">AA</strong>,
                o padrao internacionalmente reconhecido para acessibilidade digital.
              </p>
              <p>
                Como um site dedicado a inclusao de pessoas autistas, entendemos
                que a acessibilidade nao e um diferencial — e uma obrigacao. Muitas
                pessoas autistas possuem sensibilidades sensoriais, preferencias
                especificas de navegacao e necessidades que devem ser respeitadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principios WCAG */}
      <section className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Principios WCAG 2.1
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Seguimos os quatro principios fundamentais da acessibilidade web.
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            {diretrizes.map((diretriz, index) => (
              <div
                key={index}
                className="bg-[var(--cor-fundo)] rounded-xl p-5 border border-[var(--cor-cinza-claro)] flex items-start gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-[var(--cor-dourado)] flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                  <strong className="text-[var(--cor-texto-principal)]">
                    {diretriz.split(":")[0]}:
                  </strong>
                  {diretriz.split(":").slice(1).join(":")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Recursos disponiveis
          </h2>
          <p className="text-center text-[var(--cor-texto-corpo)] mb-12 max-w-2xl mx-auto">
            Funcionalidades implementadas para garantir a melhor experiencia
            possivel para todos os usuarios.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recursos.map((recurso) => {
              const Icon = recurso.icon;
              return (
                <div
                  key={recurso.titulo}
                  className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-[var(--cor-azul-acolhedor)]/10 flex items-center justify-center mb-4">
                    <Icon
                      size={20}
                      className="text-[var(--cor-azul-acolhedor)]"
                    />
                  </div>
                  <h3 className="text-base font-bold mb-2">
                    {recurso.titulo}
                  </h3>
                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
                    {recurso.descricao}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como reportar */}
      <section className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[var(--cor-fundo)] rounded-2xl p-8 sm:p-10 border border-[var(--cor-cinza-claro)] border-t-4 border-t-[var(--cor-dourado)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
                  <MessageSquare
                    size={20}
                    className="text-[var(--cor-dourado)]"
                  />
                </div>
                <h2 className="text-xl font-bold">Encontrou um problema?</h2>
              </div>
              <div className="space-y-4 text-[var(--cor-texto-corpo)] leading-relaxed text-sm">
                <p>
                  Apesar dos nossos esforcos, e possivel que algumas partes do site
                  ainda apresentem barreiras de acessibilidade. Se voce encontrou
                  alguma dificuldade, queremos saber.
                </p>
                <p>
                  <strong className="text-[var(--cor-texto-principal)]">
                    Ao reportar, por favor inclua:
                  </strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Descricao do problema encontrado</li>
                  <li>Pagina ou secao onde o problema ocorre</li>
                  <li>Navegador e dispositivo utilizado</li>
                  <li>
                    Tecnologia assistiva em uso, se aplicavel (ex: leitor de
                    tela, ampliador)
                  </li>
                </ul>
                <p>
                  Nos comprometemos a analisar e responder todas as solicitacoes
                  de acessibilidade no prazo maximo de{" "}
                  <strong className="text-[var(--cor-texto-principal)]">
                    5 dias uteis
                  </strong>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultima atualizacao */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-[var(--cor-cinza-texto)]">
            Ultima atualizacao desta declaracao: abril de 2026
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--cor-azul-acolhedor)] font-semibold hover:underline text-sm"
            >
              Voltar para a pagina inicial
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
