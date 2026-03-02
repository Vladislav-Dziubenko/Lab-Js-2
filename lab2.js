function printArray(arr) {
    console.log(arr); // Выводит весь массив: [1, "b", null]
}

function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

function filter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function find(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
    return undefined;
}

function printArray1(arr) {
    // Вариант 1: Через цикл for
    console.log("--- Вывод через for ---");
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    // Вариант 2: Через метод forEach (правильный синтаксис)
    console.log("--- Вывод через forEach ---");
    arr.forEach((element, index) => {
        console.log(`Element: ${element}, Index: ${index}`);
    });
}

function some(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

const numbers = [1, 2, 3, 4, 5];
const sum = reduce(numbers, (accumulator, element) => accumulator + element, 0);
console.log(sum); // 15

const x = [1, 2, 3];
const y = ['a', 'b', 'c'];
const z = [true, false, null];

const mySelection = [x[0], y[1], z[2]];

printArray(mySelection);
printArray1(mySelection);