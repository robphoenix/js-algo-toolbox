function maxPairwiseProduct(input) {
  let product = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 1; j < input.length; j++) {
      if (i !== j) {
        product = Math.max(product, input[i] * input[j]);
      }
    }
  }
  return product;
}

module.exports = maxPairwiseProduct;
