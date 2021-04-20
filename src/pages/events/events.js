import React, { useState } from "react";
import "./events.scss";

import Form from "../../components/form/form";
import Table from "../../components/table/table";
const Events = () => {
  const [events, changeEvents] = useState([
    { date: "23.03.2021", description: "test description" },
    { date: "01.04.2021", description: "joker`s day" },
  ]);
  const creatEvent = (description) => {
    const today = new Date();
    let date = today.getDate() + 7;
    date = new Date(today.setDate(date));
    const day =
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    const newEvent = {
      date: `${day}.${month}.${date.getFullYear()}`,
      description,
    };
    console.log(newEvent);
    changeEvents([newEvent, ...events]);
  };
  return (
    <div className='events'>
      <Form creatEvent={creatEvent} />
      <button className='events__btn' onClick={() => changeEvents([])}>
        Очистить таблицу
      </button>
      <Table events={events} />
    </div>
  );
};

export default Events;
