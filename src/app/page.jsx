"use client";
import React, { useState } from "react";
import Day from "@/components/day.jsx";
import Month from "@/components/month.jsx";
import Year from "@/components/year.jsx";
import EntryBox from "@/components/entrybox.jsx";

export default function Home() {
  let currentMonth = new Date().getMonth();
  let currentYear = new Date().getFullYear();
  let currentDate = new Date().getDate();
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [day, setDay] = useState(currentDate);
  const [entries, setEntries] = useState([{ id: 0 }]);
  const [showEntry, setShowEntry] = useState("");

  console.log(entries);
  return (
    <main>
      <div>
        <h1 id="title">My Diary</h1>
        <div id="date-container">
          <Month month={month} setMonth={setMonth} />
          <Year year={year} setYear={setYear} />
          <Day
            month={month}
            year={year}
            day={day}
            setDay={setDay}
            entries={entries}
            setShowEntry={setShowEntry}
          />
          <br />
          <EntryBox
            month={month}
            year={year}
            day={day}
            entries={entries}
            setEntries={setEntries}
            showEntry={showEntry}
            setShowEntry={setShowEntry}
          />
        </div>
      </div>
    </main>
  );
}
