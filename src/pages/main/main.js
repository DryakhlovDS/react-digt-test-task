import "./main.scss";
import React from "react";
import { Link } from "react-router-dom";
import { EVENTS_ROUTE } from "../../utils/constants";

const Main = () => {
  return (
    <div className='main'>
      <Link to={EVENTS_ROUTE}>
        <button className='main__btn'> События </button>
      </Link>
    </div>
  );
};

export default Main;
