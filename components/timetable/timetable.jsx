import React, {useEffect, useState} from "react";
import Day from "./day";
import moment from "moment/moment";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Lesson from "@/components/timetable/lesson";

export function Timetable() {
    const [timetable, setTimetable] = useState([]);
    const [days, setDays] = useState([]);
    let currentDate = moment(moment().startOf('week').add(1, 'days'));
    currentDate = moment(currentDate).format('YYYYMMDD');

    useEffect(() => {
        fetch("http://localhost:8084/timetable").then((res) => res.json()).then((lessons) => {
            setTimetable(lessons);
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
