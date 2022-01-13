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

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

function saveLocal(todos) {
  // setItem 은 하나의 값으로 로컬에 저장함(그냥 쓰면 마지막값만 저장됨)
  localStorage.setItem("TodoItems", JSON.stringify(todos));
  // 다음에서도 props로 todos 넘겨줘야 하기 때문에
  return todos;
}

export const reducer = (state = [], action) => {
  // console.log(state, typeof state, "state");
  // console.log(action, "action data");
  // console.log(Object.entries(state));
  switch (action.type) {
    case ADD:
      const todos = [{ text: action.text, id: Date.now() }, ...state];
      return saveLocal(todos);
    case DELETE:
      const dels = state.filter((toDo) => toDo.id !== action.id);
      return saveLocal(dels);
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo,
};
