function sameCase(a, b) {
  if((/^[a-z]$/.test(a) && /^[a-z]$/.test(b)) || (/^[A-Z]$/.test(a) &&  /^[A-Z]$/.test(b))){
    return 1;
  } 
  if((/^[a-z]$/.test(a) && (/^[A-Z]$/.test(b))) || (/^[A-Z]$/.test(a) && (/^[a-z]$/.test(b)))) {
    return 0;
  }
  else {
    return -1;
  }
}

const result1 = sameCase('a', 'g');
console.log(result1);

const result2 = sameCase('A', 'C');
console.log(result2);

const result3 = sameCase('b', 'G');
console.log(result3);

const result4 = sameCase('B', 'g');
console.log(result4);

const result5 = sameCase('0', '?');
console.log(result5);
