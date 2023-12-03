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
  const [dayArray, setDayArray] = useState([
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
  ]);
  const [entries, setEntries] = useState([{ day: -1, month: -1, year: -1 }]);
  const [showEntry, setShowEntry] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
            dayArray={dayArray}
            entries={entries}
            setShowEntry={setShowEntry}
            submitted={submitted}
            setSubmitted={setSubmitted}
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
            submitted={submitted}
            setSubmitted={setSubmitted}
          />
        </div>
      </div>
    </main>
  );
}
