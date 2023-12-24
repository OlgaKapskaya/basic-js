/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const values = {
  discardPrev: '--discard-prev',
  discardNext: '--discard-next',
  doubleNext: '--double-next',
  doublePrev: '--double-prev',
}

function transform(arr) {
  const res = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === values.discardPrev) {
        if (i-1 >= 0) {
          res.pop();
        }
      } else if (arr[i] === values.doublePrev) {
        if (i-1 >= 0) {
          res.push(arr[i-1])
        }
      } else if (arr[i] === values.doubleNext) {
        if (i+1 < arr.length) {
          res.push(arr[i+1])
        }
      } else if (arr[i] === values.discardNext) {
        i += 2;
      } else {
        res.push(arr[i])
      }

    }
  } else {
    throw new Error("\'arr\' parameter must be an instance of the Array!");
  }
  return res
}

module.exports = {
  transform
};
