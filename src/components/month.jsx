"use client";

function Month({ month, setMonth }) {
  // array of months uses month value to pull index value for return
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

  // increments value of month
  function monthIncrement() {
    if (month < 11) {
      setMonth(month + 1);
    }
  }

  // decrements value of month
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
