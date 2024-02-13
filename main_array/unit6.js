function geometrikProgressiya(A, r, n) {
    let progression = [];
    for (let i = 0; i < n; i++) {
        progression.push(A * Math.pow(r, i));
    }
    return progression;
}

// Test
let A = 2; // Dastlabki had
let r = 3; // Daraja
let n = 5; // Massiv uzunligi
let progressionArray = geometrikProgressiya(A, r, n);
console.log("Geometrik progressiyaning massivi:", progressionArray);
