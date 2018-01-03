let binaryInput = "1111111111110001101000" //should be 5
var sum = 0
for(var i=0; i<binaryInput.length; i++){
  if(binaryInput[i] === "1"){
    sum += 2**(binaryInput.length - i - 1 )
  }
}

console.log(sum)
