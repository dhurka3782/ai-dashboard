import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice';
import aiReducer from '../features/ai/aiSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    ai: aiReducer,
  },
});
