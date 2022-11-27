const brain = require("brain.js");
const iris = require("./iris.json");
const net = new brain.NeuralNetwork({hiddenLayers: [3]});
let data = [];
for (let i = 0; i < iris.length; i++) {
  data.push({
    input: {
      sepal_length: iris[i].sepal_length / 10,
      sepal_width: iris[i].sepal_width / 10,
      petal_length: iris[i].petal_length / 10,
      petal_width: iris[i].petal_width / 10
    }
  })
  data[i].output = {};
  data[i].output[iris[i].species] = 1;
};
const train = net.train(data);
const result = brain.likely({ 
      sepal_length: 1,
      sepal_width: 2,
      petal_length: 3,
      petal_width: 4
    }, net);
console.log(`Вид ириса: ` + result);