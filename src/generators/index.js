function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

//ejemplo con un array

const a = ['Oscar', 'Juan', 'Freedy', 'De Granda', 'Nico'];

function* iterate(array){
    for (const value of array) {
        yield value;
    }
}

const it = iterate(a)

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);