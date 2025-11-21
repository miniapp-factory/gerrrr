"use client";

import { useMemo } from "react";

interface DayOfWeekProps {
  month: number; // 1-12
  year: number;
}

export default function DayOfWeek({ month, year }: DayOfWeekProps) {
  const daysInMonth = useMemo(() => {
    const date = new Date(year, month, 0);
    return date.getDate();
  }, [month, year]);

  const firstDay = useMemo(() => {
    const date = new Date(year, month - 1, 1);
    return date.getDay(); // 0 (Sun) - 6 (Sat)
  }, [month, year]);

  const weeks: number[][] = [];
  let day = 1;
  for (let w = 0; w < 6; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      if (w === 0 && d < firstDay) {
        week.push(0);
      } else if (day <= daysInMonth) {
        week.push(day++);
      } else {
        week.push(0);
      }
    }
    weeks.push(week);
  }

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-2">
        {month}/{year}
      </h2>
      <table className="border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            {dayNames.map((name) => (
              <th key={name} className="border border-gray-300 px-2 py-1 bg-gray-100">
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((d, j) => (
                <td
                  key={j}
                  className="border border-gray-300 px-2 py-1 text-center"
                >
                  {d !== 0 ? d : ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
