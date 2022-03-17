function solutions(S, C) {
  // It breaks the string into an array of arrays, just like columns and rows.
  const table = S.split('\n').map((str) => {
    return str.split(',');
  });

  const positionInTheColumn = table[0].indexOf(C);

  // It creates a variable to store the biggest value.
  let biggestValue = Number.NEGATIVE_INFINITY;
  let currentValue;
  for (let i = 0; i < table.length; i++) {
    // It gets the number from the column, and it converts to a value of type number.
    currentValue = table[i][positionInTheColumn] * 1;

    if (currentValue > biggestValue) {
      biggestValue = currentValue;
    }
  }

  return biggestValue;
}

console.log(
  solutions(
    'id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7',
    'age'
  )
); // 68

console.log(
  solutions('area,land\n3722,CN\n6612,RU\n3855,CA\n3797,USA', 'area')
); // 6612

console.log(
  solutions('city,temp2,temp\nParis,7,-3\nDubai,4,-4\nPorto,-1,-2', 'temp')
); // -2
