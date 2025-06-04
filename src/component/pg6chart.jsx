

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Box } from "@mui/material";

const data = [
  { name: "w-1", value: 100 },
  { name: "w-2", value: 80 },
  { name: "w-3", value: 130 },
  { name: "w-4", value: 130 },
  { name: "w-5", value: 180 },
  { name: "w-6", value: 260 }, // 🔵 Highlighted blue bar
  { name: "w-7", value: 160 },
  { name: "w-8", value: 210 },
  { name: "w-9", value: 170 },
];

 function CustomBarChart() {
  return (
    <Box sx={{ width: "686px", height: "320px",marginLeft:'-22px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fill: "#333" }} />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="value"
            radius={[6, 6, 0, 0]}
            barSize={30} // 📏 Bar width set here
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 5 ? "#6495FF" : "#A0A0A0"} // 🔵 w-6 = blue, others = gray
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}


export default CustomBarChart;
