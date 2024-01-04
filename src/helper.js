function generateTicket(n) {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10)
        // arr[i] = `${Math.floor(100 + Math.random()
        //     * (999 - 100 + 1))}`; // random number
            }
            return arr;

}

function sum (arr) {
    return arr.reduce(function (
        a, b) {
            return a + b
            }, 0)
}

export {generateTicket}
export {sum}