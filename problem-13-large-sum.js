function largeSum(arr) {
  return parseInt(
    arr
      .reduce((acc, curr) => (acc += parseInt(curr, 10)), 0)
      .toString()
      .split("e")[0]
      .slice(0, 11)
      .replace(/\./, "")
  );
}

// only change code above this line

const testNums = [
  "37107287533902102798797998220837590246510135740250",
  "46376937677490009712648124896970078050417018260538"
];

largeSum(testNums);
