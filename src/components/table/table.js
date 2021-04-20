import React from "react";
import "./table.scss";

function Row({ text, date, classMode }) {
  return (
    <tr className={classMode}>
      <td>{date}</td>
      <td>{text}</td>
    </tr>
  );
}

const Table = ({ events }) => {
  const rows = events.map((row, index) => {
    let date = row.date;
    date = `${date[3] + date[4]}.${date[0] + date[1]}.${
      date[6] + date[7] + date[8] + date[9]
    }`;
    const hasDate = new Date(date);
    const today = new Date();

    const already = hasDate < today ? " table-events__row_already" : "";
    const style = "table-events__row" + already;
    return (
      <Row
        key={index}
        text={row.description}
        date={row.date}
        classMode={style}
      />
    );
  });
  return (
    <table className='table-events'>
      <thead>
        <Row
          text={"Описание события"}
          date={"Дата"}
          classMode='table-events__head'
        />
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
