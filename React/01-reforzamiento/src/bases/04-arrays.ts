// const myArray = [1,2,3,'4',5,6];
const myArray: number[] = [1,2,3,4,5,6];

myArray.push(7);

// const myArray2 = myArray;
// const myArray2 = [...myArray];
const myArray2 = structuredClone(myArray);

console.log({myArray, myArray2});
