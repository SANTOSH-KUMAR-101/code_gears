//(1.0) Find the difference between Global Scope, Var Scope and let scope by using them at different places.
var name = "outside_var"

function name2(){
  console.log(`inside function var name is ${name}`); // outside var name is not visible inside
  var name = "inside_var";
  console.log(`inside function var name is ${name}`); // var name is inside only after declaration
return name;
}

console.log(name); //function var is not visible
name2();
  
