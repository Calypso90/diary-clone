"use client";

function Month({ month, setMonth }) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function monthIncrement() {
    if (month < 11) {
      setMonth(month + 1);
    }
  }

  function monthDecrement() {
    if (month > 0) {
      setMonth(month - 1);
    }
  }

  return (
    <div>
      <button onClick={monthDecrement} className="selector">
        ⬅️
      </button>
      <span className="date">{months[month]}</span>
      <button onClick={monthIncrement} className="selector">
        ➡️
      </button>
    </div>
  );
}

export default Month;
