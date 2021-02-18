function counter(arr) {
  const N = arr.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) count++;
      }
    }
  }
  return count;
}

console.log(counter([1, -1, 0, 10, 38, 50, 44, -9876, -38, -50, 49]));
