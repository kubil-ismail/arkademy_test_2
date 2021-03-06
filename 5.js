let random = [];
let matrix = [];
let val1 = 0;
let val2 = 0;

// Set random number
function setRandom(limit) {
    random = [];
    for (row = 0; row < limit; row++) {
        random.push(Math.floor(Math.random() * 99) + 1);
    }
    return random;
}

function setMatrix(limit) {
    // Get diagonal 1
    for (d1 = 0; d1 < limit; d1++) {
        matrix[d1] = setRandom(limit);
        val1 += matrix[d1][d1];
    }

    // Get Diagonal 2
    let index = 0;
    for (d2 = --limit; d2 > -1; d2--) {
        val2 += matrix[d2][index++];
    }

    console.log(matrix);
    console.log(`Total : ${val1 + val2}`);
}

setMatrix(3);
