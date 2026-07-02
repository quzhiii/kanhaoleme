import { MapPin, MessageCircle, Bookmark, CheckCircle2 } from 'lucide-react';
import type { Experience } from '../../types';
import { TrustBadge } from '../trust/TrustBadge';

interface ExperienceCardProps {
  experience: Experience;
  onSelect: (experience: Experience) => void;
}

const topicArt: Record<Experience['topic'], string> = {
  weight: '健康管理手账',
  dental: '牙科流程便签',
  eye: '眼科检查记录',
  skin: '皮肤咨询卡',
  rehab: '康复路线纸',
  tcm: '中医理疗小记',
};

export function ExperienceCard({ experience, onSelect }: ExperienceCardProps) {
  return (
    <article
      className="note-card group relative flex h-full cursor-pointer flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:shadow-journal"
      onClick={() => onSelect(experience)}
    >
      <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 -translate-y-1/2 rotate-[-2deg] rounded-sm bg-khaki/35 shadow-sm" />
      <div className="flex items-center justify-between bg-gradient-to-br from-sageSoft via-surface to-yellowSoft px-5 py-4">
        <span className="rounded-full border border-line bg-surface/85 px-3 py-1 text-xs font-bold text-sageDark shadow-sm">{topicArt[experience.topic]}</span>
        <span className="rounded-full bg-surface/80 px-2 py-1 text-xs font-bold text-muted">{experience.stage}</span>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-muted">
          <span className="rounded-full bg-paper px-3 py-1 font-semibold text-ink">{experience.topicLabel}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{experience.city}</span>
        </div>
        <div>
          <h3 className="font-serif text-xl font-bold leading-snug tracking-[-0.02em] text-ink transition group-hover:text-sageDark">{experience.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted">{experience.summary}</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {experience.trustStatus.slice(0, 3).map((status) => <TrustBadge key={status} status={status} />)}
        </div>
        <div className="rounded-[22px] border border-line bg-softBg p-3 text-sm">
          <div className="text-xs font-semibold text-muted">费用线索</div>
          <div className="mt-1 font-bold text-ink">{experience.costText}</div>
        </div>
        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-line pt-3">
          {experience.tags.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-paper px-2.5 py-1 text-[11px] text-muted">#{tag}</span>)}
        </div>
        <div className="flex items-center justify-between text-xs text-muted">
          <span>{experience.anonymousAuthor}</span>
          <span className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Bookmark className="h-3.5 w-3.5" />{experience.stats.saves}</span>
            <span className="flex items-center gap-1"><MessageCircle className="h-3.5 w-3.5" />{experience.stats.comments}</span>
            <span className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5" />{experience.stats.metoo}</span>
          </span>
        </div>
      </div>
    </article>
  );
}
