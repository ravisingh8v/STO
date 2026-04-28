import React from 'react';
import { Box, Container, Text } from '@mantine/core';
import styles from './UploadDocument.module.css';

/**
 * UploadDocument page displays:
 * - Drag-and-drop file upload areas for questions and responses
 * - Batch naming and upload controls
 * - Progress tracking and file list
 */
const UploadDocumentPage: React.FC = () => {
  return (
    <Box className={styles.uploadScroll}>
      <Container size="lg" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Box style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text c="dimmed">Upload Document - Feature coming soon</Text>
        </Box>
      </Container>
    </Box>
  );
};

export default UploadDocumentPage;
