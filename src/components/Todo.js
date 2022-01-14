import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function Todo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Del</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(ownProps, "ownProps"); // text 와 id를 출력함
  return {
    onBtnClick: () => dispatch(deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(Todo);
