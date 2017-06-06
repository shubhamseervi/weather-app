var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('hey it worked');
      reject('error');
    }, 2500);
});


somePromise.then((message) => {
  console.log(`Success: ${message}`);
}, (errorMessage) =>{
  console.log('err: ', errorMessage);
});
