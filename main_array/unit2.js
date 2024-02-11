function createPowerOfTwoArray(n) {
    let powerOfTwoArray = [];
    for (let i = 0; i < n; i++) {
      powerOfTwoArray.push(Math.pow(2, i));
    }
    return powerOfTwoArray;
  }
  
  const n = parseInt(prompt("n ni kiriting: "));
  const powerOfTwoNumbers = createPowerOfTwoArray(n);
  console.log("Tashkil topgan massiv:", powerOfTwoNumbers);
  