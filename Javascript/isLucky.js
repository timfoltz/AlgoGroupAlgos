function isLucky(n) {
  n = n.toString();
  var half = n.length / 2;
  var first = 0;
  var second = 0;
  for (var i = 0; i < half; i++) {
    first += n[i];
  }
  for (var j = half + 1; j < n.length; j++) {
    second += n[j];
  }
  if (first != second) {
    return false;
  } else {
    return true;
  }
}

console.log(isLucky(239017));
