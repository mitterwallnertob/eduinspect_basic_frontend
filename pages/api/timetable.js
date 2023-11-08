import { WebUntis } from "webuntis";
import moment from "moment";

require("dotenv").config();

const untis = new WebUntis(
  "htbla_wels",
  "punr",
  "1Antonia2",
  "hypate.webuntis.com"
);

await untis.login();

const timetableHandler = async (req, res) => {
  try {
    // Schritt 1: Stundenplandaten von WebUntis abrufen
    const startDate = moment().startOf("week").add(1, "days").toDate();
    const endDate = moment().startOf("week").add(5, "days").toDate();
    const timetable = await untis.getOwnTimetableForRange(startDate, endDate);

    const groupedData = {};

    for (const item of timetable) {
        const date = item.date;

        if (!groupedData[date]) {
            groupedData[date] = [];
        }

        groupedData[date].push(item);
    }

    // Sortieren Sie die Stunden im inneren Array nach der Startzeit
    for (const date in groupedData) {
        groupedData[date].sort((a, b) => a.startTime - b.startTime);
    }

    // Die verschachtelten Daten in einem Array speichern
    const sortedData = Object.keys(groupedData)
        .sort((a, b) => a - b)
        .map(date => groupedData[date]);

        const sortedDataImportant = sortedData.map(days => {
          return days.map(lessons => ({
              date: lessons.date,
              startTime: lessons.startTime,
              endTime: lessons.endTime,
              subject: lessons.su[0].name,
              teacher: lessons.te[0].name,
              klasse: lessons.kl[0].name,
              room: lessons.kl[0].name
          }));
      });

    
    // Schritt 3: Transformierte Daten senden
    console.log(sortedDataImportant);
    const updatedSchedule = [];

    const daysOfWeek = [1, 2, 3, 4, 5]; // 1 for Monday, 2 for Tuesday, etc.

    // Iterate over the teacher's schedule
    for (let i = 0; i < daysOfWeek.length; i++) {
      updatedSchedule.push(sortedDataImportant[i]); // Add the current day's lessons

      if (i < sortedDataImportant.length - 1) {
        // Calculate the date difference with the next day
        const currentDate = moment(sortedDataImportant[i][0].date, "YYYYMMDD");
        const nextDate = moment(sortedDataImportant[i + 1][0].date, "YYYYMMDD");
        const dateDifference = nextDate.diff(currentDate, "days");

        // Insert empty arrays for missing days
        for (let j = 1; j < dateDifference; j++) {
          updatedSchedule.push(["empty"]); // Insert empty array for missing days
        }
      }
    }
    console.log("Successfull sent");
    res.json(updatedSchedule);
  } catch (error) {
    console.error(
      "Fehler beim Abrufen, Transformieren oder Senden des Stundenplans:",
      error
    );
    res.status(500).json({ error: "Internal server error" });
  }
  /*
  finally {
    await untis.logout();
  }
  */
}

export default timetableHandler;
