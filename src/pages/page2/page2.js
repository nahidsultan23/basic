import React from "react";
import { Link } from "react-router-dom";
import style from "./page2.module.css";

const Page2 = (props) => {
  return (
    <React.Fragment>
      <div className={style.firstDiv}></div>
      {props && props.user && <div>User: {props.user}</div>}
      <Link to="/">Page 1</Link>
    </React.Fragment>
  );
};

export default Page2;
