import React from "react";
import { Link } from "react-router-dom";
import style from "./page3.module.css";

const Page3 = () => {
  localStorage.removeItem("user");
  const users = ["Nahid", "Mushfique", "Raju", "Fahad"];
  const renderUsers = users.map((user) => {
    return <li key={user}>{user}</li>;
  });

  return (
    <React.Fragment>
      <div className={style.firstDiv}></div>
      <ul>{renderUsers}</ul>
      <Link to="/">Page 1</Link>
      <Link to="/page2">Page 2</Link>
    </React.Fragment>
  );
};

export default Page3;
