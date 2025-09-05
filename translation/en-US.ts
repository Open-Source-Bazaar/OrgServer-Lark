import { IDType } from 'mobx-restful';

export default {
  OrgServer: 'OrgServer',

  welcome_to: 'Welcome to',
  get_started_by_editing: 'Get started by editing',
  upstream_projects: 'Upstream projects',
  home_page: 'Home Page',
  source_code: 'Source Code',
  component: 'Component',
  pagination: 'Pagination',
  powered_by: 'Powered by',
  documentation: 'Documentation',
  documentation_summary: 'Find in-depth information about Next.js features and API.',
  learn: 'Learn',
  learn_summary: 'Learn about Next.js in an interactive course with quizzes!',
  examples: 'Examples',
  examples_summary: 'Discover and deploy boilerplate example Next.js projects.',
  deploy: 'Deploy',
  deploy_summary: 'Instantly deploy your Next.js site to a public URL with Vercel.',

  // Pagination Table
  create: 'Create',
  view: 'View',
  submit: 'Submit',
  cancel: 'Cancel',
  edit: 'Edit',
  delete: 'Delete',
  total_x_rows: ({ totalCount }: { totalCount: number }) => `Total ${totalCount} rows`,
  sure_to_delete_x: ({ keys }: { keys: IDType[] }) => `Are you sure to delete ${keys.join(', ')}?`,
  repository_name: 'Repository Name',
  programming_language: 'Programming Language',
  topic: 'Topic',
  star_count: 'Star Count',
  description: 'Description',

  // Scroll List
  scroll_list: 'Scroll List',
  load_more: 'Load more...',
  no_more: 'No more',

  // MDX Article
  article: 'Article',
  wiki: 'Wiki',

  // Search
  keywords: 'Keywords',
  search_results: 'Search Results',
  member: 'member',
  department: 'department',
  meeting: 'meeting',
  issue: 'Issues',
  proposal: 'Proposals',

  // Election
  election: 'Election',
  candidate: 'candidate',
  理事: 'Board Directors',
  正式成员: 'Member',
  last_level: 'Last Level',
  last_committee: 'Last Committee',
  last_work_group: 'Last Work Group',
  last_project_group: 'Last Project Group',
  next_term_plan: 'Next Term Plan',
  expert_committee: 'Expert Committee',

  // Deparment pages
  show_active_departments: 'show active departments',
  members: 'Members',
  OKR: 'Objectives & Key Results',
  key_results: 'Key Results',
  quarterly: 'Quarterly',
  plan: 'Plan',
  monthly_report: 'Monthly Report',
  progress: 'Progress',
  product: 'Product',
  problem: 'Problem',

  organization_structure: 'Organization Structure',
  organization_structure_chart: 'Organization Structure Chart',
  become_volunteer: 'become a volunteer',
  board_of_directors: 'Board of Directors',
  unpublished: 'unpublished',
  unclassified: 'unclassified',

  // Governance pages
  open_governance: 'Open Governance',
  meeting_calendar: 'Meeting Calendar',
  video_call: 'Video Call',
  meeting_minutes: 'Meeting Minutes',

  // Issue pages
  issue_box: 'Issue Box',
  submit_issue: 'Submit New Issue',
  detail: 'Detail',

  // Proposal pages
  proposal_library: 'Proposal library',
  submit_proposal: 'Submit New Proposal',

  // Election pages
  general_election: 'General Election',
  director_nomination: 'Director nomination',
  member_application: 'Member application',
  voting: 'voting',
  director_election_voting: 'Director election voting',
  member_application_voting: 'Member election voting',
  nominated: 'nominated',
  take_charge_of: 'take charge of',
  grant: 'grant',
  nomination_reason: 'Nomination reason',
  previous_term_contribution: 'Previous term contribution',
  this_term_proposition: 'This term proposition',
  recommendation: 'recommendation',
  vote_for_me: 'Vote for Me',

  // Member pages
  related: 'Related',
  member_x: 'member X',
  file_download: 'File Download',
  press_to_share: 'press image to share',
} as const;
