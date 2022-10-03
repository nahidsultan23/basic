import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./page1.module.css";
import Page2 from "../page2/page2";
import { fetchValue } from "../../actions/fetchValue.action";
import history from "../../history";

const Page1 = () => {
  const [user, setUser] = useState("");
  const [googleResponse, setGoogleResponse] = useState({});

  useEffect(() => {
    const fetchGoogle = async () => {
      const responseGoogle = await fetchValue();
      setGoogleResponse(responseGoogle);
    };

    fetchGoogle();
    setUser("Nahid");
  }, []);

  useEffect(() => {
    console.log("User set");
  }, [user]);

  if (user === "Nahid") {
    console.log("redirecting");
    history.push("https://google.com");
  }

  return (
    <React.Fragment>
      <div className={style.firstDiv}></div>
      <Page2 user={user} />
      <Link to="/page2">Page 2</Link>
    </React.Fragment>
  );
};

export default Page1;
