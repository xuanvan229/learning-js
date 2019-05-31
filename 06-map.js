let array = [
  {
    name: "Xuan",
    age: 20,
    display: true
  },
  {
    name: "Ha",
    age: 21,
    display: true
  },
  {
    name: "Thu",
    age: 22,
    display: false
  },
  {
    name: "Dong",
    age: 23,
    display: false
  }
]



let name_array = array.map(
  (x) => {
      if(x.age > 21)
        {
          x.Name="Xuan"
        }

      return x
      // return "No"
  }
)

let filter_array = array.filter((x) => {
  if(x.display)
    return x
})

console.log(name_array)
console.log(filter_array)