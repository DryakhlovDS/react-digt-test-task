import React from "react";
import "./form.scss";

const Form = ({ creatEvent }) => {
  function addEvent(e) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const warning = e.target.querySelector(".event-form__warning");
    const description = input.value;
    if (description.length) {
      if (description.length > 120) {
        warning.textContent = "Описание больше 120 символов!";
        warning.classList.add("event-form__warning_show");
        return;
      } else {
        warning.classList.remove("event-form__warning_show");
      }
      creatEvent(description);
      input.value = "";
    } else {
      warning.textContent = "Введите описание события!";
      warning.classList.add("event-form__warning_show");
    }
  }

  return (
    <form name='addEvent' className='event-form' onSubmit={addEvent}>
      <label>Событие:</label>
      <input
        type='text'
        name='eventName'
        placeholder='Введите описание события (максимум 120 символов)'
      />
      <p className='event-form__warning'></p>
      <button type='submit'> Добавить </button>
    </form>
  );
};

export default Form;
