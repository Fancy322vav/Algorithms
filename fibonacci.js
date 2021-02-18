function fibonacci(n) {
  const sequence = [1];

  let currentValue = 1;
  let prevValue = 0;

  n--;

  while (n) {
    currentValue += prevValue;
    prevValue = currentValue - prevValue;

    sequence.push(currentValue);
    n--;
  }

  return sequence;
}

console.log(fibonacci(10));
