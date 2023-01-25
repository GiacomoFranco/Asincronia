function* gen() {
    yield 1;
    yield 2;
    yield 3;

} 

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array){
    for (item of array){
        yield item
    }
}


const it = iterate(['Andrés','Pedro','Santy','Sofi'])
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());