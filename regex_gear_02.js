//(1) Create a Regex variable and test it using Regex.test

//Solution:- 
var regex = /alpha/i   //here i is an optinal flag given to test the case insensitive regex

const string = "This is alpha aplha aplha beta gamma sting lapalapalpha";

console.log(regex.test(string));
