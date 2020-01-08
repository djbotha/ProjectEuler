function fiboEvenSum(n) {
  let one = 1, two = 2, fib, sum = 2;

  if (n <= 2) {
    return  sum;
  }

  for (let i = 3; i <= n; i++) {
    fib = one + two;
    one = two;
    two = fib;

    if (fib % 2 === 0) {
      sum += fib;
    }
  }
  return sum;
}

fiboEvenSum(10);
