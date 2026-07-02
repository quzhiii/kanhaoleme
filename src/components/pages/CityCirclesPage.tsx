import { MapPinned } from 'lucide-react';
import { SAFETY_COPY } from '../../data/copy';

export function CityCirclesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 md:px-6">
      <div className="paper-card p-6 md:p-8">
        <p className="text-sm font-semibold text-sageDark">城市圈子</p>
        <h2 className="mt-2 font-serif text-3xl font-bold text-ink">城市健康圈占位</h2>
        <p className="mt-3 text-sm leading-7 text-muted">未来可接入家庭医生、社康、医联体公开信息；当前仅为演示占位，不代表已合作。</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {['杭州', '广州', '北京'].map((city) => (
            <div key={city} className="rounded-3xl border border-line bg-surface p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-sageDark"><MapPinned className="h-4 w-4" />{city}</div>
              <p className="mt-3 text-sm leading-7 text-muted">公开信息、用户体验和本地服务入口会在这里分层展示，但当前只是占位演示。</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">{SAFETY_COPY.global}</p>
      </div>
    </div>
  );
}
