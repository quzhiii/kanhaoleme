import { ShieldAlert } from 'lucide-react';
import { SAFETY_COPY } from '../../data/copy';

export function SafetyBoundaryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:px-6">
      <div className="paper-card p-6 md:p-8">
        <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><ShieldAlert className="h-4 w-4" />合规边界</div>
        <h2 className="mt-2 font-serif text-3xl font-bold text-ink">看好了么的底线</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            '不做个体诊断。',
            '不做治疗建议。',
            '不做用药建议。',
            '不做医生疗效排名。',
            '不做机构付费排序。',
            '不让 AI 冒充患者、病友或医生。',
            '不默认保存用户健康敏感信息。',
            '不将个人经历包装成普遍医学结论。',
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-line bg-surface p-4 text-sm leading-7 text-muted">{item}</div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-line bg-paper p-5 text-sm leading-7 text-muted">{SAFETY_COPY.global}</div>
      </div>
    </div>
  );
}
