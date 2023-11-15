import React from "react";

function Lesson({ lessonData }) {
  return (
    <div className="grid grid-cols-2 gap-y-4 gap-x-[4.5rem] mb-2 border-b border-gray-200 p-2">
      <div className="font-medium text-gray-800">{lessonData.klasse}</div>
      <div className="text-gray-600">{lessonData.teacher}</div>
      <div className="text-gray-600">{lessonData.subject}</div>
      <div className="text-gray-600">{lessonData.room}</div>
    </div>
    
  );
}

export default Lesson;
