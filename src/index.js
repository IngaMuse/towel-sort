// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) { return [] }; 
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnInd = i % 2 === 0 ? j : matrix[i].length - j - 1;
            array.push(matrix[i][columnInd]);
        }
    }
    return array;
};
