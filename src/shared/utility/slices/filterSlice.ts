import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  l1: string[]; // L1 themes
  excl: Record<string, boolean>; // Excluded items
  sentiment: string[];
  engagement: string[];
  flag: string[];
  gender: string[];
  race: string[];
  generation: string[];
  age: string[];
  tenure: string[];
  salaryStatus: string[];
  employStatus: string[];
  division: string[];
  legalEntity: string[];
  businessUnit: string[];
  divExec: string[];
  workLocation: string[];
  manager: string[];
  department: string[];
  mgrLevel: string[];
  jobFunction: string[];
  nbox: string[];
  ownClassA: string[];
  ownVestedRSU: string[];
  ownRSU: string[];
  cpSupt: string[];
  cpEL: string[];
  cpIntern: string[];
  cpRPE: string[];
  cpBOL: string[];
}

const initialState: FilterState = {
  l1: [],
  excl: {},
  sentiment: [],
  engagement: [],
  flag: [],
  gender: [],
  race: [],
  generation: [],
  age: [],
  tenure: [],
  salaryStatus: [],
  employStatus: [],
  division: [],
  legalEntity: [],
  businessUnit: [],
  divExec: [],
  workLocation: [],
  manager: [],
  department: [],
  mgrLevel: [],
  jobFunction: [],
  nbox: [],
  ownClassA: [],
  ownVestedRSU: [],
  ownRSU: [],
  cpSupt: [],
  cpEL: [],
  cpIntern: [],
  cpRPE: [],
  cpBOL: [],
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: keyof FilterState; value: string[] | Record<string, boolean> }>) => {
      const { key, value } = action.payload;
      (state[key] as any) = value;
    },
    toggleFilterValue: (state, action: PayloadAction<{ key: keyof FilterState; value: string }>) => {
      const { key, value } = action.payload;
      const filter = state[key];
      if (Array.isArray(filter)) {
        const index = filter.indexOf(value);
        if (index > -1) {
          filter.splice(index, 1);
        } else {
          filter.push(value);
        }
      }
    },
    clearFilters: () => initialState,
    clearFilterKey: (state, action: PayloadAction<keyof FilterState>) => {
      const key = action.payload;
      if (Array.isArray(state[key])) {
        (state[key] as any) = [];
      } else {
        (state[key] as any) = {};
      }
    },
  },
});

export const { setFilter, toggleFilterValue, clearFilters, clearFilterKey } = filterSlice.actions;
export default filterSlice.reducer;
