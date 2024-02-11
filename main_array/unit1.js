function createOddArray(n) {
    let oddArray = [];
    for (let i = 1; i <= n * 2; i += 2) {
      oddArray.push(i);
    }
    return oddArray;
  }
  
  const n = parseInt(prompt("n ni kiriting: "));
  const oddNumbers = createOddArray(n);
  console.log("Tashkil topgan massiv:", oddNumbers);
  