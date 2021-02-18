function trialDivivsion(num) {
  if (num % 1 !== 0) {
    return false;
  }

  if (num <= 1) {
    return false;
  }

  if (num <= 3) {
    return true;
  }

  if (num % 2 === 0) {
    return false;
  }

  // If there is no dividers up to square root of n then there is no higher dividers as well.
  const limit = Math.sqrt(num);
  for (let i = 3; i < limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
