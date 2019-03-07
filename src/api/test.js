// function timeout(ms){
//   return new Promise((resolve,reject) => {
//     setTimeout(resolve, ms, 'done');
//   })
// }

// timeout(3000).then((value) => {
//   console.log(value)
// })


// const pro = new Promise((resolve,reject) => {
//   console.log('promise')
//   resolve()
// })
// pro.then(() => {
//   console.log('resolve')
// })

// console.log('hi')


// const getJSON = function(url) {
//   const promise = new Promise(function(resolve, reject){
//     const handler = function() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//     const client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//   });

//   return promise;
// };

// getJSON('./test.json').then((json) => {
//   console.log('contents:'+json)
// },(error) => {
//   console.log('出错了'+error)
// })

const p1 = new Promise((resolve, reject) => {
  console.log('p1')
})

const p2 = new Promise((resolve, reject) => {
  console.log('p2')
  resolve(p1)
})







