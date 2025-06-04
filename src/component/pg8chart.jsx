

import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { time: "12am", value: 60 },
  { time: "6am", value: 20 },
  { time: "8am", value: 50 },
  { time: "11am", value: 90 },
  { time: "3pm", value: 70 },
  { time: "7pm", value: 65 },
  { time: "10pm", value: 25 },
];

 function TimeChart() {
  return (
    <div style={{ width: "300px", height: "340px", marginLeft:'-24px', marginTop:'-15px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="time" />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="value"
            fill="#4285f4"
            radius={[10, 10, 0, 0]}
            barSize={15}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TimeChart;
