import { Search, Sparkles } from 'lucide-react';
import type { Experience, PageKey } from '../../types';
import { SAFETY_COPY, QUICK_QUERIES } from '../../data/copy';
import { searchExperiences } from '../../data/mockExperiences';
import { SafetyNotice } from '../layout/SafetyNotice';
import { TrustBadge } from '../trust/TrustBadge';

interface XiaoKanGuidePageProps {
  query: string;
  onNavigate: (page: PageKey, query?: string) => void;
  onSelect: (experience: Experience) => void;
}

export function XiaoKanGuidePage({ query, onNavigate, onSelect }: XiaoKanGuidePageProps) {
  const results = searchExperiences(query);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 lg:grid-cols-[0.95fr_1.05fr] md:px-6">
      <section className="paper-card overflow-hidden p-0">
        <div className="bg-gradient-to-br from-sageSoft via-surface to-yellowSoft p-5 md:p-6">
          <img className="mb-5 w-full rounded-[30px] border border-line object-cover shadow-note" src="/assets/xiaokan/xiaokan-system.png" alt="小看整理系统" />
          <div>
            <p className="section-eyebrow text-xs font-bold text-sageDark">XIAOKAN GUIDE</p>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-[-0.03em] text-ink">我是小看，AI 社区向导。</h2>
          </div>
        </div>
        <div className="space-y-4 p-5 md:p-6">
          <SafetyNotice>{SAFETY_COPY.xiaokan}</SafetyNotice>
          <div className="rounded-3xl border border-line bg-surface p-5">
            <div className="text-xs font-semibold text-sageDark">你现在输入的是</div>
            <div className="mt-2 text-lg font-bold text-ink">{query || '还没有关键词，试试下面的快捷词'}</div>
          </div>
          <div className="rounded-3xl border border-line bg-surface p-5">
            <div className="text-sm font-semibold text-sageDark">回复规则</div>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
              <li>• 优先返回真实经历卡。</li>
              <li>• 显示来源状态和费用状态。</li>
              <li>• 给出可以进一步向医生或正规机构确认的问题。</li>
              <li>• 不诊断、不推荐治疗、不推荐药物、不推荐机构、不判断疗效。</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-line bg-paper p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><Search className="h-4 w-4" />试试这些关键词</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK_QUERIES.map((item) => <button key={item} onClick={() => onNavigate('guide', item)} className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-muted">{item}</button>)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => onNavigate('share')} className="rounded-full bg-sage px-5 py-3 font-semibold text-surface">我想分享一次经历</button>
            <button onClick={() => onNavigate('safety')} className="rounded-full border border-line bg-surface px-5 py-3 font-semibold text-ink">先看合规边界</button>
          </div>
        </div>
      </section>
      <aside className="space-y-4">
        <section className="paper-card p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-sageDark">推荐经历卡片</p>
              <h3 className="font-serif text-xl font-bold text-ink">相关结果</h3>
            </div>
            <span className="rounded-full bg-sageSoft px-3 py-1 text-xs font-semibold text-sageDark">{results.length} 条</span>
          </div>
          <div className="mt-4 space-y-3">
            {results.map((item) => (
              <button key={item.id} onClick={() => onSelect(item)} className="w-full rounded-[28px] border border-line bg-surface p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-note">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="rounded-full bg-paper px-3 py-1 font-semibold text-ink">{item.topicLabel}</span>
                  <span>{item.city}</span>
                  <span>{item.stage}</span>
                </div>
                <div className="mt-2 font-semibold text-ink">{item.title}</div>
                <p className="mt-2 text-sm leading-6 text-muted">{item.summary}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">{item.trustStatus.slice(0, 2).map((status) => <TrustBadge key={status} status={status} />)}</div>
                <div className="mt-3 text-xs text-muted">费用状态：{item.costText}</div>
              </button>
            ))}
          </div>
        </section>
        <section className="paper-card p-5 md:p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><Sparkles className="h-4 w-4" />来源说明</div>
          <p className="mt-3 text-sm leading-7 text-muted">搜索结果里会同时保留用户自述、AI 整理、官方资料和费用线索，但每条卡片都要明确标记来源状态，避免把经验当成结论。</p>
        </section>
        <section className="paper-card p-5 md:p-6">
          <div className="text-sm font-semibold text-sageDark">边界提示</div>
          <p className="mt-3 text-sm leading-7 text-muted">{SAFETY_COPY.global}</p>
        </section>
      </aside>
    </div>
  );
}
