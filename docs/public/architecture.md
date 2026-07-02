# Kanhaoleme Public Architecture

Date: 2026-07-02

## Current Demo Architecture

Kanhaoleme is currently a static frontend demo built with React 19, TypeScript, Vite, Tailwind CSS, and lucide-react.

```text
React/Vite frontend
  - App route shell with local state navigation
  - pages: Home, Experience List, Experience Detail, XiaoKan Guide, Share Experience, City Circles, Safety Boundary
  - components: layout, experience cards, trust badges, XiaoKan visuals
  - data: mock experiences, copy constants, trust badge metadata
  - assets: XiaoKan images under public/assets/xiaokan
```

The current demo has no backend, no login, no database, no Supabase/RLS, no real user submission flow, no moderation dashboard, no real AI Agent calls, no media upload, and no persistent storage.

## Experience Data Model

The frontend demo uses local mock data shaped around the `Experience` model:

```ts
interface Experience {
  id: string;
  title: string;
  anonymousAuthor: string;
  city: '杭州' | '广州' | '北京';
  topic: TopicKey;
  topicLabel: string;
  serviceType: string;
  stage: string;
  summary: string;
  trustStatus: TrustStatus[];
  costStatus: CostStatus;
  costText: string;
  costNotes: string[];
  tags: string[];
  stats: Stats;
  aiSummary: string;
  timeline: TimelineItem[];
  questions: string[];
  sourceNote: string;
}
```

The model focuses on user experience, source clarity, cost context, and questions to confirm with formal providers. It does not include diagnosis, treatment plans, prescriptions, or provider ranking.

## TrustStatus

The demo uses trust badges to separate different source and risk states:

- `user_story`: user self-reported experience.
- `ai_summary`: AI-organized summary based on the original text.
- `cost_reported`: cost self-reported by the user.
- `cost_verified`: cost field has limited verification.
- `official_source`: public information from official sources.
- `expert_review_pending`: expression needs professional risk review.
- `commercial_content`: commercial or sponsored content, clearly labeled and excluded from ordinary ranking.
- `high_risk_review`: high-risk content pending review.

## CostStatus

The current frontend uses four cost states:

- `undisclosed`: user did not disclose cost.
- `user_reported`: cost is self-reported.
- `verified`: limited cost verification.
- `not_applicable`: cost is not applicable to the content.

Costs are historical clues only. They are not quotes, reimbursement promises, or personal estimates.

## XiaoKan Guide

XiaoKan is the AI community guide concept. In the current demo, XiaoKan uses local keyword matching against mock experiences. XiaoKan does not diagnose, recommend treatment, recommend drugs, rank doctors, or recommend institutions.

## Background Agent Concept

The product design includes future background agents:

- De-identification Agent.
- Structuring Agent.
- Source Recognition Agent.
- Risk Moderation Agent.
- Local Service Agent.

These are product concepts in the current demo. They are not implemented as running backend services yet.

## Future MVP API Direction

Future MVP APIs may include:

- Experience API for approved experience cards.
- Submission API for drafts and review submissions.
- Search API for topic, city, stage, and natural-language retrieval.
- Trust Status API for source/risk labels.
- Moderation API for review queues, risk reasons, reports, deletion, and withdrawal.

The API and database layer should only be introduced after privacy, authorization, de-identification, audit logging, and deletion/withdrawal requirements are defined.
