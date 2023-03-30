const { Map } = require('immutable');

const person = Map({
  name: 'John',
  age: 30,
  address: Map({
    city: 'New York',
    state: 'NY'
  })
});

const newPerson = person.set('age', 31);

const newerPerson = newPerson.setIn(['address', 'city'], 'San Francisco');

console.log("The age of the first person: ", person.get('age')); // 30

console.log("The city of the first person: ", person.getIn(['address', 'city'])); // New York
