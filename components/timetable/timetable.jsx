import React, {useEffect, useState} from "react";
import Day from "./day";
import moment from "moment/moment";
import Lesson from "./lesson";

async function fetchTimetableData() {
    try {
      const response = await fetch('/api/timetable');
      const data = response.json();
      return data;
    } catch (error) {
      console.error('Fehler beim Abrufen des Stundenplans:', error);
    }
  }

export function Timetable() {
    const [timetable, setTimetable] = useState([]);
    const [days, setDays] = useState([]);
    let currentDate = moment(moment().startOf('week').add(1, 'days'));
    currentDate = moment(currentDate).format('YYYYMMDD');


    useEffect(() => {
        fetchTimetableData().then((res) => {
            setTimetable(res);
        })
    }, []);


    return (
        <div className={"flex-wrap"}>
            <div>
                <Day day={1} lessons={timetable[0]}></Day>
            </div>
            <div><Day day={2} lessons={timetable[1]}></Day></div>
            <Day day={3} lessons={timetable[2]}></Day>
            <Day day={4} lessons={timetable[3]}></Day>
            <Day day={5} lessons={timetable[4]}></Day>
        </div>
    )
}

export default Timetable;