import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-1 text-sm text-white/80">
        <li>
          <Link href="/" className="hover:text-white transition-colors underline decoration-white/40 hover:decoration-white">
            Início
          </Link>
        </li>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              <ChevronRight size={14} aria-hidden="true" className="text-white/80" />
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-white transition-colors underline decoration-white/40 hover:decoration-white">
                  {item.label}
                </Link>
              ) : isLast ? (
                <span aria-current="page" className="text-white font-medium">
                  {item.label}
                </span>
              ) : (
                <span className="text-white/80">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
