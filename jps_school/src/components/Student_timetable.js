import React, { useState } from "react";
import "./Student_timetable.css";

// Timetable data for standards 1 to 12
const allTimetables = {
  1: [
    { day: "Monday", subjects: ["Math", "English", "Drawing", "Story", "Break", "Activity"] },
    { day: "Tuesday", subjects: ["English", "Math", "Play", "EVS", "Break", "Music"] },
    { day: "Wednesday", subjects: ["EVS", "Math", "Drawing", "Rhymes", "Break", "PE"] },
    { day: "Thursday", subjects: ["Play", "English", "Math", "Activity", "Break", "Story"] },
    { day: "Friday", subjects: ["Math", "EVS", "Rhymes", "Break", "PE", "Music"] },
  ],
  2: [
    { day: "Monday", subjects: ["Math", "English", "EVS", "Story", "Break", "Drawing"] },
    { day: "Tuesday", subjects: ["English", "Math", "EVS", "Music", "Break", "PE"] },
    { day: "Wednesday", subjects: ["EVS", "Math", "Drawing", "Rhymes", "Break", "PE"] },
    { day: "Thursday", subjects: ["English", "Math", "Activity", "Break", "Story", "Music"] },
    { day: "Friday", subjects: ["Math", "EVS", "Rhymes", "Break", "Music", "PE"] },
  ],
  3: [
    { day: "Monday", subjects: ["Math", "English", "Science", "Social", "Break", "Activity"] },
    { day: "Tuesday", subjects: ["English", "Math", "Science", "Computer", "Break", "Art"] },
    { day: "Wednesday", subjects: ["Science", "Math", "Social", "English", "Break", "Music"] },
    { day: "Thursday", subjects: ["Social", "English", "Math", "Science", "Break", "Drama"] },
    { day: "Friday", subjects: ["Math", "Science", "English", "Break", "PE", "Music"] },
  ],
  4: [
    { day: "Monday", subjects: ["English", "Math", "Science", "History", "Break", "PE"] },
    { day: "Tuesday", subjects: ["Math", "Science", "English", "Computer", "Break", "Art"] },
    { day: "Wednesday", subjects: ["Science", "Math", "Social", "English", "Break", "Sports"] },
    { day: "Thursday", subjects: ["Social", "English", "Math", "Science", "Break", "Music"] },
    { day: "Friday", subjects: ["Math", "Science", "English", "Break", "Activity", "Drama"] },
  ],
  5: [
    { day: "Monday", subjects: ["English", "Math", "History", "Geography", "Break", "Science"] },
    { day: "Tuesday", subjects: ["Math", "Science", "Computer", "History", "Break", "Art"] },
    { day: "Wednesday", subjects: ["Science", "Math", "English", "Geography", "Break", "Sports"] },
    { day: "Thursday", subjects: ["Social", "English", "Math", "Science", "Break", "Drama"] },
    { day: "Friday", subjects: ["Math", "Science", "English", "Break", "PE", "Music"] },
  ],
  6: [
    { day: "Monday", subjects: ["Math", "English", "Physics", "History", "Break", "Chemistry"] },
    { day: "Tuesday", subjects: ["English", "Math", "Geography", "Physics", "Break", "Art"] },
    { day: "Wednesday", subjects: ["Chemistry", "Math", "Social", "English", "Break", "Sports"] },
    { day: "Thursday", subjects: ["Physics", "English", "Math", "Science", "Break", "Drama"] },
    { day: "Friday", subjects: ["Math", "Science", "English", "Break", "PE", "Music"] },
  ],

  7: [
    { day: "Monday", subjects: ["Math", "English", "Biology", "History", "Break", "Physics"] },
    { day: "Tuesday", subjects: ["English", "Math", "Geography", "Chemistry", "Break", "Art"] },
    { day: "Wednesday", subjects: ["Physics", "Math", "Social", "English", "Break", "PE"] },
    { day: "Thursday", subjects: ["Biology", "English", "Math", "Science", "Break", "Drama"] },
    { day: "Friday", subjects: ["Math", "Science", "English", "Break", "Sports", "Music"] },
],

8: [
    { day: "Monday", subjects: ["English", "Math", "Physics", "History", "Break", "Chemistry"] },
    { day: "Tuesday", subjects: ["Math", "Science", "Geography", "English", "Break", "Music"] },
    { day: "Wednesday", subjects: ["Chemistry", "Math", "Biology", "English", "Break", "PE"] },
    { day: "Thursday", subjects: ["Physics", "English", "Math", "Science", "Break", "Art"] },
    { day: "Friday", subjects: ["Math", "History", "English", "Break", "Drama", "Computer"] },
],

9: [
    { day: "Monday", subjects: ["Math", "Physics", "Chemistry", "History", "Break", "Biology"] },
    { day: "Tuesday", subjects: ["English", "Math", "Geography", "Physics", "Break", "Computer"] },
    { day: "Wednesday", subjects: ["Chemistry", "Math", "Social", "English", "Break", "Music"] },
    { day: "Thursday", subjects: ["Physics", "English", "Math", "Science", "Break", "Sports"] },
    { day: "Friday", subjects: ["Math", "Science", "English", "Break", "PE", "Economics"] },
],

10: [
    { day: "Monday", subjects: ["Math", "English", "Physics", "Chemistry", "Break", "Biology"] },
    { day: "Tuesday", subjects: ["English", "Math", "Computer", "History", "Break", "Economics"] },
    { day: "Wednesday", subjects: ["Physics", "Chemistry", "Math", "English", "Break", "PE"] },
    { day: "Thursday", subjects: ["Biology", "Math", "Geography", "Economics", "Break", "Drama"] },
    { day: "Friday", subjects: ["Math", "English", "Chemistry", "Physics", "Break", "Music"] },
],

11: [
    { day: "Monday", subjects: ["Math", "English", "Physics", "Chemistry", "Break", "Computer Science"] },
    { day: "Tuesday", subjects: ["English", "Math", "Biology", "History", "Break", "Economics"] },
    { day: "Wednesday", subjects: ["Physics", "Chemistry", "Math", "English", "Break", "PE"] },
    { day: "Thursday", subjects: ["Biology", "Math", "Accounts", "Economics", "Break", "Business Studies"] },
    { day: "Friday", subjects: ["Math", "English", "Chemistry", "Physics", "Break", "Sports"] },
],


  12: [
    { day: "Monday", subjects: ["Math", "English", "Physics", "Chemistry", "Break", "Biology"] },
    { day: "Tuesday", subjects: ["English", "Math", "Computer", "History", "Break", "Geography"] },
    { day: "Wednesday", subjects: ["Physics", "Chemistry", "Math", "English", "Break", "PE"] },
    { day: "Thursday", subjects: ["Biology", "Math", "Economics", "Accounts", "Break", "Drama"] },
    { day: "Friday", subjects: ["Math", "English", "Chemistry", "Physics", "Break", "Sports"] },
  ],
};

const Timetable = () => {
  const [selectedStandard, setSelectedStandard] = useState(1);

  return (
    <div className="timetable-container">
      <div className="timetable-header">
        <select className="standard-dropdown" onChange={(e) => setSelectedStandard(Number(e.target.value))} value={selectedStandard}>
          {[...Array(12)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Standard {index + 1}
            </option>
          ))}
        </select>
        <h2>JPS School Timetable</h2>
      </div>

      <table className="timetable">
        <thead>
          <tr>
            <th>Day</th>
            <th>8:00 - 9:00</th>
            <th>9:00 - 10:00</th>
            <th>10:00 - 11:00</th>
            <th>11:00 - 12:00</th>
            <th>12:00 - 1:00</th>
            <th>1:00 - 2:00</th>
          </tr>
        </thead>
        <tbody>
          {allTimetables[selectedStandard]?.map((row, index) => (
            <tr key={index}>
              <td>{row.day}</td>
              {row.subjects.map((subject, subIndex) => (
                <td key={subIndex}>{subject}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
