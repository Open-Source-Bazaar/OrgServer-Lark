import { IDType } from 'mobx-restful';

export default {
  OrgServer: '開放治理系統',

  welcome_to: '歡迎使用',
  get_started_by_editing: '開始你的專案吧，編輯',
  upstream_projects: '上游專案',
  home_page: '主頁',
  source_code: '源代碼',
  component: '元件',
  pagination: '分頁',
  powered_by: '強力驅動自',
  documentation: '文檔',
  documentation_summary: '查找有關 Next.js 功能和 API 的深入資訊。',
  learn: '學習',
  learn_summary: '在帶有測驗的交互式課程中了解 Next.js！',
  examples: '示例',
  examples_summary: '發現和部署示例 Next.js 專案。',
  deploy: '部署',
  deploy_summary: '使用 Vercel 立即將您的 Next.js 站點部署到公共 URL。',

  // Pagination Table
  create: '新增',
  view: '查看',
  submit: '提交',
  cancel: '取消',
  edit: '編輯',
  delete: '刪除',
  total_x_rows: ({ totalCount }: { totalCount: number }) => `共 ${totalCount} 行`,
  sure_to_delete_x: ({ keys }: { keys: IDType[] }) => `您確定刪除 ${keys.join('、')} 嗎？`,
  repository_name: '倉庫名',
  programming_language: '編程語言',
  topic: '話題',
  star_count: '星標數',
  description: '描述',

  // Scroll List
  scroll_list: '滾動列表',
  load_more: '加載更多……',
  no_more: '沒有更多',

  // MDX Article
  article: '文章',
  wiki: '知識庫',

  // Search
  keywords: '關鍵詞',
  search_results: '搜尋結果',
  member: '成員',
  department: '部門',
  meeting: '會議',
  issue: '意見',
  proposal: '提案',

  // Election
  election: '選舉',
  candidate: '候選人',
  理事: '理事',
  正式成员: '正式成員',
  last_level: '上屆職級',
  last_committee: '上屆任職委員會',
  last_work_group: '上屆任職工作組',
  last_project_group: '上屆任職專案組',
  next_term_plan: '下屆規劃',
  expert_committee: '專家委員會',

  // Deparment pages
  show_active_departments: '顯示活躍部門',
  members: '成員',
  OKR: '目標與關鍵結果',
  key_results: '關鍵結果',
  quarterly: '季度',
  plan: '計劃',
  monthly_report: '月度報告',
  progress: '進度',
  product: '產出',
  problem: '疑難',

  organization_structure: '組織機構',
  organization_structure_chart: '組織架構全景圖',
  become_volunteer: '成為志願者',
  board_of_directors: '理事會',
  unpublished: '未公開',
  unclassified: '未分組',

  // Governance pages
  open_governance: '開放治理',
  meeting_calendar: '會議日曆',
  video_call: '視頻通話',
  meeting_minutes: '會議紀要',

  // Issue pages
  issue_box: '意見箱',
  submit_issue: '提交新意見',
  detail: '詳情',

  // Proposal pages
  proposal_library: '提案庫',
  submit_proposal: '提交新提案',

  // Election pages
  general_election: '換屆選舉',
  director_nomination: '理事提名',
  member_application: '正式成員提名',
  voting: '投票',
  director_election_voting: '理事競選投票',
  member_application_voting: '成員納新投票',
  nominated: '提名',
  take_charge_of: '擔任',
  grant: '授予',
  nomination_reason: '提名理由',
  previous_term_contribution: '上屆貢獻',
  this_term_proposition: '本屆主張',
  recommendation: '推薦語',
  vote_for_me: '投我一票',

  // Member pages
  related: '相關',
  member_x: '成員X',
  file_download: '檔案下載',
  press_to_share: '長按圖片分享',
} as const;
