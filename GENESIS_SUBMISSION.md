# Genesis Hackathon Submission

## Project: 看好了么 / Kanhaoleme

**Tagline:** AI 驱动的真实就医与院外健康体验社区

---

## Submission Links

| Item | URL |
|------|-----|
| **GitHub Repository** | https://github.com/quzhiii/kanhaoleme |
| **Live Demo** | https://kanhaoleme-public.vercel.app |
| **Project Deck** | 暂不包含（后续版本补充） |

## Public Documentation

| Document | Path |
|----------|------|
| Architecture | [docs/public/architecture.md](docs/public/architecture.md) |
| Roadmap | [docs/public/roadmap.md](docs/public/roadmap.md) |
| Safety Boundary | [docs/public/safety-boundary.md](docs/public/safety-boundary.md) |
| Demo Script | [docs/public/demo-script.md](docs/public/demo-script.md) |

---

## What We Built

一个 AI 驱动的真实就医与院外健康体验社区 Demo。用"小看"AI 向导帮助用户查找、整理和分享真实就医经历，让看病前的信息更透明、更轻松、更可信。


## Problems Solved

1. **看病前信息不透明** — 用户很难提前了解真实挂号流程、等待时间、费用线索和沟通体验。
2. **真实经验碎片化** — 分散在小红书、群聊、论坛和问答平台，检索成本高。
3. **医疗 AI 缺社区语境** — 现有医疗 AI 擅长知识解释，但缺少真实用户连续体验和院外过程信息。
4. **泛内容平台可信度低** — 广告混杂、来源难辨、费用状态不清。


## Core Features (Demo)

- XiaoKan AI 社区向导 — 从自然语言问题进入相关经历
- 真实经历卡片 — 流程、费用线索、阶段、城市、可信标识结构化呈现
- 来源可信标识系统 — 8 种 TrustStatus 区分用户自述、AI 整理、费用状态、商业内容和高风险待审
- 费用线索 — 仅展示用户自述或有限核验的历史线索，不做报价或报销承诺
- 分享经历预览 — 本地预览 + 敏感信息提示，当前 Demo 不提交/不保存
- 合规边界说明 — 所有页面强调平台不提供诊断、治疗方案、用药建议或机构推荐


## AI Agent Design (Product Concept)

Demo 展示的是 Agent 产品设计和前端交互原型，不包含真实后台 Agent 调用。

| Agent | 职责 |
|-------|------|
| 小看向导 | 查找相似经历、解释来源状态、整理可确认问题 |
| 脱敏 Agent | 识别手机号、住院号、完整病历、票据、详细地址 |
| 结构化 Agent | 把自由叙事整理成体验卡字段 |
| 来源识别 Agent | 区分用户自述、官方资料、商业内容和费用状态 |
| 风险审核 Agent | 识别医疗建议、疗效承诺、广告和高风险表达 |
| 本地服务 Agent | 整理城市公开服务信息，不做机构推荐或付费排序 |


## Safety Boundaries

- 不诊断
- 不治疗
- 不荐药
- 不排名医生
- 不推荐机构
- 不做费用承诺
- 不让小看冒充医生、病友或真实患者
- 费用只是用户自述或有限核验线索


## Current Demo Limitations

- 当前是静态前端 Demo
- 当前使用 18 条 mock 数据，不代表真实用户
- 当前不处理真实用户数据
- 当前不接入真实医疗 AI
- 当前没有后端、登录、数据库、真实投稿、审核后台、真实检索、媒体上传、评论互动或持久化数据


## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- lucide-react


## Roadmap

1. **v0.2 Demo Hardening** — 补齐筛选、可编辑向导、投稿安全检查
2. **20-30 人内测** — 验证可信标识理解度、投稿意愿、是否误认为问诊
3. **受控社区 MVP** — 登录、草稿、真实投稿、审核状态、删除撤回
4. **审核后台** — 人工审核、风险原因码、举报、审计日志
5. **API & 数据库** — 授权、脱敏、删除撤回和合规机制准备好后接入
6. **城市服务信息** — 整理家庭医生、社康和医联体公开服务信息
7. **B2BC 合作验证** — 验证非广告型机构公开回应和匿名聚合体验报告


## Build & Verification

- `npm run build` — passes
- `npm run lint` — passes
- Deployed on Vercel, production URL accessible
- No API keys, secrets, or real health data in public repo

---

*Last updated: 2026-07-02*