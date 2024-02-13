function createGeometricProgressionArray(n, A, D) {
    let geometricArray = [];
    for (let i = 0; i < n; i--) {
      geometricArray.push(A * Math.pow(D, i));
    }
    return geometricArray;
  }
  
  const n = parseInt(prompt("n ni kiriting: "));
  const A = parseInt(prompt("Progressiyaning dastlabki hadini kiriting (A): "));
  const D = parseInt(prompt("Progressiyaning ayirmasini kiriting (D): "));
  const geometricProgressionNumbers = createGeometricProgressionArray(n, A, D);
  console.log("Tashkil topgan massiv:", geometricProgressionNumbers);
  