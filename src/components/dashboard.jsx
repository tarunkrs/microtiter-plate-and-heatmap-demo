import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import DataLoader from "./DataLoader";
import Heatmap from "./Heatmap";
import MetricSelector from "./MetricSelector";

export default function Dashboard() {
  const [data, setData] = useState([]); // Storing the CSV data after parsing.
  const [metrics, setMetrics] = useState([]); // Storing the metrics
  const [selectedMetric, setSelectedMetric] = useState(""); // Storing the selected metrics. By default first. 

  const handleDataLoad = (parsedData) => {
    setData(parsedData); 
    if (parsedData.length > 0) {
      setMetrics(Object.keys(parsedData[0]));
      setSelectedMetric(Object.keys(parsedData[0])[0]);
    }
  };

  return (
    <Container>
      <Typography sx={{ m: 4, ml: 2 }} variant="h5" gutterBottom>
        1536-well Microtiter Plate & Heatmap
      </Typography>
      <Box justifyContent="flex-start" sx={{ m: 2 }}>
        <DataLoader onDataLoad={handleDataLoad} />
      </Box>

      {data.length > 0 && (
        <>
          <Box justifyContent="flex-start" sx={{ m: 2 }}>
            <MetricSelector
              metrics={metrics}
              selectedMetric={selectedMetric}
              onSelectMetric={setSelectedMetric}
            />
          </Box>

          <Box justifyContent="flex-start" sx={{ m: 2 }}>
            <Heatmap data={data} metric={selectedMetric} />
          </Box>
        </>
      )}
    </Container>
  );
}
