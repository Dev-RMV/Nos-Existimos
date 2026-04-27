import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Phone, Users, Building2, Heart, HandHeart } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Grupos de Ajuda",
  description:
    "Encontre grupos de apoio nacionais e internacionais para pessoas autistas, familiares e profissionais que buscam inclusão no mercado de trabalho.",
};

const nacionais = [
  {
    nome: "AMA — Associação de Amigos do Autista",
    descricao:
      "Fundada em 1983, a AMA é uma das mais antigas organizações dedicadas ao autismo no Brasil. Oferece atendimento terapêutico, orientação familiar e capacitação profissional.",
    tipo: "Atendimento terapêutico e orientação",
    site: "https://www.ama.org.br",
    telefone: "(11) 3376-4400",
  },
  {
    nome: "ABRA — Associação Brasileira de Autismo",
    descricao:
      "Rede nacional que articula entidades dedicadas ao autismo em todo o Brasil, promovendo políticas públicas e conscientização social.",
    tipo: "Articulação e políticas públicas",
    site: "https://www.autismo.org.br",
    telefone: "(11) 3266-2828",
  },
  {
    nome: "Autismo e Realidade",
    descricao:
      "Produz e dissemina conteúdo científico sobre o TEA, além de oferecer cursos gratuitos para familiares e profissionais de saúde e educação.",
    tipo: "Educação e informação",
    site: "https://autismoerealidade.org.br",
    telefone: null,
  },
  {
    nome: "APAEs — Associação de Pais e Amigos dos Excepcionais",
    descricao:
      "Presente em mais de 2 mil municípios brasileiros, as APAEs oferecem atendimento multidisciplinar, inclusão escolar e preparação para o trabalho.",
    tipo: "Atendimento multidisciplinar",
    site: "https://apaebrasil.org.br",
    telefone: "(61) 3224-9922",
  },
  {
    nome: "CER/SUS — Centros Especializados em Reabilitação",
    descricao:
      "Centros do Sistema Único de Saúde que oferecem diagnóstico, tratamento e reabilitação gratuitos para pessoas com TEA em todo o território nacional.",
    tipo: "Diagnóstico e reabilitação (público)",
    site: "https://www.gov.br/saude",
    telefone: "136",
  },
  {
    nome: "CAPS — Centros de Atenção Psicossocial",
    descricao:
      "Unidades do SUS voltadas à saúde mental que oferecem acompanhamento psicossocial, acolhimento e suporte a pessoas autistas e suas famílias.",
    tipo: "Saúde mental e acompanhamento",
    site: "https://www.gov.br/saude",
    telefone: "136",
  },
];

const internacionais = [
  {
    nome: "Autism Society of America",
    descricao:
      "Uma das maiores organizações do mundo dedicadas ao autismo. Promove conscientização, advocacia e acesso a serviços nos Estados Unidos e globalmente.",
    tipo: "Advocacia e conscientização",
    site: "https://www.autism-society.org",
    telefone: "+1 (800) 328-8476",
  },
  {
    nome: "National Autistic Society (NAS)",
    descricao:
      "Principal organização de autismo do Reino Unido. Oferece orientação, certificação de empresas inclusivas e programas de empregabilidade.",
    tipo: "Inclusão e empregabilidade",
    site: "https://www.autism.org.uk",
    telefone: "+44 (0)808 800 4104",
  },
  {
    nome: "ASAN — Autistic Self Advocacy Network",
    descricao:
      "Organização liderada por autistas que defende os direitos e a autodeterminação de pessoas no espectro. Lema: 'Nada sobre nós, sem nós'.",
    tipo: "Autoadvocacia e direitos",
    site: "https://autisticadvocacy.org",
    telefone: null,
  },
];

const inclusaoProfissional = [
  {
    nome: "Specialisterne",
    descricao:
      "Empresa social de origem dinamarquesa presente no Brasil que conecta profissionais autistas a vagas no mercado de trabalho, com foco em tecnologia e análise de dados.",
    tipo: "Recrutamento e inclusão",
    site: "https://br.specialisterne.com",
    telefone: null,
  },
  {
    nome: "Programa Autismo no Trabalho (FIESP)",
    descricao:
      "Iniciativa da Federação das Indústrias de São Paulo para capacitação e inserção de autistas na indústria paulista.",
    tipo: "Capacitação profissional",
    site: "https://www.fiesp.com.br",
    telefone: "(11) 3549-4499",
  },
  {
    nome: "Instituto Jô Clemente (APAE de São Paulo)",
    descricao:
      "Programa de emprego apoiado que auxilia na preparação e acompanhamento de pessoas autistas em ambientes corporativos.",
    tipo: "Emprego apoiado",
    site: "https://www.ijc.org.br",
    telefone: "(11) 5080-7000",
  },
];

