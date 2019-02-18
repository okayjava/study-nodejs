'use strict'

var printFunc = function(name) {
    console.log(name);
}

printFunc('11111');

console.log(process.version);

const[one,two] = [1,2];
console.log(`one is ${one}, two is ${two}`)
process.exit(0);