"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown, Sun, Moon, Plus, Minus } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navItems = [
  {
    label: "Informação",
    children: [
      { label: "O que é Autismo", href: "/informacao/o-que-e-autismo" },
      { label: "Mitos e Verdades", href: "/informacao/mitos-e-verdades" },
      { label: "Direitos Trabalhistas", href: "/informacao/direitos-trabalhistas" },
      { label: "Legislação", href: "/informacao/legislacao" },
    ],
  },
  {
    label: "Inclusão",
    children: [
      { label: "Para Empresas", href: "/inclusao/para-empresas" },
      { label: "Para Autistas", href: "/inclusao/para-autistas" },
      { label: "Casos de Sucesso", href: "/inclusao/casos-de-sucesso" },
    ],
  },
  {
    label: "Recursos",
    children: [
      { label: "Grupos de Ajuda", href: "/recursos/grupos-de-ajuda" },
      { label: "Linhas de Apoio", href: "/recursos/linhas-de-apoio" },
      { label: "Perguntas Frequentes", href: "/recursos/perguntas-frequentes" },
    ],
  },
];

function DropdownDesktop({ item }: { item: (typeof navItems)[0] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setOpen(false);
      const btn = containerRef.current?.querySelector("button");
      btn?.focus();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onKeyDown={handleKeyDown}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 rounded-md text-white/90 hover:bg-white/10 transition-colors"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {item.label}
        <ChevronDown size={16} aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-[var(--cor-fundo)] rounded-lg shadow-lg py-2 min-w-56" role="menu">
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                className="block px-4 py-2 text-sm text-[var(--cor-azul-profundo)] hover:bg-[var(--cor-cinza-claro)] transition-colors"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { theme, toggleTheme, fontSize, changeFontSize } = useTheme();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap + Esc for mobile drawer
  useEffect(() => {
    if (!mobileOpen) return;

    // Focus close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      // Focus trap
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <a href="#conteudo-principal" className="pular-conteudo">
        Pular para o conteúdo principal
      </a>
      <header className="sticky top-0 z-50 bg-[var(--cor-azul-base)] shadow-md">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Navegação principal">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl shrink-0">
              <span className="text-[var(--cor-dourado)] text-3xl leading-none" aria-hidden="true">∞</span>
              <span className="font-[Inter]">Nós Existimos</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-3 py-2 rounded-md text-white/90 hover:bg-white/10 transition-colors">
                Início
              </Link>
              {navItems.map((item) => (
                <DropdownDesktop key={item.label} item={item} />
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-1">
              <button
                onClick={() => changeFontSize(-1)}
                className="hidden sm:flex items-center justify-center w-11 h-11 rounded text-white/80 hover:bg-white/10"
                aria-label="Diminuir tamanho da fonte"
              >
                <Minus size={14} aria-hidden="true" />
                <span className="text-xs" aria-hidden="true">A</span>
              </button>
              <button
                onClick={() => changeFontSize(1)}
                className="hidden sm:flex items-center justify-center w-11 h-11 rounded text-white/80 hover:bg-white/10"
                aria-label="Aumentar tamanho da fonte"
              >
                <Plus size={14} aria-hidden="true" />
                <span className="text-xs" aria-hidden="true">A</span>
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center w-11 h-11 rounded-md text-white/80 hover:bg-white/10 transition-colors"
                aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
              >
                {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
              </button>
              <button
                className="lg:hidden flex items-center justify-center w-11 h-11 rounded-md text-white/80 hover:bg-white/10"
                onClick={() => setMobileOpen(true)}
                aria-label="Abrir menu de navegação"
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <div
              ref={drawerRef}
              className="absolute top-0 left-0 w-80 max-w-[85vw] h-full bg-[var(--cor-fundo)] overflow-y-auto shadow-xl"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
            >
              <div className="flex items-center justify-between p-4 border-b border-[var(--cor-cinza-claro)]">
                <span className="font-bold text-[var(--cor-azul-profundo)]">Menu</span>
                <button
                  ref={closeButtonRef}
                  onClick={() => setMobileOpen(false)}
                  className="w-11 h-11 flex items-center justify-center rounded-md hover:bg-[var(--cor-fundo-secundario)]"
                  aria-label="Fechar menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
              <div className="p-4">
                <Link
                  href="/"
                  className="block py-3 text-[var(--cor-azul-profundo)] font-medium border-b border-[var(--cor-cinza-claro)]"
                  onClick={() => setMobileOpen(false)}
                >
                  Início
                </Link>
                {navItems.map((item) => {
                  const isOpen = openAccordion === item.label;
                  return (
                    <div key={item.label} className="border-b border-[var(--cor-cinza-claro)]">
                      <button
                        className="flex items-center justify-between w-full py-3 text-[var(--cor-azul-profundo)] font-medium min-h-12"
                        onClick={() => setOpenAccordion(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                      >
                        {item.label}
                        <ChevronDown size={16} aria-hidden="true" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="pl-4 pb-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block py-2 text-sm text-[var(--cor-cinza-texto)] hover:text-[var(--cor-azul-profundo)] min-h-11"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Mobile font + theme controls */}
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-[var(--cor-cinza-claro)]">
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 text-sm text-[var(--cor-azul-profundo)] min-h-11"
                  >
                    {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
                    {theme === "dark" ? "Modo claro" : "Modo escuro"}
                  </button>
                  <div className="flex items-center gap-1 ml-auto">
                    <button
                      onClick={() => changeFontSize(-1)}
                      className="w-11 h-11 rounded border border-[var(--cor-cinza-claro)] flex items-center justify-center text-sm"
                      aria-label="Diminuir fonte"
                    >
                      A-
                    </button>
                    <button
                      onClick={() => changeFontSize(1)}
                      className="w-11 h-11 rounded border border-[var(--cor-cinza-claro)] flex items-center justify-center text-sm"
                      aria-label="Aumentar fonte"
                    >
                      A+
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
