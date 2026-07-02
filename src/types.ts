export type PageKey = 'home' | 'experiences' | 'guide' | 'share' | 'circles' | 'safety';

export type TopicKey = 'weight' | 'dental' | 'eye' | 'skin' | 'rehab' | 'tcm';

export type TrustStatus =
  | 'user_story'
  | 'ai_summary'
  | 'cost_reported'
  | 'cost_verified'
  | 'official_source'
  | 'expert_review_pending'
  | 'commercial_content'
  | 'high_risk_review';

export type CostStatus = 'undisclosed' | 'user_reported' | 'verified' | 'not_applicable';

export interface Stats {
  saves: number;
  comments: number;
  metoo: number;
}

export interface TimelineItem {
  label: string;
  text: string;
}

export interface Experience {
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

export interface ShareDraft {
  topic: TopicKey;
  city: string;
  stage: string;
  process: string;
  cost: string;
  privateInfo: string;
}
