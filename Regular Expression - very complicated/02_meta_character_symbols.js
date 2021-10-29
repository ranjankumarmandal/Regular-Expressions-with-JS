let re;

// literal characters
re = /hello/;
re = /hello/i;                      // in-sesible

// meta character symbols
re = /^h/i;                                               // ^ - must start with
re = /d$/i;                                               // $ - must ends with
re = /^world$/i;                                          // ^ $ - must begin and end with
re = /w.rld/i;                                            // . - matches any character one time
re = /w*rld/i;                                            // * - matches any character 0 or more time
re = /gre?a?y/i;                                          // ? - optional character
re = /g\?ray/i;                                           // \ - escape character


const str = 'Hello World';                     // string to match
const result = re.exec(str);        // log results
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matched ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}

reTest(re, str);