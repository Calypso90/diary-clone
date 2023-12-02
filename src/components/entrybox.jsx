"use client";
import React, { useState } from "react";

// ✉️

function EntryBox({
  month,
  year,
  day,
  entries,
  setEntries,
  showEntry,
  setShowEntry,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    let message = e.target[0].value;

    let entry = { id: `${month}${day}${year}`, message: message };

    let entriesCopy = entries.map((e) => {
      if (e.id === entry.id) {
        setEntries([...entries]);
      } else {
        setEntries([...entries, entry]);
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="entryBox">
        <label className="label">Dear Diary:</label>
        <textarea
          onChange={(e) => setShowEntry(e.target.value)}
          className="inputBox"
          value={showEntry}
        ></textarea>
        <button className="submitButton">SUBMIT</button>
      </form>
    </div>
  );
}

export default EntryBox;
