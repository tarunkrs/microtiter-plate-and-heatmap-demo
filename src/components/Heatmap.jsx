import React from "react";
import { Box } from "@mui/material";
import TooltipComponent from "./Tooltip";
import uniqueID from "../utils/utils";

const Heatmap = ({ data, metric }) => {
  const cellSize = 20;
  const colorScale = (value) => {
    // Assining some random value if value is not a number
    if (isNaN(value)) value = Math.floor(Math.random() * 11);
    const hue = (1 - value) * 440;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <Box
      justifyContent="flex-start"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(48, 20px)",
        gridGap: "4px",
      }}
    >
      {data.map((well, index) => (
        <TooltipComponent
          rows={well}
          selectedMetric={metric}
          width={cellSize}
          key={uniqueID()}
          content={
            <Box
              style={{
                display: "inline-block",
                width: cellSize,
                height: cellSize,
                backgroundColor: colorScale(parseFloat(well[metric])),
              }}
            ></Box>
          }
        ></TooltipComponent>
      ))}
    </Box>
  );
};

export default Heatmap;
