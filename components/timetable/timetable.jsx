import React, { useEffect, useState } from "react";
import Day from "./day";
import moment from "moment/moment";
import Lesson from "./lesson";

async function fetchTimetableData() {
  try {
    const response = await fetch("/api/timetable");
    const data = response.json();
    return data;
  } catch (error) {
    console.error("Fehler beim Abrufen des Stundenplans:", error);
  }
}

export function Timetable() {
  const [timetable, setTimetable] = useState([]);
  const [days, setDays] = useState([]);
  let currentDate = moment(moment().startOf("week").add(1, "days"));
  currentDate = moment(currentDate).format("YYYYMMDD");

  useEffect(() => {
    fetchTimetableData().then((res) => {
      setTimetable(res);
    });
  }, []);

  return (
    <div>
  <div className="flex flex-row w-max shadow-md overflow-x:auto mb-4 border justify-center">
    {timetable.slice(0, 5).map((day, index) => (
      <Day key={index} day={index + 1} lessons={day}></Day>
    ))}
  </div>
</div>
  );
}

export default Timetable;
