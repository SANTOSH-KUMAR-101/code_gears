// (3) Use ternary operator for resolution of head an toss case

// Sol:-
  
function toss(para){
  
  para=="head"
  ? console.log("team India won the toss") //doesnot take return as an executable function
  : console.log("Team England won the toss");}
  
  toss("tail");



// (2) Use a switch block to mark down the outcomes of the toss in a match

function toss(para = "no toss"){
  
  switch(para){
      
    case "no toss":
      console.log("let us toss the coin");
      break;
    
   case "head":
    console.log("Team India  won the toss");
    break;
      
    case "tail":
     console.log("Team Bangladesh won the toss");
     break;
      
      
    case "invalid":
     console.log("let us toss the coin again");
     break;}}
      
  toss("head");
//   toss("tail");
//    toss("no toss");
//    toss("invalid");

// (1) Cascading effect of Switch Block if no break statement

function toss(para = "no toss"){
  
  switch(para){
      
    case "no toss":
      console.log("let us toss the coin"); // If we have a matching statement then every other thing will be executed till,
                                           // we hit a break statement
      
    
   case "head":
    console.log("Team India  won the toss");
    break;
      
    case "tail":
     console.log("Team Bangladesh won the toss");
     break;
      
      
    case "invalid":
     console.log("let us toss the coin again");
     break;}}
      
  toss("head");


