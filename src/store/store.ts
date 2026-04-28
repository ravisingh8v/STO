import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../core/components/utility/slice/navbarSlice';
import filterReducer from '../shared/utility/slices/filterSlice';
import uiReducer from '../shared/utility/slices/uiSlice';
import { dashboardApi } from '../shared/utility/services/dashboardApi';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    filters: filterReducer,
    ui: uiReducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
