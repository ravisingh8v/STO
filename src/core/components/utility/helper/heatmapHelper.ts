import { HEATMAP_COLOR_THRESHOLDS } from '../constants/constants';

export interface HeatmapColor {
  bg: string;
  text: string;
}

/**
 * Get background and text color for heatmap cell based on value
 * Red (22+) > Orange (17+) > Amber (12+) > Green (8+) > Pale Green (<8)
 */
export function getHeatmapColor(value: number): HeatmapColor {
  if (value >= HEATMAP_COLOR_THRESHOLDS.VERY_HIGH) {
    return { bg: '#C62828', text: '#fff' }; // Red - very high
  }
  if (value >= HEATMAP_COLOR_THRESHOLDS.HIGH) {
    return { bg: '#E65100', text: '#fff' }; // Orange - high
  }
  if (value >= HEATMAP_COLOR_THRESHOLDS.MODERATE) {
    return { bg: '#F9A825', text: '#3E2000' }; // Amber - moderate
  }
  if (value >= HEATMAP_COLOR_THRESHOLDS.LOW_MODERATE) {
    return { bg: '#8BC34A', text: '#1B3A00' }; // Green - low-moderate
  }
  return { bg: '#C8E6C9', text: '#1B5E20' }; // Pale green - low
}

/**
 * Format number with thousand separators
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Remove trailing code (NNN) from label for display
 */
export function shortLabel(label: string): string {
  return label.replace(/\s*\(\d+\)\s*$/, '').trim();
}

/**
 * Calculate percentage bar width
 */
export function calculateBarWidth(value: number, max: number): number {
  return Math.round((value / max) * 100);
}

/**
 * Get sentiment color
 */
export function getSentimentColor(sentiment: string): string {
  switch (sentiment.toLowerCase()) {
    case 'positive':
      return '#2E7D32'; // Green
    case 'negative':
      return '#C62828'; // Red
    case 'neutral':
    default:
      return '#BDBDBD'; // Gray
  }
}

/**
 * Get sentiment background color
 */
export function getSentimentBgColor(sentiment: string): string {
  switch (sentiment.toLowerCase()) {
    case 'positive':
      return '#E8F5E9';
    case 'negative':
      return '#FFEBEE';
    case 'neutral':
    default:
      return '#EEEEEC';
  }
}
