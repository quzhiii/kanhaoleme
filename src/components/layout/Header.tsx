import type { PageKey } from '../../types';
import { NAV_ITEMS } from '../../data/copy';

interface HeaderProps {
  page: PageKey;
  onNavigate: (page: PageKey) => void;
}

export function Header({ page, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-pageBg/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        <button className="group flex items-center gap-3 text-left" onClick={() => onNavigate('home')}>
          <span className="grid h-11 w-11 place-items-center rounded-[18px] border border-line bg-surface text-lg font-bold text-sageDark shadow-note transition group-hover:-rotate-3">看</span>
          <span>
            <span className="block font-serif text-lg font-bold text-ink">看好了么</span>
            <span className="block text-xs text-muted">AI 时代的真实健康体验手帐</span>
          </span>
        </button>
        <nav className="flex gap-2 overflow-x-auto pb-1 md:pb-0">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              onClick={() => onNavigate(item.key)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition ${page === item.key ? 'bg-ink text-surface shadow-note' : 'bg-surface/70 text-muted hover:bg-surface hover:text-ink'}`}
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => onNavigate('share')} className="shrink-0 rounded-full bg-sage px-4 py-2 text-sm font-bold text-surface shadow-note transition hover:bg-sageDark">
            分享我的经历
          </button>
        </nav>
      </div>
    </header>
  );
}
