import React from "react";
import { Box } from "@mui/material";
import TooltipComponent from "./Tooltip";
import uniqueID from "../utils/utils";

const Heatmap = ({ data, metric }) => {
  const cellSize = 20;

  /**
   * Generates an HSL color based on a given numeric value.
   *
   * @function colorScale
   * @param {number} value - The input value used to calculate the color.
   * @returns {string} The HSL color string corresponding to the input value.
   * 
   */

  const colorScale = (value) => {
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
