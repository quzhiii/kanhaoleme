import { ShieldAlert } from 'lucide-react';

interface SafetyNoticeProps {
  children: string;
  tone?: 'soft' | 'warm';
}

export function SafetyNotice({ children, tone = 'soft' }: SafetyNoticeProps) {
  return (
    <div className={`flex gap-3 rounded-3xl border p-4 text-sm leading-6 ${tone === 'warm' ? 'border-[#F5BDAF] bg-coralSoft/70 text-ink' : 'border-line bg-paper/70 text-muted'}`}>
      <ShieldAlert className="mt-1 h-4 w-4 shrink-0 text-coral" />
      <p>{children}</p>
    </div>
  );
}
