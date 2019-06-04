function countHoles(num) {
  var digits = num.toString().split("");
  var values = [1, 0, 0, 0, 1, 0, 1, 0, 2, 1];
  return digits.reduce((total, index) => {
    return total + values[index];
  }, 0);
}
