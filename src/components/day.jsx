"use client";
import React, { useState } from "react";

function Day({ month, year, day, setDay, entries, setShowEntry }) {
  let days = [
    { id: 1, date: "1" },
    { id: 2, date: "2" },
    { id: 3, date: "3" },
    { id: 4, date: "4" },
    { id: 5, date: "5" },
    { id: 6, date: "6" },
    { id: 7, date: "7" },
    { id: 8, date: "8" },
    { id: 9, date: "9" },
    { id: 10, date: "10" },
    { id: 11, date: "11" },
    { id: 12, date: "12" },
    { id: 13, date: "13" },
    { id: 14, date: "14" },
    { id: 15, date: "15" },
    { id: 16, date: "16" },
    { id: 17, date: "17" },
    { id: 18, date: "18" },
    { id: 19, date: "19" },
    { id: 20, date: "20" },
    { id: 21, date: "21" },
    { id: 22, date: "22" },
    { id: 23, date: "23" },
    { id: 24, date: "24" },
    { id: 25, date: "25" },
    { id: 26, date: "26" },
    { id: 27, date: "27" },
    { id: 28, date: "28" },
    { id: 29, date: "29" },
    { id: 30, date: "30" },
    { id: 31, date: "31" },
  ];
  let allDays = [];

  if (
    month === 1 &&
    ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
  ) {
    allDays = days.filter((d) => d.id !== 30 && d.id != 31);
  } else if (month === 1) {
    allDays = days.filter((d) => d.id !== 29 && d.id !== 30 && d.id != 31);
  } else if (month === 3 || month === 5 || month === 8 || month === 10) {
    allDays = days.filter((d) => d.id != 31);
  } else {
    allDays = days;
  }

  function handleClick(e) {
    let changeDay = +e.target.textContent;
    setDay(changeDay);

    let parentArray = e.target.parentElement.children;

    for (let i = 0; i < parentArray.length; i++) {
      if (parentArray[i].className === "selected-day-box") {
        e.target.parentElement.children[i].className = "day-box";
      }
    }
    e.target.className = "selected-day-box";

    for (let i = 0; i < entries.length; i++) {
      if (entries[i].id === `${month}${day}${year}`) {
        setShowEntry(entries[i].message);
        break;
      } else {
        setShowEntry("");
      }
    }
  }

  return (
    <div>
      <div id="calendar">
        {allDays.map((d) => {
          return (
            <div
              onClick={handleClick}
              className={d.id !== day ? "day-box" : "selected-day-box"}
              key={d.id}
            >
              {d.date}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Day;
