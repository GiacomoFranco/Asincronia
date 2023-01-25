// function doAsyncStuff(){
//   return new Promise((resolve, reject)=>{
//     true
//     ? setTimeout(() => {
//         resolve('Async!!')
//     }, 2000)
//     : reject(new Error('Error!'))
//   })
// }

// const asyncAwaitFunction = async function(){
//     console.log('asincrono');
//     const response = await doAsyncStuff()
//     console.log('Hola dentro de asyncAwaitFunction');
//     console.log(response);
// }

// console.log('Before');
// asyncAwaitFunction();
// console.log('After');

function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(()=> resolve("🥳"), 5000); // se podrá hacer esto o necesito encerrarlo en una función flecha?
  });
}

async function waitForResponse() {
  const response = await asyncFunction();
  console.log(response);
  console.log('log desde adentro de la función async');
}

async function main(){
  console.log("before");
  await waitForResponse();// se le puede poner await a algo que de por si ya es síncrono?
  console.log("after");
}

main()

console.log('fin');