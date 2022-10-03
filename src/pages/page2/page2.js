import React from "react";
import style from "./page2.module.css";

const Page2 = (props) => {
  return (
    <React.Fragment>
      <div className={style.firstDiv}></div>
      {props && props.user && <div>User: {props.user}</div>}
    </React.Fragment>
  );
};

export default Page2;
