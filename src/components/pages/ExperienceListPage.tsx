import type { Experience } from '../../types';
import { mockExperiences } from '../../data/mockExperiences';
import { ExperienceCard } from '../experience/ExperienceCard';

interface ExperienceListPageProps {
  onSelect: (experience: Experience) => void;
}

export function ExperienceListPage({ onSelect }: ExperienceListPageProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <div className="mb-8 rounded-[36px] border border-line bg-surface/75 p-6 shadow-note backdrop-blur md:p-8">
        <p className="section-eyebrow text-xs font-bold text-sageDark">COMMUNITY LIBRARY</p>
        <h2 className="mt-2 font-serif text-4xl font-bold tracking-[-0.03em] text-ink">像翻手帐一样看经验卡</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">每张卡都把“用户自述、AI整理、费用线索、官方资料”分开标识，只记录经历，不给诊疗结论。</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {mockExperiences.map((experience) => <ExperienceCard key={experience.id} experience={experience} onSelect={onSelect} />)}
      </div>
    </div>
  );
}
