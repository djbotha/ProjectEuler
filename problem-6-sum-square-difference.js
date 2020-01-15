function sumSquareDifference(n) {
  const firstN = [...Array(n).keys()].map(k => k + 1)
  
  const sumOfSqaures = firstN.reduce((acc, curr) => acc += Math.pow(curr, 2), 0);

  const squareOfSums = Math.pow(firstN.reduce((acc, curr) => acc += curr, 0), 2);

  return squareOfSums - sumOfSqaures;
}

sumSquareDifference(100);
