import React, { useState } from "react";
import Papa from "papaparse";
import { Typography, FilledInput, FormControl } from "@mui/material";

const DataLoader = ({ onDataLoad }) => {
  const [error, setError] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== "text/csv") {
        setError("Please upload a valid CSV file");
        return;
      }
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          onDataLoad(result.data);
          setError(null);
        },
        error: () => {
          setError("Error parsing CSV file");
        },
      });
    } 
  };

  return (
    <FormControl>
      <FilledInput type="file" inputProps={{ accept: 'text/csv' }} onChange={handleFileUpload} />
      {error && <Typography color="error">{error}</Typography>}
    </FormControl>
  );
};

export default DataLoader;
