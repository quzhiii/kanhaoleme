import { ArrowRight, Search, MessageSquare, MapPinned, ShieldCheck, Layers3, ScanLine, BadgeCheck, Bot } from 'lucide-react';
import type { Experience, PageKey } from '../../types';
import { QUICK_QUERIES } from '../../data/copy';
import { mockExperiences } from '../../data/mockExperiences';
import { ExperienceCard } from '../experience/ExperienceCard';
import { SafetyNotice } from '../layout/SafetyNotice';

interface HomePageProps {
  onNavigate: (page: PageKey, query?: string) => void;
  onSelect: (experience: Experience) => void;
}

export function HomePage({ onNavigate, onSelect }: HomePageProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-8 md:px-6">
      <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="space-y-7">
          <span className="stamp inline-flex rounded-full bg-surface/80 px-4 py-2 text-xs font-bold text-muted">真实经验，不替代医生</span>
          <div className="space-y-4">
            <h1 className="max-w-2xl font-serif text-5xl leading-[1.05] font-bold tracking-[-0.04em] text-ink md:text-7xl">看病前，先看看<br /><span className="text-sageDark">真实经历。</span></h1>
            <p className="max-w-xl text-base leading-8 text-muted md:text-lg">从减重门诊、牙科、眼科，到皮肤咨询、康复和中医理疗。看好了么用 AI 帮你整理真实过程、费用线索和信息来源，让后来的人少走弯路。</p>
          </div>
          <SafetyNotice>{'这里不提供诊断、治疗方案、用药建议或费用承诺。'}</SafetyNotice>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => onNavigate('guide')} className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 font-semibold text-surface shadow-note"><Search className="h-4 w-4" />让小看帮我找经历</button>
            <button onClick={() => onNavigate('share')} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-3 font-semibold text-ink"><MessageSquare className="h-4 w-4 text-coral" />我想分享一次经历</button>
          </div>
          <div className="grid grid-cols-3 gap-2 pt-2 text-xs text-muted">
            <div className="rounded-3xl border border-line bg-surface/70 p-3"><strong className="block text-lg text-ink">18</strong>Demo 经历</div>
            <div className="rounded-3xl border border-line bg-surface/70 p-3"><strong className="block text-lg text-ink">8</strong>可信标识</div>
            <div className="rounded-3xl border border-line bg-surface/70 p-3"><strong className="block text-lg text-ink">3</strong>城市占位</div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 top-8 z-10 hidden rotate-[-7deg] rounded-3xl border border-line bg-sageSoft px-4 py-3 text-sm font-bold text-sageDark shadow-note md:block">用户自述</div>
          <div className="absolute right-2 top-12 z-10 hidden rotate-[6deg] rounded-3xl border border-line bg-blueSoft px-4 py-3 text-sm font-bold text-[#3B7187] shadow-note md:block">官方资料</div>
          <div className="absolute bottom-14 left-6 z-10 hidden rotate-[4deg] rounded-3xl border border-line bg-yellowSoft px-4 py-3 text-sm font-bold text-[#80662C] shadow-note md:block">费用线索</div>
          <img className="hero-frame relative w-full border border-line object-cover" src="/assets/xiaokan/xiaokan-hero.png" alt="小看在整理真实经历卡、费用线索和城市健康地图" />
        </div>
      </section>

      <section className="paper-card overflow-hidden p-4 md:p-5">
        <div className="grid gap-4 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div className="p-3 md:p-5">
            <p className="section-eyebrow text-xs font-bold text-sageDark">XIAOKAN SYSTEM</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-[-0.03em] text-ink md:text-5xl">不是聊天机器人，<br />是你的经验整理台。</h2>
            <p className="mt-4 text-sm leading-8 text-muted">借鉴 Alice 的“产品能力分层”节奏，但把主角换成小看自己的工作台：真实经历卡、城市健康地图、来源可信贴纸、费用线索便签。</p>
          </div>
          <img className="w-full rounded-[30px] border border-line object-cover shadow-note" src="/assets/xiaokan/xiaokan-system.png" alt="小看角色设定与信息整理系统" />
        </div>
      </section>

      <section className="paper-card p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-4">
          {[
            ['你说出困惑', '一句自然语言，不需要懂医学术语。', Search],
            ['小看拆解线索', '提取主题、城市、阶段、费用关注点。', ScanLine],
            ['后台分清来源', '用户自述、AI整理、官方资料、费用线索。', Layers3],
            ['返回可确认问题', '只帮你准备问题，不替你做决定。', BadgeCheck],
          ].map(([title, desc, Icon]) => {
            const IconComp = Icon as typeof Search;
            return (
              <div key={title as string} className="rounded-[28px] border border-line bg-surface p-5 shadow-sm">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-sageSoft text-sageDark"><IconComp className="h-5 w-5" /></div>
                <div className="font-serif text-lg font-bold text-ink">{title as string}</div>
                <p className="mt-2 text-sm leading-7 text-muted">{desc as string}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="paper-card p-5 md:p-6">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-eyebrow text-xs font-bold text-sageDark">TRY IT NOW</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink">你现在想先了解什么？</h2>
            <p className="mt-3 text-sm leading-7 text-muted">像在「没完了么」里翻未完成作品一样，这里翻的是还原真实过程的健康经验卡。</p>
          </div>
          <div className="rounded-[30px] border border-line bg-surface p-4 shadow-note">
            <div className="rounded-3xl bg-paper px-4 py-4 text-sm text-lightText">例如：减重门诊怎么挂号、拔智齿大概多少钱、祛斑咨询流程、干眼检查…</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {QUICK_QUERIES.map((query) => (
                <button key={query} onClick={() => onNavigate('guide', query)} className="rounded-full bg-sageSoft px-4 py-2 text-sm font-semibold text-sageDark transition hover:bg-sage hover:text-surface">{query}</button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="section-eyebrow text-xs font-bold text-sageDark">COMMUNITY NOTES</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-ink">大家正在分享的真实经历</h2>
          </div>
          <button onClick={() => onNavigate('experiences')} className="hidden items-center gap-1 text-sm font-semibold text-sageDark md:inline-flex">查看全部 <ArrowRight className="h-4 w-4" /></button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {mockExperiences.slice(0, 6).map((experience) => <ExperienceCard key={experience.id} experience={experience} onSelect={onSelect} />)}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="paper-card p-6">
          <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><Bot className="h-4 w-4" />小看的后台工作台</div>
          <h3 className="mt-2 font-serif text-2xl font-bold text-ink">后台 Agent 是流程，不是医生团队。</h3>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {['脱敏 Agent', '结构化 Agent', '来源识别 Agent', '风险审核 Agent', '本地服务 Agent'].map((agent) => (
              <div key={agent} className="rounded-3xl border border-line bg-surface p-4 text-sm text-muted">{agent}</div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-muted">这些 Agent 是后台流程，不是医生，不与用户建立关系，不给诊疗建议。</p>
        </div>
        <div className="paper-card overflow-hidden p-0">
          <img className="h-full min-h-[320px] w-full object-cover" src="/assets/xiaokan/xiaokan-expressions.png" alt="小看表情包" />
        </div>
      </section>

      <section className="paper-card p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {['杭州', '广州', '北京'].map((city) => (
            <div key={city} className="rounded-3xl border border-line bg-softBg p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><MapPinned className="h-4 w-4" />{city}</div>
              <p className="mt-3 text-sm leading-7 text-muted">未来可接入家庭医生、社康、医联体公开信息；当前仅为演示占位，不代表已合作。</p>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-card p-6">
        <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><ShieldCheck className="h-4 w-4" />合规边界</div>
        <div className="mt-3 text-sm leading-7 text-muted">{ '看好了么展示的是用户真实体验、AI 整理信息和公开资料，不提供诊断、治疗方案、用药建议或费用承诺。具体健康问题请咨询正规医疗机构或专业人员。' }</div>
      </section>
    </div>
  );
}
