import { Sparkles } from 'lucide-react';

interface XiaoKanAvatarProps {
  size?: number;
}

export function XiaoKanAvatar({ size = 180 }: XiaoKanAvatarProps) {
  return (
    <div
      className="relative grid place-items-center rounded-full border border-line bg-surface shadow-journal"
      style={{ width: size, height: size }}
      aria-label="小看角色"
    >
      <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-hidden="true">
        <circle cx="100" cy="100" r="94" fill="#F8F0E6" />
        <circle cx="100" cy="100" r="88" fill="#FFFDF8" stroke="#E8DCCB" strokeDasharray="5 5" />
        <path d="M55 92c-3-26 14-54 44-58 31-5 57 11 64 36 4 16 1 27-4 35 7 9 10 24 7 39-6 29-28 41-52 41-32 0-52-15-58-43-3-14-2-35-1-50Z" fill="#2B2926" />
        <path d="M58 94c4-24 22-38 42-40 19-2 35 3 48 13 9 8 14 18 14 31-2 19-6 27-12 35-7 9-18 16-36 17-22 1-39-6-50-18-9-9-11-22-6-38Z" fill="#FADBC8" />
        <ellipse cx="78" cy="104" rx="6" ry="4" fill="#2B2926" />
        <ellipse cx="122" cy="104" rx="6" ry="4" fill="#2B2926" />
        <path d="M75 84c8-6 14-6 22-1" stroke="#756E64" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M103 83c8-5 15-5 22 0" stroke="#756E64" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M85 126c10 10 21 10 30 0" stroke="#2B2926" strokeWidth="4" strokeLinecap="round" fill="none" />
        <circle cx="67" cy="118" r="8" fill="#FF8A6A" fillOpacity="0.3" />
        <circle cx="133" cy="118" r="8" fill="#FF8A6A" fillOpacity="0.3" />
      </svg>
      <div className="absolute -right-3 -top-3 rounded-full border border-line bg-yellowSoft px-3 py-1 text-xs font-bold text-ink shadow-note">
        <Sparkles className="mr-1 inline h-3.5 w-3.5 text-coral" />
        小看
      </div>
    </div>
  );
}
