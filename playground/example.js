// console.log('Starting app');
// // callback function
// setTimeout(() => {
//   console.log('callback'); // this prints after 2sec callback fired after 2sec
// }, 2000); // example for non blocking
//
// setTimeout(() => {
//   console.log('zero delay');
// }, 0); // delay is zero still prints after finishing app.
//
// console.log('finishing app');
//
//
//
// //how this program runs
// // 1) call stack work like any stack and top of the stack get picked up.
//
// var x = 1;
//
// var y = x + 9;
//
// console.log(`y is ${y}`);
//
//

var getUser = (id, name, callback) =>{
  var user = {
    id,
    name
  };
  setTimeout(() =>{
    callback(user);
  },3000);
  //callback(user);
};

getUser(31, 'shubhamss', (userObject) => {
   console.log(userObject);
});


//get user is passed with two parameter one is user id and
// other is a callback function.
// callback is a function which is called just like any other.
// in above example callback is defined when we called
// getUser() function
