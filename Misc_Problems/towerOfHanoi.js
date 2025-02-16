function towerOfhanoi(n, fromRod, toRod, usingRod) {
  if (n == 1)
    return console.log(`disk ${n} goes from
    ${fromRod} to ${toRod}`);

  towerOfhanoi(n - 1, fromRod, usingRod, toRod);
  
  console.log(`disk ${n} goes from
    ${fromRod} to ${toRod}`);
  
    towerOfhanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfhanoi(3, "A", "C", "B");

//complexty is  O((2^n)-1)
