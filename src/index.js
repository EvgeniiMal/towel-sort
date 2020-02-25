
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }
    matrix.forEach((element, index) => {
        if (index % 2 == 0) {
            element.sort((a, b) => a - b);
        } else {
            element.sort((a, b) => b - a);
        }
    });

    return matrix.flat();
}
