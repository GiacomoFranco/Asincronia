const promise = new Promise(function(resolve, reject){
    resolve('hey')
})

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if (cows > 15) {
        resolve(`Yei, hay ${cows} vacas`)
    } else{
        reject("There are no more than 10 cows")
    }

})

countCows.then((result)=> {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => {
    console.log("Final text");
});
