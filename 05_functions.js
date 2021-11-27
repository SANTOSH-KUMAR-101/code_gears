// (1.0) Create a function that takes any number of arguments and adds it up and returns the value in console

function addingMachine() {
  length = arguments.length;  // Arguments is well known by the function
  if (length == 0) {
    console.log(`Present Sum is 0; Give the machine numbers to add`);
    return;
  }

  let sum = 0;
  for (let i = 0; length > i; i += 1) {
    let number = arguments[i];
    sum += number;
  }
  return(`The sum of ${length} arguments is ${sum}.`);
}

addingMachine(9, 11, 56);




    
    
 
