import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  form: {
    hcpName: '',
    interactionType: 'Meeting',
    date: new Date().toISOString().split('T')[0],
    time: '12:00',
    notes: '',
    topicsDiscussed: '',
    materialsShared: '',
    sentiment: 'Neutral',
    outcome: '',
    followUp: '',
  },
  history: [
    {
      id: 1,
      date: '2026-03-10',
      hcpName: 'Dr. Sarah Wilson',
      type: 'Meeting',
      sentiment: 'Positive',
    },
    {
      id: 2,
      date: '2026-03-11',
      hcpName: 'Dr. James Miller',
      type: 'Call',
      sentiment: 'Neutral',
    }
  ],
};

const interactionSlice = createSlice({
  name: 'interaction',
  initialState,
  reducers: {
    updateFormField: (state, action) => {
      const { field, value } = action.payload;
      state.form[field] = value;
    },
    resetForm: (state) => {
      state.form = initialState.form;
    },
    saveInteraction: (state) => {
      const newInteraction = {
        ...state.form,
        id: Date.now(),
      };
      state.history.unshift(newInteraction);
      state.form = initialState.form;
    },
    deleteInteraction: (state, action) => {
      state.history = state.history.filter(item => item.id !== action.payload);
    },
  },
});

export const { updateFormField, resetForm, saveInteraction, deleteInteraction } = interactionSlice.actions;
export default interactionSlice.reducer;
