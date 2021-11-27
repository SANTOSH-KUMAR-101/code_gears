// (1) Use for in loop in self defined problem

let obj = {
  "name" : "Santosh"
  ,"Class" : 12}

for( var iter in obj){
   console.log(iter);
  if (iter == "name"){
    console.log(obj[iter]);   // console.log(obj.iter); not valid form of property testing
  } 
  
 }; //Iterates throught the property
