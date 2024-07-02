const uniqueID = (() => {
  let i = 1;
  return () => {
    return i++;
  };
})();

export default uniqueID ;
