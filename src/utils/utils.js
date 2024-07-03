/**
 * Generates a unique ID each time it is called.
 *
 * This is an immediately invoked function expression (IIFE) that returns a function
 * to generate sequential unique IDs starting from 1. Each subsequent call to the
 * returned function increments the ID by 1.
 *
 * @function
 * @returns {number} A unique ID that increments with each call.
 *
 * @example
 * const id1 = uniqueID(); // 1
 * const id2 = uniqueID(); // 2
 * const id3 = uniqueID(); // 3
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
