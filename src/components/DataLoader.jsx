import React, { useState } from "react";
import { Typography, FilledInput, FormControl } from "@mui/material";
import { parseCSVData } from "../utils/csvParser";

const DataLoader = ({ onDataLoad }) => {
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "text/csv") {
        setError("Please upload a valid CSV file");
        return;
      }
      
      parseCSVData(file, onDataLoad, setError);
    }
  };

  return (
    <FormControl>
      <FilledInput
        type="file"
        inputProps={{ accept: "text/csv" }}
        onChange={handleFileUpload}
      />
      {error && <Typography color="error">{error}</Typography>}
    </FormControl>
  );
};

export default DataLoader;
