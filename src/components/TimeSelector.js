import React, { useState } from "react";
import styled from "styled-components";

const TimeSelector = ({ selectedTime, setSelectedTime }) => {
  const [intialTime, setIntialTime] = useState([
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ]);

  const changeDate = (time) => {
    setSelectedTime(time);
  };
  return (
    <Title>
      <div className="container">
        {intialTime.map((t) => {
          return (
            <div
              key={t}
              className={`box${t === selectedTime ? " focus-color" : ""}`}
              onClick={() => changeDate(t)}
            >
              {t}
            </div>
          );
        })}
      </div>
    </Title>
  );
};

const Title = styled.h1`
  .container {
    display: flex;
    width: 280px;
    flex-wrap: wrap;
  }

  .box {
    font-size: 1rem;
    border: 1px solid gray;
    margin: 10px;
    padding: 5px;
    width: 60px;
    height: 30px;
    cursor: pointer;
    &:hover {
      background-color: pink;
    }
  }
  .focus-color {
    background-color: #d7939f;
  }
`;

export default TimeSelector;
