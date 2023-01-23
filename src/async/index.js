function doAsyncStuff(){
  return new Promise((resolve, reject)=>{
    true
    ? setTimeout(() => {
        resolve('Async!!')
    }, 2000)
    : reject(new Error('Error!'))
  })
}

const asyncAwaitFunction = async function(){
    console.log('asincrono');
    const response = await doAsyncStuff()
    console.log('Hola dentro de asyncAwaitFunction');
    console.log(response);
}

console.log('Before');
asyncAwaitFunction();
console.log('After');