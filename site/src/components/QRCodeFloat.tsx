"use client";

import Image from "next/image";
import { useState } from "react";
import { X, Heart } from "lucide-react";

export default function QRCodeFloat() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      className="fixed bottom-6 right-6 z-40 bg-[var(--cor-fundo)] rounded-xl shadow-lg border border-[var(--cor-cinza-claro)] p-3 flex items-center gap-3 max-w-xs transition-opacity hover:shadow-xl"
      role="complementary"
      aria-label="Ajude a manter o site"
    >
      <div className="bg-[var(--cor-fundo-secundario)] rounded-lg p-1.5 shrink-0">
        <Image
          src="/qrcode.jpg"
          alt="QR Code para doação"
          width={72}
          height={72}
          className="rounded"
        />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[var(--cor-azul-profundo)] flex items-center gap-1">
          <Heart size={14} className="text-[var(--cor-dourado)] shrink-0" aria-hidden="true" />
          Ajude a manter o site!
        </p>
        <p className="text-xs text-[var(--cor-cinza-texto)] mt-0.5">
          Escaneie o QR Code para contribuir
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-3 -right-3 w-11 h-11 bg-[var(--cor-fundo)] rounded-full border border-[var(--cor-cinza-claro)] flex items-center justify-center shadow-sm hover:bg-[var(--cor-fundo-secundario)]"
        aria-label="Fechar aviso de doação"
      >
        <X size={14} aria-hidden="true" />
      </button>
    </aside>
  );
}
