import type { TrustStatus } from '../types';

export const TRUST_BADGE_META: Record<TrustStatus, { label: string; description: string; icon: string; color: string }> = {
  user_story: {
    label: '用户自述',
    description: '来自匿名用户的个人经历，平台不把它当作普遍结论。',
    icon: '✍',
    color: 'bg-cream text-[#7C5F2B] border-[#E9CFA4]',
  },
  ai_summary: {
    label: 'AI整理',
    description: 'AI 只基于原文提炼流程、阶段和问题，不新增事实判断。',
    icon: '✨',
    color: 'bg-sageSoft text-sageDark border-[#B2DCD2]',
  },
  cost_reported: {
    label: '费用自述',
    description: '费用由用户自行填写，可能受城市、机构、时间和个人情况影响。',
    icon: '¥',
    color: 'bg-yellowSoft text-[#80662C] border-[#EAD28C]',
  },
  cost_verified: {
    label: '费用已核验',
    description: '关键费用字段经过有限核验，但仍不构成报价或报销承诺。',
    icon: '✓',
    color: 'bg-[#E7F6EE] text-[#397B5C] border-[#A9D9C2]',
  },
  official_source: {
    label: '官方资料',
    description: '来自医院、政府、社康或公开服务信息的资料整理。',
    icon: '◇',
    color: 'bg-blueSoft text-[#3B7187] border-[#BFDCE8]',
  },
  expert_review_pending: {
    label: '专业审核中',
    description: '涉及边界较高的表达，等待专业人员做风险表述审核。',
    icon: '…',
    color: 'bg-paper text-muted border-line',
  },
  commercial_content: {
    label: '商业内容',
    description: '存在合作或推广关系，必须明确标识且不参与普通经验排序。',
    icon: '商',
    color: 'bg-coralSoft text-[#B6523A] border-[#F5BDAF]',
  },
  high_risk_review: {
    label: '高风险待审',
    description: '涉及高风险健康、隐私、费用或机构争议内容，暂不作为普通经验展示。',
    icon: '!',
    color: 'bg-[#FFF1E5] text-[#9C4C24] border-[#EBC3A1]',
  },
};
