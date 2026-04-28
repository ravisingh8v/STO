import React, { ReactNode } from 'react';
import { Box } from '@mantine/core';
import styles from './styles/PageLayout.module.css';

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageLayout wraps the main content area of the application
 * Provides flex layout and overflow handling for the main content
 */
export const PageLayout: React.FC<PageLayoutProps> = ({ children, className }) => {
  return (
    <Box className={`${styles.pageLayout} ${className || ''}`}>
      {children}
    </Box>
  );
};

export default PageLayout;
