// const numbers = [5, 2, 9, 1, 3];
// Lengkapi kode di bawah ini
// numbers.sort(/* Lengkapi parameter */)
// numbers.sort();
// console.log(numbers.sort(function(a, b) { return b - a; }))
// console.log(numbers.sort(function(a, b) { return a - b; }))
// console.log(numbers.sort(ascending))
function isPrime(num) {
    // Lengkapi kode di bawah ini
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(63))