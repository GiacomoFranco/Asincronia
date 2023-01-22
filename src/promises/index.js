// const promise = new Promise(function(resolve, reject){
//     resolve('hey')
//     reject('bue')
// })

// promise.then((result) => console.log(result))

// const cows = 15;

// const countCows = new Promise(function(resolve, reject){
//     if (cows > 15) {
//         resolve(`Yei, hay ${cows} vacas`)
//     } else{
//         reject("There are no more than 10 cows")
//     }

// })

// countCows.then((result)=> {
//     console.log(result);
// }).catch((error) =>{    
//     console.log(error);
// }).finally(() => {
//     console.log("Final text");
// });

function delayTwoSec(time, message){
    return new Promise(function (resolve, reject){
        setTimeout(() =>{
            if(time >= 0){
                resolve(message)
            } else{
                reject('Está mal mi rey')
            }
        } ,time)
    })
}

export function delay(time, message) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (time >= 0) {
        resolve(message)
        } else {
          reject(message)
        }
      }, time)
   })
  }



  delayTwoSec(5000, 'it Works')
    .then(result => console.log(result))
// console.log(delayTwoSec(2000, 'it works'));
