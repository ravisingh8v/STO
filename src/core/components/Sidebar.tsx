import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setActiveScreen, setSidebarOpen } from './utility/slice/navbarSlice';
import { Stack, Box, Text, Avatar, Group, Button } from '@mantine/core';
import {
  IconLayoutDashboard,
  IconMessageCircle2,
  IconUpload,
  IconSearch,
  IconLogout,
} from '@tabler/icons-react';
import styles from './styles/Sidebar.module.css';

export const Sidebar: React.FC = () => {
  const dispatch = useDispatch();
  const { activeScreen, sidebarOpen } = useSelector((state: RootState) => state.navbar);

  const handleScreenChange = (screen: 'overview' | 'verbatim' | 'upload' | 'chat') => {
    dispatch(setActiveScreen(screen));
    // Close sidebar on mobile
    if (window.innerWidth < 768) {
      dispatch(setSidebarOpen(false));
    }
  };

  const handleCloseSidebar = () => {
    if (window.innerWidth < 768) {
      dispatch(setSidebarOpen(false));
    }
  };

  const navItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: <IconLayoutDashboard size={16} />,
      screen: 'overview' as const,
    },
    {
      id: 'verbatim',
      label: 'Verbatim Explorer',
      icon: <IconSearch size={16} />,
      screen: 'verbatim' as const,
    },
    {
      id: 'upload',
      label: 'Upload Data',
      icon: <IconUpload size={16} />,
      screen: 'upload' as const,
    },
    {
      id: 'chat',
      label: 'AI Chat',
      icon: <IconMessageCircle2 size={16} />,
      screen: 'chat' as const,
    },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <Box
          className={styles.sbOverlay}
          onClick={handleCloseSidebar}
        />
      )}

      <Box
        className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}
      >
        {/* Logo Section */}
        <Box className={styles.sbLogo}>
          <Text className={styles.sbLogoMark}>STO</Text>
          <Text className={styles.sbLogoSub}>DASHBOARD</Text>
          <Box className={styles.sbLogoDiv} />
        </Box>

        {/* Navigation Items */}
        <Stack gap={0} className={styles.navGroup}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${
                activeScreen === item.screen ? styles.active : ''
              }`}
              onClick={() => handleScreenChange(item.screen)}
            >
              <Box className={styles.navIcon}>{item.icon}</Box>
              <Text size="sm">{item.label}</Text>
            </button>
          ))}
        </Stack>

        {/* Spacer */}
        <Box className={styles.sbSpacer} />

        {/* Divider */}
        <Box className={styles.sbDivider} />

        {/* User Section */}
        <Box className={styles.sbUser}>
          <Group justify="space-between" className={styles.sbUserRow}>
            <Group gap={8}>
              <Avatar name="RK" radius="50%" size={34} />
              <Stack gap={2}>
                <Text size="sm" fw={500} className={styles.sbUserName}>
                  Ravi Singh
                </Text>
                <Text size="xs" className={styles.sbUserRole}>
                  Administrator
                </Text>
              </Stack>
            </Group>
            <button className={styles.logoutBtn}>
              <IconLogout size={16} />
            </button>
          </Group>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
