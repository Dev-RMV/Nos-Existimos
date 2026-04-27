import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Smartphone, Shield, Heart, ExternalLink } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Linhas de Apoio",
  description:
    "Linhas de emergência, canais online e aplicativos de apoio para pessoas autistas, familiares e qualquer pessoa que precise de ajuda.",
};

const emergencias = [
  {
    nome: "CVV — Centro de Valorização da Vida",
    numero: "188",
    descricao:
      "Apoio emocional e prevenção do suicídio. Atendimento 24 horas por telefone, chat e e-mail. Sigilo garantido. Voluntários treinados para ouvir sem julgamento.",
    site: "https://www.cvv.org.br",
    destaque: true,
    icon: Heart,
  },
  {
    nome: "SAMU — Serviço de Atendimento Móvel de Urgência",
    numero: "192",
    descricao:
      "Atendimento pré-hospitalar em situações de urgência e emergência. Equipe médica disponível 24 horas em todo o Brasil.",
    site: null,
    destaque: false,
    icon: Phone,
  },
  {
    nome: "Disque 100 — Disque Direitos Humanos",
    numero: "100",
    descricao:
      "Canal para denúncias de violações de direitos humanos, incluindo discriminação contra pessoas com deficiência. Funciona 24 horas, inclusive feriados.",
    site: "https://www.gov.br/mdh",
    destaque: false,
    icon: Shield,
  },
  {
    nome: "Polícia Militar",
    numero: "190",
    descricao:
      "Para situações de risco imediato, violência ou ameaça. Disponível 24 horas em todo o território nacional.",
    site: null,
    destaque: false,
    icon: Phone,
  },
  {
    nome: "Bombeiros",
    numero: "193",
    descricao:
      "Atendimento em emergências que envolvam risco de vida, resgate e primeiros socorros. Disponível 24 horas.",
    site: null,
    destaque: false,
    icon: Phone,
  },
];

const canaisOnline = [
  {
    nome: "CVV Chat Online",
    descricao:
      "Converse por chat com um voluntário do CVV diretamente pelo site. Ideal para quem prefere escrever ao invés de falar por telefone.",
    link: "https://www.cvv.org.br/chat",
    tipo: "Chat em tempo real",
  },
  {
    nome: "CVV por E-mail",
    descricao:
      "Envie um e-mail para o CVV e receba uma resposta acolhedora. Indicado para quem precisa organizar seus pensamentos antes de pedir ajuda.",
    link: "https://www.cvv.org.br/e-mail",
    tipo: "E-mail",
  },
  {
    nome: "Mapa da Saúde Mental",
    descricao:
      "Plataforma que permite encontrar CAPS, CER e outros serviços de saúde mental próximos da sua localização.",
    link: "https://www.gov.br/saude",
    tipo: "Mapa interativo",
  },
  {
    nome: "Canal de Ouvidoria do SUS",
    descricao:
      "Para registrar reclamações, sugestões ou elogios sobre os serviços de saúde pública, incluindo atendimento a pessoas com TEA.",
    link: "https://www.gov.br/saude",
    tipo: "Ouvidoria",
  },
];

const apps = [
  {
    nome: "CVV App",
    descricao:
      "Aplicativo oficial do Centro de Valorização da Vida com acesso rápido ao chat, dicas de autocuidado e conteúdo de prevenção.",
    plataforma: "Android e iOS",
  },
  {
    nome: "Calmaria",
    descricao:
      "App brasileiro de meditação e relaxamento com exercícios de respiração. Útil para momentos de sobrecarga sensorial.",
    plataforma: "Android e iOS",
  },
  {
    nome: "Querida Ansiedade",
    descricao:
      "Aplicativo com técnicas de manejo da ansiedade, diário emocional e exercícios práticos para o dia a dia.",
    plataforma: "Android e iOS",
  },
  {
    nome: "TODXS",
    descricao:
      "App para denúncias de discriminação e violência contra minorias. Permite registrar ocorrências e encontrar apoio jurídico.",
    plataforma: "Android e iOS",
  },
];

