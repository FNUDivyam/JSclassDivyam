let pizza
function orderPizza() {
  console.log("Order pizza")
  setTimeout(() => {
    pizza = 'pizza'
  }, 2000)
  console.log("pizza was ordered")
}
orderPizza()
console.log(`Eat ${pizza}`)