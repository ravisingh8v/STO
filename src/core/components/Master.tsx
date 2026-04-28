import React, { ReactNode } from 'react';
import { Box } from '@mantine/core';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import PageLayout from './PageLayout';
import styles from './styles/Master.module.css';

interface MasterProps {
  children: ReactNode;
  onExport?: () => void;
}

/**
 * Master is the root layout component that combines:
 * - Sidebar (left navigation)
 * - Topbar (top header)
 * - PageLayout (main content area)
 */
export const Master: React.FC<MasterProps> = ({ children, onExport }) => {
  return (
    <Box className={styles.app}>
      <Sidebar />
      <Box className={styles.main}>
        <Topbar onExport={onExport} />
        <PageLayout>{children}</PageLayout>
      </Box>
    </Box>
  );
};

export default Master;
