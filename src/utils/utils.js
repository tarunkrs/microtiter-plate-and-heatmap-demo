/**
 * Generates a unique ID each time it is called.
 *
 * @function
 * @returns {number} A unique ID that increments with each call.
 *
 */
const uniqueID = (() => {
  // Initialize a counter starting at 1
  let i = 1;

  // Return a function that increments and returns the counter
  return () => {
    return i++;
  };
})();

export default uniqueID;
