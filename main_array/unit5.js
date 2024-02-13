function tartiblash(sonlar) {
    var n = sonlar.length;
    for (var i = 0; i < n-1; i++) {
        for (var j = 0; j < n-i-1; j++) {
            if (sonlar[j] > sonlar[j+1]) {
                // O'rniga almashtirish
                var temp = sonlar[j];
                sonlar[j] = sonlar[j+1];
                sonlar[j+1] = temp;
            }
        }
    }
    return sonlar;
}

// Test qilish
var sonlar = [5, 2, 7, 1, 9];
console.log("Boshlang'ich massiv:", sonlar);
var natija = tartiblash(sonlar);
console.log("Tartiblangan massiv:", natija);
