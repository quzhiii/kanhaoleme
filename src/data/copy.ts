export const SAFETY_COPY = {
  global:
    '看好了么展示的是用户真实体验、AI 整理信息和公开资料，不提供诊断、治疗方案、用药建议或费用承诺。具体健康问题请咨询正规医疗机构或专业人员。',
  xiaokan:
    '我是 AI 社区向导，不是医生，也没有真实就医经历。我可以帮你查找和整理真人经验，但不会替你做医疗决定。',
  cost:
    '费用来自用户自述或有限核验的历史经历，不等于你的个人费用，不构成报价或报销承诺。',
  sensitive:
    '请不要填写身份证号、手机号、住院号、完整票据、完整病历、详细住址等敏感信息。',
  commercial:
    '涉及机构合作或推广内容，必须明确标识，不参与普通经验排序。',
  demo: '以下为 Demo 示例内容，不代表真实用户，不构成医疗建议。',
};

export const NAV_ITEMS = [
  { key: 'home', label: '首页' },
  { key: 'experiences', label: '真实经历' },
  { key: 'guide', label: '小看向导' },
  { key: 'share', label: '分享经历' },
  { key: 'circles', label: '城市圈子' },
  { key: 'safety', label: '合规边界' },
] as const;

export const QUICK_QUERIES = ['减重门诊', '拔智齿', '干眼检查', '医院祛斑', '肩颈康复', '中医理疗'];

export const TOPICS = {
  weight: '减重管理',
  dental: '牙科',
  eye: '眼科',
  skin: '皮肤/医院美容',
  rehab: '康复/运动损伤',
  tcm: '中医理疗',
};
