// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });

const randomNumberPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      resolve(randomValue);
    } else {
      reject(randomValue);
    }
  }, 1000);
});

randomNumberPromise
  .then((value) => {
    console.log("Success", value);
  })
  .catch((value) => {
    console.log("Fail", value);
  })
  .finally(() => {
    console.log("Complete");
  });
