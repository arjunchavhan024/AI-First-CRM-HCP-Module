import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  messages: [
    {
      id: 1,
      type: 'ai',
      text: 'Log interaction details here (e.g., "Met Dr. Smith, discussed Prodo-X efficacy, positive sentiment, shared brochure") or ask for help.',
      timestamp: new Date().toISOString(),
    }
  ],
  isTyping: false,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push({
        ...action.payload,
        id: Date.now(),
        timestamp: new Date().toISOString(),
      });
    },
    setIsTyping: (state, action) => {
      state.isTyping = action.payload;
    },
    clearChat: (state) => {
      state.messages = initialState.messages;
    },
  },
});

export const { addMessage, setIsTyping, clearChat } = chatSlice.actions;
export default chatSlice.reducer;
