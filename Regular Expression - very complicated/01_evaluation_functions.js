// all the functions related to regular expressions in JavaScript

let re;
re = /hello/;
// re = /hello/i;                // i = case insensitive
// re = /hello/g;                // g = global search


// console.log(re);        // output: /hello/
// console.log(re.source); // output: hello

// exec() - return result in an array for a match else null
const result = re.exec('ranjan hello world');

console.log(result);        // this array of below elements --
console.log(result[0]);     // this will be match re value ie, 'hello'
console.log(result.index);  // starting index where match starts 
console.log(result.input);  // this will be input string ie, 'ranjan hello world'


// test() - return true or false for a match
const result1 = re.test('Hello');


// match() - return result in an array like exec() and is takes parameter as opposite of it
const result2 = 'hello there'.match(re);

// search() - return the index of first match else return -1
const result3 = 'ranjan hello there'.search(re);

// replace() - return a new string with some or all matches of a pattern
const result4 = 'hello there'.replace(re, 'hi');