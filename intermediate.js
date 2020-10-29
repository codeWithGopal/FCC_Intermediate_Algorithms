// Intermediate Algorithm Scripting: Sum All Numbers in a Range

const sumAll = (arr) => {

    let result;


    if (arr[0] > arr[1]) {
        result = arr[1];


        for (let i = arr[1] + 1; i <= arr[0]; i++) {

            result += i;

        }
        return result;


    } else {
        result = arr[0];

        for (let i = arr[0] + 1; i <= arr[1]; i++) {
            result += i;
        }
        return result;

    }


};

console.log(sumAll([1, 4]));
console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));