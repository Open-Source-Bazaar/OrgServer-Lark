import { IDType } from 'mobx-restful';

export default {
  OrgServer: '开放治理系统',

  welcome_to: '欢迎使用',
  get_started_by_editing: '开始你的项目吧，编辑',
  upstream_projects: '上游项目',
  home_page: '主页',
  source_code: '源代码',
  component: '组件',
  pagination: '分页',
  powered_by: '强力驱动自',
  documentation: '文档',
  documentation_summary: '查找有关 Next.js 功能和 API 的深入信息。',
  learn: '学习',
  learn_summary: '在带有测验的交互式课程中了解 Next.js！',
  examples: '示例',
  examples_summary: '发现和部署示例 Next.js 项目。',
  deploy: '部署',
  deploy_summary: '使用 Vercel 立即将您的 Next.js 站点部署到公共 URL。',

  // Pagination Table
  create: '新增',
  view: '查看',
  submit: '提交',
  cancel: '取消',
  edit: '编辑',
  delete: '删除',
  total_x_rows: ({ totalCount }: { totalCount: number }) => `共 ${totalCount} 行`,
  sure_to_delete_x: ({ keys }: { keys: IDType[] }) => `您确定删除 ${keys.join('、')} 吗？`,
  repository_name: '仓库名',
  programming_language: '编程语言',
  topic: '话题',
  star_count: '星标数',
  description: '描述',

  // Scroll List
  scroll_list: '滚动列表',
  load_more: '加载更多……',
  no_more: '没有更多',

  // MDX Article
  article: '文章',
  wiki: '知识库',

  // Search
  keywords: '关键词',
  search_results: '搜索结果',
  member: '成员',
  department: '部门',
  meeting: '会议',
  issue: '意见',
  proposal: '提案',

  // Election
  election: '选举',
  candidate: '候选人',
  理事: '理事',
  正式成员: '正式成员',
  last_level: '上届职级',
  last_committee: '上届任职委员会',
  last_work_group: '上届任职工作组',
  last_project_group: '上届任职项目组',
  next_term_plan: '下届规划',
  expert_committee: '专家委员会',

  // Deparment pages
  show_active_departments: '显示活跃部门',
  members: '成员',
  OKR: '目标与关键结果',
  key_results: '关键结果',
  quarterly: '季度',
  plan: '计划',
  monthly_report: '月度报告',
  progress: '进度',
  product: '产出',
  problem: '疑难',
  
  organization_structure: '组织架构',
  organization_structure_chart: '组织架构全景图',
  become_volunteer: '成为志愿者',
  board_of_directors: '理事会',
  unpublished: '未公开',
  unclassified: '未分组',

  // Governance pages
  open_governance: '开放治理',
  meeting_calendar: '会议日历',
  video_call: '视频通话',
  meeting_minutes: '会议纪要',

  // Issue pages
  issue_box: '意见箱',
  submit_issue: '提交新意见',
  detail: '详情',

  // Proposal pages
  proposal_library: '提案库',
  submit_proposal: '提交新提案',

  // Election pages
  general_election: '换届选举',
  director_nomination: '理事提名',
  member_application: '正式成员提名',
  voting: '投票',
  director_election_voting: '理事竞选投票',
  member_application_voting: '成员纳新投票',
  nominated: '提名',
  take_charge_of: '担任',
  grant: '授予',
  nomination_reason: '提名理由',
  previous_term_contribution: '上届贡献',
  this_term_proposition: '本届主张',
  recommendation: '推荐语',
  vote_for_me: '投我一票',

  // Member pages
  related: '相关',
  member_x: '成员X',
  file_download: '资料下载',
  press_to_share: '长按图片分享',
} as const;
