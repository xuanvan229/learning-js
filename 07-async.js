// import axios from 'axios'
const axios = require('axios')

const getData = async () => {
  let result = {}
  await axios.get('https://hn.algolia.com/api/v1/search?query=react')
  .then(function (response) {
    // handle success
    // console.log(response.data);
    return response.data.hits[0]
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (data) {
    // console.log("DATA RECEIVE =>", data)
    result = data
    return data
    // always executed
  });
  return result
};

// let result = await getData()
getData().then(result => console.log(result));
// console.log(result)



async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
      let random = Math.random()*10
      console.log("randome", random)
      if (random > 5)
        resolve({done:true})
      else 
        reject("error u cant do this")
    }, 1000)
  });


  const promise2 = new Promise(function fn(resolve, reject) {
    setTimeout(() => {
      resolve("two")
      // console.log('two')
    },0)

  });

  await Promise.all([promise, promise2]).then(function(values) {
    console.log("value promise all", values);
  });

  try {
    let result = await promise; // wait till the promise resolves (*)
    console.log(result); // "done!"
  } catch(err) {
    console.log(err); // "done!"
  }
}

f();

var p1 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('one'), 1000); 
}); 
var p2 = new Promise((resolve, reject) => { 
  setTimeout(() => resolve('two'), 2000); 
});
var p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('three'), 3000);
});
var p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('four'), 4000);
});
// var p5 = new Promise((resolve, reject) => {
//   reject(new Error('reject'));
// });


// Using .catch:
Promise.all([p1, p2, p3, p4])
.then(values => { 
  console.log(values);
})
.catch(error => { 
  console.log(error.message)
});


// console.log('one')

// const promise2 = new Promise(function fn(resolve, reject) {
//   setTimeout(() => {
//     resolve("two")
//     // console.log('two')
//   },0)

// });
//   let x = ""
//   console.log(promise2)
//     promise2.then(data=>{
//       console.log("data", data)
//       x = data
//       return data
//     })

// console.log(x)
// console.log('three')