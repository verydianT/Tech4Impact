//SOAL 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(x) { 
    let num = x[0];
    if (x.length < 1) {
        return 0;
    } else {
    return num + sumOfArray(x.slice(1));
    }
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

///////////////////////////////////////////////
//SOAL 2
const avg1 = sumOfArray(arr1) / arr1.length;
const avg2 = sumOfArray(arr2) / arr2.length;
function countAboveAvg(x, num) { 
    if (x.length < 1) {
        return 0;
    } else {
    return (x[0] > num) + countAboveAvg(x.slice(1), num);
    }
}
const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

///////////////////////////////////////////////
//SOAL 3
const arr3 = [1, 2, 3, 4, 5];
function searchInArray(arr, num) { 
    let length = arr.length-1
    if (arr[length] === num) {
      return `angka ditemukan pada index: ${arr.indexOf(num)}`;
    } 
    else if (length === 0) {
      return "angka tidak ditemukan";
    }
      return searchInArray(arr.slice(0, -1), num);
}

console.log(searchInArray(arr3, 6));
console.log(searchInArray(arr3, 1));
console.log(searchInArray(arr3, 8));

///////////////////////////////////////////////
//SOAL 4
function trianglePattern(x, y) {

}

trianglePattern(5, 5);
