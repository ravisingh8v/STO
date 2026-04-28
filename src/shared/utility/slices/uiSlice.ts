import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
  verbatimModule: 'Workplace' | 'Culture' | 'Compensation' | 'Development';
  heatmapMode: 'div' | 'le' | 'gen' | 'ten';
  filterPanelOpen: boolean;
  selectedVerbatimId: string | null;
  verbatimFlags: Record<string, string | null>; // id -> sentiment
  columnDropdownOpen: boolean;
  selectedDivisions: string[];
  selectedLegalEntities: string[];
  selectedBusinessUnits: string[];
}

const initialState: UIState = {
  verbatimModule: 'Workplace',
  heatmapMode: 'div',
  filterPanelOpen: false,
  selectedVerbatimId: null,
  verbatimFlags: {},
  columnDropdownOpen: false,
  selectedDivisions: [],
  selectedLegalEntities: [],
  selectedBusinessUnits: [],
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setVerbatimModule: (state, action: PayloadAction<UIState['verbatimModule']>) => {
      state.verbatimModule = action.payload;
    },
    setHeatmapMode: (state, action: PayloadAction<UIState['heatmapMode']>) => {
      state.heatmapMode = action.payload;
    },
    setFilterPanelOpen: (state, action: PayloadAction<boolean>) => {
      state.filterPanelOpen = action.payload;
    },
    setSelectedVerbatimId: (state, action: PayloadAction<string | null>) => {
      state.selectedVerbatimId = action.payload;
    },
    setVerbatimFlag: (state, action: PayloadAction<{ id: string; sentiment: string | null }>) => {
      const { id, sentiment } = action.payload;
      if (sentiment === null) {
        delete state.verbatimFlags[id];
      } else {
        state.verbatimFlags[id] = sentiment;
      }
    },
    setColumnDropdownOpen: (state, action: PayloadAction<boolean>) => {
      state.columnDropdownOpen = action.payload;
    },
    setSelectedDivisions: (state, action: PayloadAction<string[]>) => {
      state.selectedDivisions = action.payload;
    },
    setSelectedLegalEntities: (state, action: PayloadAction<string[]>) => {
      state.selectedLegalEntities = action.payload;
    },
    setSelectedBusinessUnits: (state, action: PayloadAction<string[]>) => {
      state.selectedBusinessUnits = action.payload;
    },
  },
});

export const {
  setVerbatimModule,
  setHeatmapMode,
  setFilterPanelOpen,
  setSelectedVerbatimId,
  setVerbatimFlag,
  setColumnDropdownOpen,
  setSelectedDivisions,
  setSelectedLegalEntities,
  setSelectedBusinessUnits,
} = uiSlice.actions;

export default uiSlice.reducer;
