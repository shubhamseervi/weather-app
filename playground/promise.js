var asyncAdd = (a, b) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if(typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(10, '30').then ((res) => {
  console.log('Resolve: ', res);
  return asyncAdd(res, 33);
}).then((res) => {
  console.log('Should be 73:', res);
}).catch((errorMessage) => {
  console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //resolve('hey it worked');
//       reject('error');
//     }, 2500);
// });
//
//
// somePromise.then((message) => {
//   console.log(`Success: ${message}`);
// }, (errorMessage) =>{
//   console.log('err: ', errorMessage);
// });
