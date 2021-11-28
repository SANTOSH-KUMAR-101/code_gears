//(3.0) Find the difference between var Scope outside and inside block scope.

var a = "Global Value";

if(a== undefined){
  console.log(`If statement says the value of a inside Block: ${a}`);
  var a = "Local Scope";
}
else{
  console.log(`Else statement says the value of a inside Block: ${a}`);
var a = "Local Scope";}


console.log(`The value of a outside Block: ${a}`);

//var variables behave as a global scope inside the Block Scope and different in Function Scope












//(2.0) Find the difference between Global Scope outside and inside function scope.
name = "global_var";

function name2(){
  console.log(`Inside function var name is ${name}`); // Now outside name is visible inside function scope
  name = "local_var";
  console.log(`After local insertion the inside function var name is ${name}`);
return name;
}


console.log(`The value of var after function call: ${name2()}`); // Value of varible taken inside the function
console.log(`The value of var ${name}`); // Function name is visible outside

//The Global Var changes values and it is accessible inside function.






//(1.0) Find the difference between Var Scope outside and inside function scope
var name = "outside_var"

function name2(){
  console.log(`Inside function var name is ${name}`); // outside var name is not visible inside
  var name = "inside_var";
  console.log(`After local insertion the inside function var name is ${name}`); // var name is inside only after declaration
return name;
}

console.log(`The value of var after function call: ${name2()}`); // Value of varible taken inside the function
console.log(`The value of var ${name}`);
 // var name is not accessible inside the function scope
// if you setup a var value inside function then output will be according to that varibale only
// outside var value doesnot changes
