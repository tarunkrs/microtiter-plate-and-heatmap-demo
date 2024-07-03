import Parser from "papaparse";

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
  Parser.parse(file, {
    header: true, // Parse the CSV data with headers
    complete: (result) => {
      onDataLoad(result.data);
      setError(null);
    },
    error: () => {
      setError("Error parsing CSV file");
    },
  });
};
