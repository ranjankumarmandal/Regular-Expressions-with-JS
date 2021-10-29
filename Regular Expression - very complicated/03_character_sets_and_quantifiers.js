// [] - character sets

let re;

re = /gr[ae]y/i;                    // must be an a or e
re = /[gf]ray/;                     // must be g or f
re = /[^gf]ray/;                    // anything except g and f
// re = /^[gf]ray/;                    // must start with g or f
re = /[A-Z]/;                    // any uppercase letter from A to Z
re = /[a-z]/;                    // any lowercase letter from a to z
re = /[A-Za-z]/;                 // any uppercase or lowercase letter from A or a to Z or z
re = /[0-9]/;                    // any numberical digit from 0 to 9



// {} - Quantifiers

re = /hel{2}o/i;                   // output of re.source will be 'hello' - two times l
re = /hel{2, 4}o/i;                // here 'l' can be between 2 to 4
re = /hel{2,}o/i;                  // here 'l' can be atleast 2


// () - Grouping

re = /([0-9]x){3}/i;                // here nx will be 3 times, where n is from 0 to 9
