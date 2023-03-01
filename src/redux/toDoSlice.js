import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice({
  name: 'toDosList',
  initialState: {
    toDosList: [],
  },
  reducers: {
    addToDo(state, action) {
      state.toDosList.push(action.payload);
    },

    toggleStatusToDo(state, action) {
      for (const toDo of state.toDosList) {
        if (toDo.id === action.payload) {
          toDo.status = !toDo.status;
          break;
        }
      }
    },
  },
});

export const { addToDo, toggleStatusToDo } = toDoSlice.actions;
