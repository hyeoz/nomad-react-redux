// import { createStore } from "redux";
// import { persistStore } from "redux-persist";
// import persistReducer from "redux-persist/lib/persistReducer";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// toolkit 사용
// createAction 으로 type, payload 바로 생성
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

function saveLocal(todos) {
  // setItem 은 하나의 값으로 로컬에 저장함(그냥 쓰면 마지막값만 저장됨)
  localStorage.setItem("TodoItems", JSON.stringify(todos));
  // 다음에서도 props로 todos 넘겨줘야 하기 때문에
  return todos;
}

// export const reducer = (state = [], action) => {
//   // console.log(state, typeof state, "state");
//   // console.log(action, "action data");
//   // console.log(Object.entries(state));
//   switch (action.type) {
//     // case ADD:
//     case addToDo.type:
//       // console.log(action.payload);
//       // const todos = [{text: action.text, id: Date.now()}, ...state]
//       const todos = [{ text: action.payload, id: Date.now() }, ...state];
//       return saveLocal(todos);
//     // case DELETE:
//     case deleteToDo.type:
//       // console.log(action);
//       // const dels = state.filter((todo) => todo.id !== action.id);
//       const dels = state.filter((toDo) => toDo.id !== action.payload);
//       return saveLocal(dels);
//     default:
//       return state;
//   }
// };

// toolkit 사용
// createReducer 는 immer 아래에서 실행되기 때문에 state mutate 가능하게 해줌(새로운 객체로 만들어줄 필요 없음)
// export const reducer = createReducer([{ text: "test", id: 1 }], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); // but state를 nutate 하게되면 return 하지않음
// return saveLocal(state);
//   },
//   [deleteToDo]: (state, action) => {
//     let dels = state.filter((toDo) => toDo.id !== action.payload); // new state 를 return 해야함
//     return saveLocal(dels);
//   },
// });

// toolkit 사용
export const toDo = createSlice({
  name: "todoReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    delete: (state, action) => {
      let dels = state.filter((toDo) => toDo.id !== action.payload);
      return saveLocal(dels);
    },
  },
});

// console.log(toDo.actions);
// toolkit 사용 (actions 자동 생성)
export const addTodo = toDo.actions.add;
export const deleteToDo = toDo.actions.delete;

// export const actionCreators = {
//   addTodo,
//   deleteToDo,
// };
