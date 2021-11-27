//(1) Create a Regex variable and test it using Regex.test

//Solution:- 
var regex = /alpha/i   //here i is an optinal flag given to test the case insensitive regex

const string = "This is alpha aplha aplha beta gamma sting lapalapalpha";

console.log(regex.test(string));


//(2) Create a Regex variable and test it using Regex.test that the string exits in begining.

//Solution:- 
var regex = /^alpha/i   //here i is an optinal flag given to test the case insensitive regex //^ Flag is used for checking string at the begining

const string = "This is alpha aplha aplha beta gamma sting lapalapalpha";

console.log(regex.test(string));
