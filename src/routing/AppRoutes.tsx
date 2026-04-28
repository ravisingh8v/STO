import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box, LoadingOverlay } from '@mantine/core';

// Lazy load pages
const OverviewPage = lazy(() => import('../pages/overview/OverviewPage'));
const VerbatimExplorerPage = lazy(() => import('../pages/verbatim-explorer/VerbatimExplorerPage'));
const UploadDocumentPage = lazy(() => import('../pages/upload-document/UploadDocument'));
const ChatPage = lazy(() => import('../pages/chat/ChatPage'));

/**
 * Loading fallback component
 */
const LoadingFallback = () => (
  <Box style={{ position: 'relative', height: '100%' }}>
    <LoadingOverlay visible={true} />
  </Box>
);

/**
 * AppRoutes component defines all routes for the application
 */
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/overview"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <OverviewPage />
          </Suspense>
        }
      />
      <Route
        path="/verbatim"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <VerbatimExplorerPage />
          </Suspense>
        }
      />
      <Route
        path="/upload"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <UploadDocumentPage />
          </Suspense>
        }
      />
      <Route
        path="/chat"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <ChatPage />
          </Suspense>
        }
      />
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/overview" replace />} />
      <Route path="*" element={<Navigate to="/overview" replace />} />
    </Routes>
  );
};

export default AppRoutes;
