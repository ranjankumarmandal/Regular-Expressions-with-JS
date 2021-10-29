// shorthand character classes

let re;

re = /\w/;                                          // word character - alphanumeric or _ => one time
re = /\w+/;                                         // word character - one or more
re = /\W/;                                          // non word character

re = /\d/;                                          // match any one digit character
re = /\d+/;                                         // match any one or more digit character
re = /\D/;                                          // match any non digit

re = /\s/;                                          // match white space
re = /\S/;                                          // match none white space

re = /hell\b/;                                      // \b - word boundary ie, used for exaxct word matching


// Assertions

re = /x(?=y)/;                                      // match only if x is followed by y. eg - dfkxyer
re = /x(?!y)/;                                      // match only if x is NOT followed by y. eg-dfxre
