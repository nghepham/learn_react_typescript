import {createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
  keyword: string;
  status: string;
  priorities: string[];
}

const initialState: FilterState = {
  keyword: '',
  status: 'All',
  priorities: []
};

export const filterSlide = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    keywordChange: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload
    },
    stateChange: (state, action: PayloadAction<string>) => {
      state.status = action.payload
    },
    prioritiesChange: (state, action: PayloadAction<string[]>) => {
      state.priorities = action.payload
    }
  },
});

export const { keywordChange, stateChange, prioritiesChange } = filterSlide.actions;

export default filterSlide.reducer;
