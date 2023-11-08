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

/*
        <table className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
            <thead>
                <tr className='bg-gray-800 text-white'>
                    <th>{weekDayNameFirst2}. {currentDate}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{lessons && Array.isArray(lessons) && lessons.length > 0 ? (
                        lessons.map((lesson, index) => (
                            <Lesson key={index} lessonData={lesson}></Lesson>
                        ))
                    ) : (
                        <p>No lessons for this day</p>
                    )}</td>
                </tr>
            </tbody>
        </table>
*/
    /*
        <div>
            <div>
                <text>{weekDayNameFirst2}. {currentDate}</text>
                {lessons && Array.isArray(lessons) && lessons.length > 0 ? (
                    lessons.map((lesson, index) => (
                        <Lesson key={index} lessonData={lesson}></Lesson>
                    ))
                ) : (
                    <p>No lessons for this day</p>
                )}
            </div>
        </div>
        */
    )
}

export default Day;
