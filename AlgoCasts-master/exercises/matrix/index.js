// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;

    let startcolumn = 1;
    let endcolumn = n - 1;
    let startrow = 1;
    let endrow = n - 1;

    while (startcolumn <= endcolumn && startrow <= endrow) {
        for (let i = startcolumn; i <= endcolumn; i++) {
            results[startrow][i] = counter;
            counter++;
        }
        startrow++;
        
        for (let i = startrow; i <= endtrow; i++) {
            results[i][endcolumn] = counter;
            counter++;
        }

        for (let i = endcolumn; i >= startcolumn; i--) {
            results[endrow][i] = counter;
            counter++;
        }

        for (let i = endcolumn; i >= startcolumn; i--) {
            results[endrow][i] = counter;
            counter++;
        }
        endrow--;

        for (let i = endrow; i >= startrow; i--) {
            results[i][startcolumn] = counter;
            counter++;
        }
        startcolumn++;
    }
}

module.exports = matrix;
