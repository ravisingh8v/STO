import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Container, Grid, Box, Card, Text, Group, Stack, Badge, SimpleGrid, Button, Select } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import styles from './OverviewPage.module.css';

/**
 * OverviewPage displays:
 * - Top positive and negative themes
 * - Sentiment distribution donut chart
 * - Heatmap of engagement by demographics
 */
const OverviewPage: React.FC = () => {
  const { activeScreen } = useSelector((state: RootState) => state.navbar);
  const { heatmapMode } = useSelector((state: RootState) => state.ui);

  // Placeholder for mock data - will be replaced with API calls
  const mockThemes = {
    positive: [
      { l: 'Manager quality', p: 38, c: 874 },
      { l: 'Culture & belonging', p: 23, c: 529 },
      { l: 'Onboarding experience', p: 19, c: 437 },
      { l: 'Benefits & wellbeing', p: 16, c: 368 },
      { l: 'Team collaboration', p: 13, c: 299 },
    ],
    negative: [
      { l: 'Workload & burnout', p: 41, c: 943 },
      { l: 'Growth & development', p: 28, c: 644 },
      { l: 'Recognition gap', p: 17, c: 391 },
      { l: 'Compensation', p: 14, c: 322 },
      { l: 'Leadership trust', p: 11, c: 253 },
    ],
  };

  const mockSentiment = {
    positive: 42,
    neutral: 31,
    negative: 27,
    total: 2300,
  };

  return (
    <Box className={styles.ovScroll}>
      {/* Theme Grid */}
      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="md">
        {/* Positive Themes Card */}
        <Card className={styles.card}>
          <Group mb="md">
            <Box className={styles.cardDot} style={{ background: '#2E7D32' }} />
            <Text fw={700} className={styles.cardTitle}>
              Top Positive Themes
            </Text>
          </Group>
          <Stack gap="sm">
            {mockThemes.positive.map((theme, idx) => (
              <Group key={idx} justify="space-between">
                <Text size="sm">{theme.l}</Text>
                <Badge size="sm" variant="light">
                  {theme.p}%
                </Badge>
              </Group>
            ))}
          </Stack>
        </Card>

        {/* Sentiment Card */}
        <Card className={styles.card}>
          <Group mb="md">
            <Box className={styles.cardDot} style={{ background: '#F9A825' }} />
            <Text fw={700} className={styles.cardTitle}>
              Sentiment Distribution
            </Text>
          </Group>
          <Stack gap="md">
            <Group justify="space-between">
              <Text size="sm">Positive</Text>
              <Text fw={600}>{mockSentiment.positive}%</Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm">Neutral</Text>
              <Text fw={600}>{mockSentiment.neutral}%</Text>
            </Group>
            <Group justify="space-between">
              <Text size="sm">Negative</Text>
              <Text fw={600}>{mockSentiment.negative}%</Text>
            </Group>
            <Text size="xs" c="dimmed">
              Total Responses: {mockSentiment.total.toLocaleString()}
            </Text>
          </Stack>
        </Card>

        {/* Negative Themes Card */}
        <Card className={styles.card}>
          <Group mb="md">
            <Box className={styles.cardDot} style={{ background: '#C62828' }} />
            <Text fw={700} className={styles.cardTitle}>
              Top Negative Themes
            </Text>
          </Group>
          <Stack gap="sm">
            {mockThemes.negative.map((theme, idx) => (
              <Group key={idx} justify="space-between">
                <Text size="sm">{theme.l}</Text>
                <Badge size="sm" variant="light" color="red">
                  {theme.p}%
                </Badge>
              </Group>
            ))}
          </Stack>
        </Card>
      </SimpleGrid>

      {/* Heatmap Section */}
      <Card className={styles.hmCard} mt="lg">
        <Group justify="space-between" mb="md">
          <Stack gap={0}>
            <Text fw={700} className={styles.hmTitle}>
              Engagement Heatmap
            </Text>
            <Text size="xs" c="dimmed">
              Engagement levels by demographics
            </Text>
          </Stack>
          <Select
            placeholder="Select dimension"
            data={[
              { value: 'div', label: 'By Division' },
              { value: 'le', label: 'By Legal Entity' },
              { value: 'gen', label: 'By Generation' },
              { value: 'ten', label: 'By Tenure' },
            ]}
            defaultValue={heatmapMode}
            size="xs"
          />
        </Group>
        
        <Text size="sm" c="dimmed">
          Heatmap visualization will be rendered here
        </Text>
      </Card>
    </Box>
  );
};

export default OverviewPage;
