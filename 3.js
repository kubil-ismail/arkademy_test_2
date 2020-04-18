const createTriangle = (limit) => {
    let width = (2 * limit) - 1; // Always the case.
    let midpoint = Math.floor(width / 2); // Middle of triangle.
    let star = ''; // will be reset each star loop

    // Looping through stars
    for (let rows = 0; rows < limit; rows++) { 
        star = '';
        for (let field = 0; field < width; field++) {
            if (field < midpoint - rows || field > midpoint + rows) {
                star += '  ';
            } else {
                star += ' *';
            }
        }
        console.log(star);
    }
}

createTriangle(5);
