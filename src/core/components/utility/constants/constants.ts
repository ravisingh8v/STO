export const APP_NAME = 'STO Building Group';
export const APP_SUBTITLE = 'Employee Engagement Dashboard';

export const SCREENS = {
  OVERVIEW: 'overview',
  VERBATIM: 'verbatim',
  UPLOAD: 'upload',
  CHAT: 'chat',
} as const;

export const SCREEN_TITLES = {
  overview: 'Overview dashboard',
  verbatim: 'Verbatim Explorer',
  upload: 'Upload Data',
  chat: 'AI Chat',
} as const;

export const MODULES = {
  WORKPLACE: 'Workplace',
  CULTURE: 'Culture',
  COMPENSATION: 'Compensation',
  DEVELOPMENT: 'Development',
} as const;

export const HEATMAP_MODES = {
  DIVISION: 'div',
  LEGAL_ENTITY: 'le',
  GENERATION: 'gen',
  TENURE: 'ten',
} as const;

export const SENTIMENTS = {
  POSITIVE: 'Positive',
  NEUTRAL: 'Neutral',
  NEGATIVE: 'Negative',
} as const;

export const ENGAGEMENT_LEVELS = {
  ENGAGED: 'Engaged',
  NOT_ENGAGED: 'Not Engaged',
  NEUTRAL: 'Neutral',
} as const;

export const FILE_TYPES = {
  QUESTIONS: 'question',
  RESPONSES: 'response',
} as const;

export const HEATMAP_COLOR_THRESHOLDS = {
  VERY_HIGH: 22, // Red
  HIGH: 17, // Orange
  MODERATE: 12, // Amber
  LOW_MODERATE: 8, // Green
  // Below 8: Pale Green
} as const;

export const API_ENDPOINTS = {
  DASHBOARD: '/dashboard',
  VERBATIMS: '/verbatims',
  UPLOAD: '/upload',
  CHAT: '/chat',
} as const;

export const SIDEBAR_WIDTH = 220;
export const TOPBAR_HEIGHT = 60;
export const FILTER_PANEL_WIDTH = 300;

export const DEFAULT_PAGE_SIZE = 50;
export const DEFAULT_TIMEOUT = 30000;
