"use client";

function Year({ year, setYear }) {
  // increments value of year
  function yearIncrement() {
    setYear(year + 1);
  }

  // decrements value of month
  function yearDecrement() {
    if (year > 1) {
      setYear(year - 1);
    }
  }

  return (
    <div>
      <button onClick={yearDecrement} className="selector">
        ⬅️
      </button>
      <span className="date">{year}</span>
      <button onClick={yearIncrement} className="selector">
        ➡️
      </button>
    </div>
  );
}

export default Year;
