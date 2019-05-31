var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    console.log("two")
    resolve('two');
  }, 3000);
});

// promise1.then(function(value) {
  // console.log(value);
  // expected output: "foo"
// });

// expected output: [object Promise]

async function call() {
  console.log("one");
  // await promise1
  // promise1.then(data => console.log(data))
  // console.log(number)
  
  // await promise1
  console.log("three")
}
call()

//  console.log(promise1)