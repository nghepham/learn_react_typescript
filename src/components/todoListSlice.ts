import { TodoProps } from './Todo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

export interface TodoListState {
  todoList: Array<TodoProps>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: TodoListState = {
  todoList: [],
  status: 'idle',
};

export const todoListSlide = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.todoList.unshift(action.payload);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const currentTodo = state.todoList.find(e => e.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    }
  },
});

export const { addTodo, toggleStatus } = todoListSlide.actions;

export const selectTodoList = (state: RootState) => {
  const todoList = state.todoList.todoList;
  const { keyword, status, priorities } = state.filters;

  return todoList.filter(item => {
    if (status === 'All') {
      return priorities.length
        ? item.name.includes(keyword) && priorities.includes(item.priority)
        : item.name.includes(keyword)
    }

    return item.name.includes(keyword) &&
      (status === 'Completed' ? item.completed : !item.completed) &&
      (priorities.length ? priorities.includes(item.priority) : true)
  });
};

export default todoListSlide.reducer;
