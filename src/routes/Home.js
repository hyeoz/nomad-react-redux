import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { actionCreators } from "../store";

function Home({ todos, addToDo }) {
  // console.log(Object.entries(todos));
  const items = JSON.parse(localStorage.getItem("TodoItems"));
  // console.log(todos.length, typeof todos, "todos data");
  // console.log(items, "items data");
  if (todos.length === 0) {
    // console.log("-------");
    // localstorage 에 있는 items todos와 합쳐주기
    todos = todos.concat(items);
  }

  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(todos);
    setText("");
    // dispatch(addToDo({text}))
    addToDo(text);
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {/* {todosArr.map((todo) => { */}
        {todos
          ? todos.map((todo) => {
              // console.log(todoEl[1]);
              // const todo = todoEl[1];
              return <Todo {...todo} key={todo.id} />;
            })
          : items.map((el) => {
              // todos 없을땐 localstorage 에 있는 itema 만 보여주기
              return <Todo {...el} key={el.id} />;
            })}
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state, ownProps);
  return { todos: state };
};
const mapDispatchToProps = (dispatch) => {
  // console.log(dispatch, ownProps);
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
};

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
