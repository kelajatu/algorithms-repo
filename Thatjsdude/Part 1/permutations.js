// Question: How would you create all permutation of a string?

// Answer: This could be a tough one based on you level of knowledge about algorithm.

function permutations(str) {
  var arr = str.split(""),
    perms = [],
    rest,
    picked,
    restPerms,
    next;

  if (arr.length === 0) return [str];

  for (var i = 0; i < arr.length; i++) {
    rest = Object.create(arr);
    picked = rest.splice(i, 1);

    restPerms = permutations(rest.join(""));

    for (var j = 0; j < restPerms.length; j++) {
      next = picked.concat(restPerms[j]);
      perms.push(next.join(""));
    }
  }
  return perms;
}

console.log(permutations("Set"));
// console.log(permutations(""));
