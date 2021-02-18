export const binarySearch = (arr, el) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = start + (end - start) / 2;
    if (el < arr[mid]) {
      end = mid - 1;
    } else if (el > arr[mid]) {
      start = mid + 1;
    } else {
      return Math.ceil(mid);
    }
  }
  return -1;
};
