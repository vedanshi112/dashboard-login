

import React from "react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { Box } from "@mui/material";

const data = [
  { value: 20 },
  { value: 10 },
  { value: 25 },
  { value: 15 },
  { value: 22 },
  { value: 18 },
];

function TinySmoothChart() {
  return (
    <Box
      sx={{
        width: "240px",
        height: "75px",
        borderRadius: "0 0 12px 12px",
        overflow: "hidden",
        backgroundColor: "#fff",
        marginLeft:'-24px'
        // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="tinyGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f44336" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#f44336" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#f44336"
            fill="url(#tinyGradient)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default TinySmoothChart;
