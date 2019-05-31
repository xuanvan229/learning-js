const array = [1,2,3,4,5,6];
const lanlap = 4;

let newArray = []

array.forEach((item) => {
  let newarr = new Array(lanlap)
  newArray = [...newArray, ...newarr.fill(item)]
})

console.log(newArray)