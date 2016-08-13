var sum = 1
var lastSum = 1
var result = 0
while(lastSum < 4000000){
if(lastSum%2 == 0){
  result = lastSum + result
  console.log(result)
}

  var nextSum = sum +lastSum
  lastSum = sum
  sum = nextSum
}
