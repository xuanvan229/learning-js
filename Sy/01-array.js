const input = [4,5,2,6,8,3,9]

const Max = (array) => {
  let max = array[0]
  for(let i=1; i < array.length; i++){
    if(max < array[i]){
      max= array[i]
    }
  }
  return max
}

const SecondMax = (array) => {
  let max = array[0];
  let max2 = array[0];
  for(let i=1; i < array.length; i++){
    if(max <= array[i]){
      max2= max
      max = array[i]
    } else {
      if(max2 < array[i]){
        max2 = array[i]
      }
    }
  }
  return max2
}



console.log("Max la: ", Max(input))


console.log("Second  Max : ", SecondMax(input))



// Array[i]

// Array.push(1)

// array.forEach(item => {
  // 
// })