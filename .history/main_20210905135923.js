var fruits = {

  apple: 10,
  orange: 20,
  grapes: 30,
  pineapple: 40

}

var totalVegetables = Object.values(fruits).reduce((a, b) => a + b, 0)
console.log(totalVegetables)