export default function LinhasDeApoioPage() {
  return (
    <>
      <section aria-label="Linhas de Apoio" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Recursos", href: "/recursos" },
              { label: "Linhas de Apoio" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Linhas de Apoio
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Se voce ou alguem proximo precisa de ajuda, saiba que existem
              canais de apoio gratuitos e confidenciais disponíveis 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Destaque CVV */}
      <section aria-label="Precisa conversar?" className="py-12 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[var(--cor-fundo)] rounded-2xl p-8 sm:p-10 border-2 border-[var(--cor-dourado)] shadow-lg text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--cor-dourado)]/10 flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Precisa conversar?
            </h2>
            <p className="text-[var(--cor-texto-corpo)] mb-6 max-w-lg mx-auto leading-relaxed">
              O CVV (Centro de Valorização da Vida) oferece apoio emocional
              gratuito, 24 horas por dia, 7 dias por semana. Ligue, escreva ou
              converse por chat.
            </p>
            <a
              href="tel:188"
              className="inline-flex items-center gap-3 bg-[var(--cor-dourado)] text-[var(--cor-azul-base)] font-bold text-2xl px-8 py-4 rounded-xl hover:brightness-110 transition"
            >
              <Phone size={28} />
              Ligue 188
            <span className="sr-only"> (abre em nova aba)</span></a>
            <div className="flex justify-center gap-6 mt-6 text-sm">
              <a
                href="https://www.cvv.org.br/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--cor-azul-acolhedor)] hover:underline font-medium"
              >
                <MessageCircle size={14} />
                Chat online
              <span className="sr-only"> (abre em nova aba)</span></a>
              <a
                href="https://www.cvv.org.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--cor-azul-acolhedor)] hover:underline font-medium"
              >
                <ExternalLink size={14} />
                cvv.org.br
              <span className="sr-only"> (abre em nova aba)</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de Emergência */}
      <section aria-label="Linhas de Emergência" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
              <Phone size={22} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Linhas de Emergência
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencias.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.numero}
                  className={`bg-[var(--cor-fundo)] rounded-xl p-6 border transition-shadow hover:shadow-md ${
                    item.destaque
                      ? "border-[var(--cor-dourado)] border-2"
                      : "border-[var(--cor-cinza-claro)]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon
                      size={24}
                      className={
                        item.destaque
                          ? "text-[var(--cor-dourado)]"
                          : "text-[var(--cor-azul-acolhedor)]"
                      }
                    />
                    <a
                      href={`tel:${item.numero}`}
                      className="text-2xl font-bold text-[var(--cor-dourado-texto)]"
                    >
                      {item.numero}
                    <span className="sr-only"> (abre em nova aba)</span></a>
                  </div>
                  <h3 className="text-lg font-bold text-[var(--cor-texto-principal)] mb-2">
                    {item.nome}
                  </h3>
                  <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-3">
                    {item.descricao}
                  </p>
                  {item.site && (
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-[var(--cor-azul-acolhedor)] hover:underline font-medium"
                    >
                      <ExternalLink size={12} />
                      Visitar site
                    <span className="sr-only"> (abre em nova aba)</span></a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Canais Online */}
      <section aria-label="Canais Online" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
              <MessageCircle size={22} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">Canais Online</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {canaisOnline.map((canal) => (
              <div
                key={canal.nome}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold text-[var(--cor-texto-principal)]">
                    {canal.nome}
                  </h3>
                  <span className="text-sm font-medium bg-[var(--cor-azul-acolhedor)]/10 text-[var(--cor-azul-acolhedor)] px-2.5 py-1 rounded-full whitespace-nowrap">
                    {canal.tipo}
                  </span>
                </div>
                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-4">
                  {canal.descricao}
                </p>
                <a
                  href={canal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-[var(--cor-azul-acolhedor)] hover:underline font-medium"
                >
                  <ExternalLink size={12} />
                  Acessar
                <span className="sr-only"> (abre em nova aba)</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps de Apoio */}
      <section aria-label="Aplicativos de Apoio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
              <Smartphone size={22} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Aplicativos de Apoio
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app) => (
              <div
                key={app.nome}
                className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow"
              >
                <Smartphone
                  size={20}
                  className="text-[var(--cor-azul-acolhedor)] mb-3"
                />
                <h3 className="text-base font-bold text-[var(--cor-texto-principal)] mb-2">
                  {app.nome}
                </h3>
                <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-3">
                  {app.descricao}
                </p>
                <span className="text-sm text-[var(--cor-cinza-texto)]">
                  {app.plataforma}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nota */}
      <section aria-label="Nota importante sobre emergências" className="py-12 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] max-w-3xl mx-auto text-center">
            <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed">
              <strong className="text-[var(--cor-texto-principal)]">
                Importante:
              </strong>{" "}
              Se voce esta em situacao de risco imediato, ligue para o{" "}
              <strong>SAMU (192)</strong> ou dirija-se ao pronto-socorro mais
              proximo. As linhas de apoio emocional nao substituem atendimento
              medico de emergencia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
