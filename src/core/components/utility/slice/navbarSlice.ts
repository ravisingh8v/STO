import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Screen = 'overview' | 'verbatim' | 'upload' | 'chat';

interface NavbarState {
  activeScreen: Screen;
  sidebarOpen: boolean;
}

const initialState: NavbarState = {
  activeScreen: 'overview',
  sidebarOpen: true,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveScreen: (state, action: PayloadAction<Screen>) => {
      state.activeScreen = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

export const { setActiveScreen, toggleSidebar, setSidebarOpen } = navbarSlice.actions;
export default navbarSlice.reducer;
