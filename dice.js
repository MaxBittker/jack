// Peter has nine four-sided (pyramidal) dice, each with faces numbered 1, 2, 3, 4.
// Colin has six six-sided (cubic) dice, each with faces numbered 1, 2, 3, 4, 5, 6.

var rollDice = (sides) => {
  return (Math.random()*sides |0)+1
}


var sumDice = (number,sides) => {
  var sum = 0
  for(var i=0; i<number; i=i+1){
    sum = sum + rollDice(sides)
  }
  return sum
}
var peteWins =0

for(var trial=0; trial<Infinity;trial++){
  if(sumDice(9,4)>sumDice(6,6)){
    peteWins++
  }

  if((trial%1000000)==0){
    console.log(peteWins/trial)
  }
}
