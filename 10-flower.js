// const Tinh = (flower, people) => {
//   let peoplePrice = new Array(people)
//   peoplePrice.fill(1)
//   for(let i =0, len = peoplePrice.length; i<len; i++) {
//     if(peoplePrice.reduce((acc, current) =>  acc+current,0) != flower) {
//       console.log("this is here", peoplePrice[i])
//       peoplePrice[i]++
//     }
//   }
  
//   return peoplePrice  
// }


// const Minimum = (flower,people,price) => {
//   const sortPrice = price.sort()
//   console.log("sortPrice", sortPrice)
//   let peoplePrice = new Array(people)
//   peoplePrice.fill(0)

//   // for(let i = 0; i< people; i++){
//   //   peoplePrice[i] += price[i]
//   //   return peoplePrice
//   // }
  
//   if(flower > people) {
//     let arr = Tinh(flower, people)
//     console.log("arr", arr) 
//     let i = 0
//     let result = 0
//     arr.forEach(element => {
//       console.log("element =>", element)
//       let key = 0
//       for(let k = i; k<i+element; k++) {
//         console.log("k =>",k , sortPrice[k])
//         result += (key+1)*sortPrice[k]
//         key ++
//         console.log("result => ", result)
//       }
//       i+=element
//       console.log("i =>", i)
//       // 0+1xprice + 1+1xprice
//       console.log("result", result)
//     });
//   }

//   console.log(peoplePrice)
// }



function MinigetMinimumCostmum(k, c) {
  return c.sort((a, b) => b - a).reduce((acc, cost, index) => {
    console.log(index/k, parseInt(index / k) , (parseInt(index / k) + 1))
    return acc + (parseInt(index / k) + 1) * cost
  }, 0)
}




console.log(MinigetMinimumCostmum(4,[1,3,5,7,9]))