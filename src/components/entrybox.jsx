"use client";
import React, { useState } from "react";

function EntryBox({
  month,
  year,
  day,
  entries,
  setEntries,
  showEntry,
  setShowEntry,
  submitted,
  setSubmitted,
}) {
  //creates an object after submission and adds it to entries array
  function handleSubmit(e) {
    e.preventDefault();
    let message = e.target[0].value;

    setSubmitted(true);

    let entry = { day: day, month: month, year: year, message: message };

    entries.map((e) => {
      if (
        e.day === entry.day &&
        e.month === entry.month &&
        e.year === entry.year
      ) {
        setEntries([...entries]);
      } else {
        setEntries([...entries, entry]);
      }
    });
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="entryBox">
        <label className="label">Dear Diary:</label>
        <textarea
          onChange={(e) => setShowEntry(e.target.value)}
          className="inputBox"
          value={showEntry}
        ></textarea>
        <button className={submitted ? "hiddenButton" : "submitButton"}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default EntryBox;
