import React from 'react';
import { Box, Container, Text } from '@mantine/core';
import styles from './VerbatimExplorerPage.module.css';

/**
 * VerbatimExplorerPage displays:
 * - Filter panel with demographics and sentiment filters
 * - Verbatim cards with sentiment flags
 * - Search and theme selection
 */
const VerbatimExplorerPage: React.FC = () => {
  return (
    <Box className={styles.veBody}>
      <Container size="xl" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text c="dimmed">Verbatim Explorer - Feature coming soon</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default VerbatimExplorerPage;
