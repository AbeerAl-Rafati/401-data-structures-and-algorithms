


let validateBrackets =(string)=>{

let bracket1 =0
let bracket2 =0
let bracket3 =0


for( let i =0 ; i< string.length; i++){
  string[i] === '{' || string[i] === '}' && bracket1++;
  string[i] === '(' || string[i] === ')' && bracket2++;
  string[i] === '[' || string[i] === ']' && bracket3++;
}

if (bracket1 === 0 || bracket2 === 0 || bracket3 === 0){ return false}
if (bracket1 > 0 || bracket2 > 0 || bracket3 > 0){ 
   let valid = bracket1 %2 === 0 || bracket2 %2 === 0 || bracket3 %2 === 0 ?  true : false;


   return valid;
  
}
}