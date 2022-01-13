import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
// import { useParams } from "react-router";

function Detail({ todos }) {
  const id = useParams();
  // console.log(id.id);
  const todoText = todos.find((todo) => todo.id === parseInt(id.id));
  // console.log(todoText.text);
  return (
    <>
      <h1>{todoText ? todoText.text : "잘못된 접근입니다."}</h1>
      <h5>Created By : {todoText ? todoText.id : ""}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  // @6 버전 이전
  // console.log(ownProps); // 이거 찍으면 match, history, params 나오는데 @6부터는 사용하지 않기 때문에 그냥 useParams 사용하기로
  // const {
  //   match: {
  //     params: {id}
  //   }
  // } = ownProps;

  // console.log(state);
  return { todos: state };
}

export default connect(mapStateToProps, null)(Detail);
