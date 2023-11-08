import React from 'react';
import moment from "moment";
import Lesson from "./lesson";

function Day(props) {

    let currentDate = moment(moment().startOf('week').add(0 + props.day, 'days'));

    let weekDayNameFirst2 = moment(currentDate).format("dddd").substring(0, 2);

    currentDate = moment(currentDate).format("DD.MM.");
    let lessons = props.lessons;

    return (
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
            <div>
                <div>
                    <div>
                        <text>{weekDayNameFirst2}. {currentDate}</text>
                        {lessons && Array.isArray(lessons) && lessons.length > 0 && lessons[0] !== "empty" ? (
                            lessons.map((lesson, index) => (
                                <Lesson key={index} lessonData={lesson}></Lesson>
                            ))
                        ) : (
                            <p>No lessons for this day</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Day;