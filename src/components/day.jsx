"use client";
import React, { useState, useEffect } from "react";

// ✉️

function Day({
  month,
  year,
  day,
  setDay,
  dayArray,
  entries,
  setShowEntry,
  submitted,
  setSubmitted,
}) {
  let days = dayArray;
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
    let changeDay = "";
    if (e.target.textContent.includes("✉️")) {
      changeDay = e.target.textContent.slice(1);
      setDay(Number(changeDay));
    } else {
      changeDay = e.target.textContent;
      setDay(Number(changeDay));
    }

    let parentArray = e.target.parentElement.children;

    for (let i = 0; i < parentArray.length; i++) {
      if (parentArray[i].className === "selected-day-box") {
        e.target.parentElement.children[i].className = "day-box";
      }
    }
    e.target.className = "selected-day-box";

    for (let i = 0; i < entries.length; i++) {
      if (
        entries[i].day === day &&
        entries[i].month === month &&
        entries[i].year === year
      ) {
        setShowEntry(entries[i].message);
        break;
      } else {
        setShowEntry("");
      }
    }
  }

  useEffect(() => {
    for (let i = 0; i < entries.length; i++) {
      if (
        entries[i].day === day &&
        entries[i].month === month &&
        entries[i].year === year
      ) {
        setShowEntry(entries[i].message);
        setSubmitted(true);
        break;
      } else {
        setShowEntry("");
        setSubmitted(false);
      }
    }
  }, [day]);

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
              {entries.some(
                (object) =>
                  object.day === d.id &&
                  object.month === month &&
                  object.year === year &&
                  object.message !== null
              )
                ? "✉️"
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Day;
