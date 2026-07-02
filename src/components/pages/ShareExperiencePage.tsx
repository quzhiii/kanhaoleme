import { useMemo, useState } from 'react';
import { ShieldAlert, Sparkles } from 'lucide-react';
import type { ShareDraft } from '../../types';
import { SAFETY_COPY, TOPICS } from '../../data/copy';
import { SafetyNotice } from '../layout/SafetyNotice';

const initialDraft: ShareDraft = {
  topic: 'weight',
  city: '杭州',
  stage: '就诊前',
  process: '',
  cost: '',
  privateInfo: '',
};

export function ShareExperiencePage() {
  const [draft, setDraft] = useState(initialDraft);

  const preview = useMemo(() => ({
    title: `${TOPICS[draft.topic]}经历预览`,
    summary: draft.process || '这里会显示你填写的过程摘要。',
    cost: draft.cost || '费用信息可选填。',
  }), [draft]);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      <div className="paper-card overflow-hidden p-0">
        <div className="grid gap-4 bg-gradient-to-br from-sageSoft via-surface to-yellowSoft p-6 md:grid-cols-[0.72fr_0.28fr] md:p-8">
          <div>
            <p className="section-eyebrow text-xs font-bold text-sageDark">SHARE SAFELY</p>
            <h2 className="mt-2 font-serif text-4xl font-bold tracking-[-0.03em] text-ink">把你的经历，变成后来者的一盏小灯。</h2>
            <p className="mt-3 text-sm leading-7 text-muted">先填预览，再决定要不要发布。默认不直接发布，必须经过脱敏和确认。</p>
          </div>
          <img className="hidden rounded-[28px] border border-line object-cover shadow-note md:block" src="/assets/xiaokan/xiaokan-expressions.png" alt="小看鼓励分享" />
        </div>
        <div className="p-6 md:p-8">
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 text-sm font-semibold text-ink">
                <span>1. 这次经历属于哪类？</span>
                <select className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm" value={draft.topic} onChange={(e) => setDraft({ ...draft, topic: e.target.value as ShareDraft['topic'] })}>
                  {Object.entries(TOPICS).map(([key, label]) => <option key={key} value={key}>{label}</option>)}
                </select>
              </label>
              <label className="space-y-2 text-sm font-semibold text-ink">
                <span>2. 发生在哪个城市？</span>
                <input className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm" value={draft.city} onChange={(e) => setDraft({ ...draft, city: e.target.value })} />
              </label>
              <label className="space-y-2 text-sm font-semibold text-ink">
                <span>3. 你当时处在哪个阶段？</span>
                <input className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm" value={draft.stage} onChange={(e) => setDraft({ ...draft, stage: e.target.value })} />
              </label>
              <label className="space-y-2 text-sm font-semibold text-ink">
                <span>5. 有没有费用线索？</span>
                <input className="w-full rounded-2xl border border-line bg-surface px-4 py-3 text-sm" value={draft.cost} onChange={(e) => setDraft({ ...draft, cost: e.target.value })} placeholder="例如：约 200-500 元" />
              </label>
            </div>
            <label className="space-y-2 text-sm font-semibold text-ink">
              <span>4. 你愿意讲讲过程吗？</span>
              <textarea className="min-h-40 w-full rounded-3xl border border-line bg-surface px-4 py-3 text-sm leading-7" value={draft.process} onChange={(e) => setDraft({ ...draft, process: e.target.value })} placeholder="写流程、等待、沟通、复诊安排和你愿意分享的体验感受" />
            </label>
            <label className="space-y-2 text-sm font-semibold text-ink">
              <span>6. 哪些信息不想公开？</span>
              <textarea className="min-h-28 w-full rounded-3xl border border-line bg-surface px-4 py-3 text-sm leading-7" value={draft.privateInfo} onChange={(e) => setDraft({ ...draft, privateInfo: e.target.value })} placeholder="例如身份证号、手机号、住院号、完整病历、详细地址等" />
            </label>
            <SafetyNotice>{SAFETY_COPY.sensitive}</SafetyNotice>
          </div>
          <aside className="space-y-4">
            <div className="rounded-3xl border border-line bg-softBg p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><Sparkles className="h-4 w-4" />小看帮你整理预览</div>
              <div className="mt-4 rounded-3xl border border-line bg-surface p-4">
                <div className="text-xs font-semibold text-muted">{preview.title}</div>
                <div className="mt-2 text-lg font-bold text-ink">{draft.city} · {draft.stage}</div>
                <p className="mt-3 text-sm leading-7 text-muted">{preview.summary}</p>
                <div className="mt-3 rounded-2xl bg-paper p-3 text-sm text-muted">{preview.cost}</div>
              </div>
            </div>
            <div className="rounded-3xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><ShieldAlert className="h-4 w-4" />投稿前提醒</div>
              <p className="mt-3 text-sm leading-7 text-muted">{SAFETY_COPY.global}</p>
            </div>
          </aside>
        </div>
        </div>
      </div>
    </div>
  );
}
