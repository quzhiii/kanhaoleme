import { TRUST_BADGE_META } from '../../data/trust';
import type { TrustStatus } from '../../types';

interface TrustBadgeProps {
  status: TrustStatus;
}

export function TrustBadge({ status }: TrustBadgeProps) {
  const meta = TRUST_BADGE_META[status];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${meta.color}`}
      title={meta.description}
      aria-label={`${meta.label}：${meta.description}`}
    >
      <span>{meta.icon}</span>
      <span>{meta.label}</span>
    </span>
  );
}
