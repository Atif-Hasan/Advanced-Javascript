
// Eg. 1
const arr1 = ['Karachi','Islamabad','Lahore','Peshawar']; 
const arr2 = ['Gujranwala','Rawalpindi','Sukkur'];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// Eg. 2

const cities = ['Karachi','Islamabad','Lahore','Peshawar'];

console.log(...cities);

// Eg. 3

function sum(x,y,z) {
    return x + y + z;
}

const numbers = [1,2,3];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

// Eg. 4

const initialNumbers = [1,2,3];
const finalNumbers = [...initialNumbers, 4,5,6];

console.log(finalNumbers);

