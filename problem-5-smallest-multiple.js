function smallestMult(n) {
  let currentNum = 10;

  let divisible = false;

  while (!divisible) {
    divisible = true;
    for (let i = n; i >= 2; i--) {
      if (currentNum % i !== 0) {
        divisible = false;
        break;
      }
    }

    if (divisible) {
      return currentNum;
    }

    currentNum += 10;
  }
}

smallestMult(20);
