export type Sentiment = 'Positive' | 'Neutral' | 'Negative';
export type Engagement = 'Engaged' | 'Not Engaged' | 'Neutral';
export type ModuleType = 'Workplace' | 'Culture' | 'Compensation' | 'Development';
export type HeatmapMode = 'div' | 'le' | 'gen' | 'ten';

export interface HeatmapRow {
  n: string; // name
  a: number; // average
  v: number[]; // values for each column
}

export interface HeatmapData {
  cols: string[];
  rows: HeatmapRow[];
}

export interface Theme {
  l: string; // label
  p: number; // percentage
  c?: number; // count
}

export interface Verbatim {
  id: number;
  sentiment: Sentiment;
  l1: string; // L1 theme
  l2: string; // L2 theme
  topic: string;
  engagement: Engagement;
  gender: string;
  race: string;
  generation: string;
  age: string;
  tenure: string;
  salaryStatus: string;
  employStatus: string;
  division: string;
  businessUnit: string;
  legalEntity: string;
  department: string;
  workLocation: string;
  manager: string;
  divExec: string;
  mgrLevel: string;
  jobFunction: string;
  jobTitle: string;
  roleName: string;
  nbox: string;
  ownClassA: string;
  ownVestedRSU: string;
  ownRSU: string;
  cpSupt: string;
  cpEL: string;
  cpIntern: string;
  cpRPE: string;
  cpBOL: string;
  text: string;
  type: 'single' | 'dual';
}

export interface Dashboard {
  themes: {
    positive: Theme[];
    negative: Theme[];
  };
  heatmap: {
    div: HeatmapData;
    le: HeatmapData;
    gen: HeatmapData;
    ten: HeatmapData;
  };
  sentiment: {
    positive: number;
    neutral: number;
    negative: number;
    total: number;
  };
}

export interface UploadedFile {
  id: string;
  name: string;
  type: 'question' | 'response';
  size: number;
  uploadedAt: string;
  uploadedBy: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress?: number;
}

export interface FilterGroup {
  name: string;
  items: FilterGroupItem[];
  expanded: boolean;
}

export interface FilterGroupItem {
  value: string;
  label: string;
  checked: boolean;
  count?: number;
}

export interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export interface HistoryEntry {
  id: string;
  type: 'sentiment' | 'theme';
  timestamp: string;
  from?: string;
  to: string;
  user: string;
  avatar: string;
}
