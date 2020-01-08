function largestPrimeFactor(number) {
  let i = 2;
  let largest = number;

  for (let i = 2; i < largest; i++) {
    if (largest % i === 0) {
      largest = largest / i;
      i = 1;
    }
  }
  // Good luck!
  return largest;
}

largestPrimeFactor(13195);
