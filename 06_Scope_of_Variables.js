//(2.0) Find the difference between Global Scope outside and inside function scope.
name = "outside_var"

function name2(){
  console.log(`inside function var name is ${name}`); // Now outside name is visible inside function scope
  name = "inside_var";
  console.log(`inside function var name is ${name}`);
return name;
}


name2(); 
console.log(name); // Function name is visible outside









//(1.0) Find the difference between Var Scope outside and inside function scope
var name = "outside_var"

function name2(){
  console.log(`inside function var name is ${name}`); // outside var name is not visible inside
  var name = "inside_var";
  console.log(`inside function var name is ${name}`); // var name is inside only after declaration
return name;
}

console.log(name); //function var is not visible
name2();
  
