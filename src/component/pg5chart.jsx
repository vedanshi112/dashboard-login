

import React from "react";
import { Radar, RadarChart, PolarAngleAxis, PolarRadiusAxis, PolarGrid } from "recharts";
import { Box } from "@mui/material";

const data = [
  { subject: "Like", A: 500 },
  { subject: "Share", A: 300 },
  { subject: "Saves", A: 250 },
  { subject: "Comments", A: 180 },
  { subject: "Interactions", A: 150 },
];

 function SmoothCircularRadarChart() {
  return (
    <Box
      sx={{
        width: 330,
        height: 285,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft:'-28px'
      }}
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" width={285} height={285} data={data}>
        {/* 👇 This enables CIRCULAR grid lines instead of polygonal */}
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 600]} />
        <Radar
          name="Activity"
          dataKey="A"
          stroke="#00BFFF"
          fill="#00BFFF"
          fillOpacity={0.5}
          dot
        />
      </RadarChart>
    </Box>
  );
}

export default SmoothCircularRadarChart;
