// WAP to remove white spaces from a string.
const removeWhitespace=(str)=>{
return str.split("").filter(char=>char!==" ").join("")
}
console.log(removeWhitespace("asad asd   adf")) //o/p:-asadasdadf
