import { ArrowLeft, CalendarDays, MapPin, NotebookPen, ShieldAlert, Sparkles } from 'lucide-react';
import type { Experience } from '../../types';
import { SafetyNotice } from '../layout/SafetyNotice';
import { TrustBadge } from '../trust/TrustBadge';

interface ExperienceDetailPageProps {
  experience: Experience;
  onBack: () => void;
}

export function ExperienceDetailPage({ experience, onBack }: ExperienceDetailPageProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      <button onClick={onBack} className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-muted shadow-sm"><ArrowLeft className="h-4 w-4" />返回列表</button>
      <article className="paper-card overflow-hidden p-0">
        <div className="bg-gradient-to-br from-sageSoft via-surface to-yellowSoft p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
          <span className="rounded-full bg-paper px-3 py-1 font-semibold text-ink">{experience.topicLabel}</span>
          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{experience.city}</span>
          <span className="flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{experience.stage}</span>
        </div>
        <h1 className="mt-4 font-serif text-3xl font-bold text-ink md:text-4xl">{experience.title}</h1>
        <p className="mt-3 text-sm text-muted">{experience.anonymousAuthor} · {experience.serviceType}</p>
        <div className="mt-4 flex flex-wrap gap-2">{experience.trustStatus.map((status) => <TrustBadge key={status} status={status} />)}</div>
        </div>
        <div className="grid gap-4 p-6 lg:grid-cols-[1.1fr_0.9fr] md:p-8">
          <div className="space-y-4">
            <SafetyNotice>{'费用来自用户自述或有限核验的历史经历，不等于你的个人费用，不构成报价或报销承诺。'}</SafetyNotice>
            <section className="rounded-3xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><Sparkles className="h-4 w-4" />AI整理摘要</div>
              <p className="mt-3 text-sm leading-7 text-muted">{experience.aiSummary}</p>
            </section>
            <section className="rounded-3xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><NotebookPen className="h-4 w-4" />真实流程时间线</div>
              <div className="mt-4 space-y-3">
                {experience.timeline.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-paper p-4">
                    <div className="text-xs font-semibold text-sageDark">{item.label}</div>
                    <div className="mt-1 text-sm leading-7 text-ink">{item.text}</div>
                  </div>
                ))}
              </div>
            </section>
            <section className="rounded-3xl border border-line bg-surface p-5">
              <div className="text-sm font-semibold text-sageDark">可以进一步确认的问题</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                {experience.questions.map((question) => <li key={question}>• {question}</li>)}
              </ul>
            </section>
          </div>
          <div className="space-y-4">
            <section className="rounded-3xl border border-line bg-softBg p-5">
              <div className="text-sm font-semibold text-sageDark">费用线索</div>
              <div className="mt-2 text-xl font-bold text-ink">{experience.costText}</div>
              <div className="mt-3 space-y-2 text-sm leading-6 text-muted">{experience.costNotes.map((note) => <p key={note}>{note}</p>)}</div>
            </section>
            <section className="rounded-3xl border border-line bg-surface p-5">
              <div className="text-sm font-semibold text-sageDark">体验标签</div>
              <div className="mt-3 flex flex-wrap gap-2">{experience.tags.map((tag) => <span key={tag} className="rounded-full bg-paper px-3 py-1 text-xs text-muted">#{tag}</span>)}</div>
            </section>
            <section className="rounded-3xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><ShieldAlert className="h-4 w-4" />来源说明</div>
              <p className="mt-3 text-sm leading-7 text-muted">{experience.sourceNote}</p>
            </section>
            <section className="rounded-3xl border border-line bg-surface p-5">
              <div className="text-sm font-semibold text-sageDark">相似经历</div>
              <p className="mt-3 text-sm leading-7 text-muted">建议从同主题、同城市和相近阶段的经验里继续看。当前 Demo 以列表推荐为主。</p>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
}
