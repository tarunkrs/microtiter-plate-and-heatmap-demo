import Papa from "papaparse";

/**
 * Parses a CSV file using the PapaParse library and handles the parsed data or errors.
 *
 * @function parseCSVData
 * @param {File} file - The CSV file to be parsed.
 * @param {Function} onDataLoad - Callback function to handle the parsed data.
 * @param {Function} setError - Callback function to handle errors.
 *
 */

export const parseCSVData = (file, onDataLoad, setError) => {
  Papa.parse(file, {
    header: true, // Parse the CSV data with headers
    complete: (result) => {
      onDataLoad(result.data); // Pass the parsed data to the callback function
      setError(null); // Clear any previous error
    },
    error: () => {
      setError("Error parsing CSV file"); // Set an error message if parsing fails
    },
  });
};
