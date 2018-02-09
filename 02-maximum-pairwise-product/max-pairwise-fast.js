function maxPairwiseProduct(input) {
  let a = 0;
  input.forEach((n, i) => (a = n > input[a] ? i : a));
  let b = a === 0 ? 1 : 0;
  input.forEach((n, i) => (b = i !== a && n >= input[b] ? i : b));
  return input[a] * input[b];
}

module.exports = maxPairwiseProduct;
