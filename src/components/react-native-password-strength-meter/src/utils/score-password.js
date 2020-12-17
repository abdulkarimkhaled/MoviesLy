/* eslint radix: ["error", "as-needed"] */
import limitValue from './limit-value';

function scorePassword(pass, minLength, limit, variations = {}) {
  let score = 0;
  let variationCount = 0;
  const letters = {};



  if (!pass || pass.length < minLength) {
    if (pass.length == 0) {
      return 0
    }
    return (pass.length * 2);
  }

  /* Score character variation */
  Object.keys(variations).forEach((variation) => {
    const variationCheck = variations[variation].test(pass);
    variationCount += variationCheck === true ? 1 : 0;
  });
  if (variationCount != 0) {
    score += variationCount * 50 + (pass.length * 2);
  }
  else {
    if (pass.length * 2) {
      return 18
    }
  }


  return limitValue(score, 0, limit);
}

export default scorePassword;
