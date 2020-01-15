function isPalindrome(num = "foo") {
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== num[num.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function largestPalindromeProduct(n) {
  let largest = 0;
  let minN = Math.pow(10, n-1)
  let maxN = Math.pow(10, n) - 1

  const range = [...Array(maxN - minN + 1).keys()]
    .map(num => (
      num += minN
    ));
  
    
  for (let i = range.length - 1; i >= 0; i--) {
    for (let j = range.length - 1; j >= 0; j--) {
     let sum = range[i] * range [j];
     if (isPalindrome(`${sum}`) && sum > largest) {
       largest = sum;
     }
    }
  }
  return largest;
}

largestPalindromeProduct(3);