function GrupoCard({
  grupo,
}: {
  grupo: {
    nome: string;
    descricao: string;
    tipo: string;
    site: string;
    telefone: string | null;
  };
}) {
  return (
    <div className="bg-[var(--cor-fundo)] rounded-xl p-6 border border-[var(--cor-cinza-claro)] hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold text-[var(--cor-texto-principal)] mb-2">
        {grupo.nome}
      </h3>
      <p className="text-sm text-[var(--cor-texto-corpo)] leading-relaxed mb-4">
        {grupo.descricao}
      </p>
      <div className="flex items-center gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-[var(--cor-azul-acolhedor)]/10 text-[var(--cor-azul-profundo)] px-3 py-1 rounded-full">
          <Heart size={12} />
          {grupo.tipo}
        </span>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <a
          href={grupo.site}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--cor-azul-acolhedor)] hover:underline font-medium"
        >
          <Globe size={14} />
          Visitar site
        <span className="sr-only"> (abre em nova aba)</span></a>
        {grupo.telefone && (
          <a
            href={`tel:${grupo.telefone.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-1.5 text-[var(--cor-azul-acolhedor)] hover:underline font-medium"
          >
            <Phone size={14} />
            {grupo.telefone}
          <span className="sr-only"> (abre em nova aba)</span></a>
        )}
      </div>
    </div>
  );
}

export default function GruposDeAjudaPage() {
  return (
    <>
      <section aria-label="Grupos de Ajuda" className="bg-gradient-to-br from-[var(--cor-azul-base)] to-[var(--cor-azul-base-claro)] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumb
            items={[
              { label: "Recursos", href: "/recursos" },
              { label: "Grupos de Ajuda" },
            ]}
          />
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Grupos de Ajuda
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Conheça organizações e grupos que oferecem apoio, orientação e
              acolhimento para pessoas autistas, familiares e profissionais.
            </p>
          </div>
        </div>
      </section>

      {/* Nacionais */}
      <section aria-label="Organizações Nacionais" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
              <Users size={22} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Organizações Nacionais
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nacionais.map((grupo) => (
              <GrupoCard key={grupo.nome} grupo={grupo} />
            ))}
          </div>
        </div>
      </section>

      {/* Internacionais */}
      <section aria-label="Organizações Internacionais" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
              <Globe size={22} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Organizações Internacionais
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internacionais.map((grupo) => (
              <GrupoCard key={grupo.nome} grupo={grupo} />
            ))}
          </div>
        </div>
      </section>

      {/* Inclusão Profissional */}
      <section aria-label="Inclusão Profissional" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--cor-dourado)]/10 flex items-center justify-center">
              <Building2 size={22} className="text-[var(--cor-dourado)]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Inclusão Profissional
            </h2>
          </div>
          <p className="text-[var(--cor-texto-corpo)] mb-8 max-w-2xl leading-relaxed">
            Organizações focadas em conectar profissionais autistas a
            oportunidades de trabalho e auxiliar empresas na construção de
            ambientes inclusivos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inclusaoProfissional.map((grupo) => (
              <GrupoCard key={grupo.nome} grupo={grupo} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Precisa de ajuda agora?" className="py-16 bg-[var(--cor-fundo-secundario)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <HandHeart
            size={40}
            className="text-[var(--cor-dourado)] mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-4">Precisa de ajuda agora?</h2>
          <p className="text-[var(--cor-texto-corpo)] mb-6 max-w-xl mx-auto">
            Se voce ou alguem que voce conhece precisa de apoio imediato,
            conheça nossas linhas de apoio disponíveis 24 horas.
          </p>
          <Link
            href="/recursos/linhas-de-apoio"
            className="inline-flex items-center gap-2 bg-[var(--cor-azul-base)] text-white font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition min-h-12"
          >
            <Phone size={18} />
            Linhas de Apoio
          </Link>
        </div>
      </section>
    </>
  );
}
