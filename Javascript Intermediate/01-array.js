//SOAL 1
const arr1 = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(x) {
    number = []
    for (let i = x.length - 1; i >= 0; i--) {
        number.push(x[i])        
    }return number;
}

const newArr1 = reverse(arr1);
const newArr2 = reverse(arr2);

console.log(arr1, newArr1);
console.log(arr2, newArr2);

///////////////////////////////////////////////
//SOAL 2
const arr3 = [1, 3, 4, 1, 2, 8];
const arr4 = [5, 6, 7, 8, 1, 3];

function getAverage(y) {
    var all = 0;
    for (let i = 0; i < y.length; i++) {     
        all += y[i];
    }
    let avrg = all / y.length;

    var more = 0;
    for (let j = 0; j < y.length; j++) {
      if (y[j] > avrg) {
          more++;
      }
    }
    return more;
}

console.log(getAverage(arr3))
console.log(getAverage(arr4))

//////////////////////////////////////////////
//SOAL 3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
function searchInArray(arr, num) { 
    let newArr = []
    for (let x = 0; x < arr.length; x++) {
        for (let y = 0; y < arr[x].length; y++) {
            newArr.push(arr[x][y]);
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        if (num == newArr[i]) {
            return newArr.indexOf(newArr[i]);
        }
    }
    return null; 
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
