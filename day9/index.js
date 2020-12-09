/// Find sumOddFibonacciNumbers
function sumOddFibonacciNumbers(num) {
  var fib = [1,1];
  var nextFib = findNextFib(1,1);
  var findNextFib = function (a, b) {
    return a + b;
  };
  
  
  while (nextFib <= num) {
    fib.push(nextFib);
    nextFib = findNextFib(fib[fib.length-2], fib[fib.length-1]);
  }
  
  return fib.filter(function(a) {
    return (a % 2 !== 0);
  })
  .reduce(function(a,b) {
    return a + b;
  });
}