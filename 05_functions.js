// (1.0) Create a function that takes any number of arguments and adds it up

function addingMachine() {
  var sum = 0;
  var length = arguments.length;
  console.log(`Argument length is ${length}`);
  if (length == 0) {
    console.log(`Present Sum is 0; Give the machine numbers to add`);
    return;
  }

  for (let i = 0; length > i; i += 1) {
    var number = arguments[i];
    sum += number;
  }
  console.log(`${sum}`);
}

addingMachine(9, 11, 56);




    
    
 
