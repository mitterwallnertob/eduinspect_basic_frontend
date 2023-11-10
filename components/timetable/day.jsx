import React from "react";
import moment from "moment";
import Lesson from "./lesson";

function Day(props) {
  let currentDate = moment(
    moment()
      .startOf("week")
      .add(0 + props.day, "days")
  );

  let weekDayNameFirst2 = moment(currentDate).format("dddd").substring(0, 2);

  currentDate = moment(currentDate).format("DD.MM.");
  let lessons = props.lessons;

  return (
    <div className="hover:bg-gray-200">
      <div className="flex justify-center items-center bg-gray-800 text-gray-300 px-4 py-2 border-b border-gray-200">
        <h4 className="text-lg font-medium">
        {weekDayNameFirst2}. {currentDate}
        </h4>
      </div>

      <div className="mt-4 mx-20">
        {/*
        if (Lesson key={index} lessonData={startTime} === Lesson key={index+1} lessonData={startTime}) {

        }
        */}
        {lessons &&
        Array.isArray(lessons) &&
        lessons.length > 0 &&
        lessons[0] !== "empty" ? (
          lessons.map((lesson, index) => (
            <Lesson key={index} lessonData={lesson} />
          ))
        ) : (
          <p className="mt-10">No lessons for this day</p>
        )}
      </div>
    </div>
  );
}

export default Day;
