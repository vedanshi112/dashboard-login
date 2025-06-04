
// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';

// const data = [
//   { value: 80, label: 'A' },
//   { value: 20, label: 'B' },
//   { value: 15, label: 'C' },
//   { value: 20, label: 'D' },
// ];

// const size = {
//   width: 200,
//   height: 200,
// };

// const StyledText = styled('text')(({ theme }) => ({
//   fill: theme.palette.text.primary,
//   textAnchor: 'middle',
//   dominantBaseline: 'central',
//   fontSize: 20,
// }));

// function PieCenterLabel({ children }) {
//   const { width, height, left, top } = useDrawingArea();
//   return (
//     <StyledText x={left + width / 2} y={top + height / 2}>
//       {children}
//     </StyledText>
//   );
// }

//  function PieChartWithCenterLabel() {
//   return (
//     <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
//       <PieCenterLabel></PieCenterLabel>
//     </PieChart>
//   );
// }

// export default PieChartWithCenterLabel;

import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
  { value: 80, label: 'Completed', color: '#6A9EFF' },  // blue (same as image)
  { value: 20, label: 'Active', color: '#B3C1D1' },      // light gray (same as image)
];

const size = {
  width: 200,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
}

function PieChartWithCenterLabel() {
  return (
    <PieChart
      series={[{
        data,
        innerRadius: 70,
        outerRadius: 100,
        cornerRadius: 5,
      }]}
      {...size}
    >
      <PieCenterLabel />
    </PieChart>
  );
}

export default PieChartWithCenterLabel;

