import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setActiveScreen, toggleSidebar } from './utility/slice/navbarSlice';
import { SCREEN_TITLES } from './utility/constants/constants';
import { Button, Group, Box, Text } from '@mantine/core';
import { IconMenu2, IconDownload } from '@tabler/icons-react';
import './styles/Topbar.module.css';

interface TopbarProps {
  onExport?: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onExport }) => {
  const dispatch = useDispatch();
  const activeScreen = useSelector((state: RootState) => state.navbar.activeScreen);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Box className="topbar">
      <Group gap="md" className="tb-left">
        <button
          className="hamburger"
          onClick={handleToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <IconMenu2 size={20} />
        </button>
        <Text className="tb-title" fw={700}>
          {SCREEN_TITLES[activeScreen as keyof typeof SCREEN_TITLES] || 'Dashboard'}
        </Text>
      </Group>

      <Group gap="xs" className="tb-right">
        {activeScreen === 'verbatim' && (
          <Button
            variant="subtle"
            size="xs"
            leftSection={<IconDownload size={14} />}
            onClick={onExport}
          >
            Export
          </Button>
        )}
        <Button variant="light" size="xs">
          Settings
        </Button>
      </Group>
    </Box>
  );
};

export default Topbar;
