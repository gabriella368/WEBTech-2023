const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      state: 'NY'
    }
  };
  
  const newPerson = JSON.parse(JSON.stringify(person));
  
  newPerson.age = 31;
  
  console.log("The age of the first person: ", person.age); // 30
  
  newPerson.address.city = 'San Francisco';
  
  console.log("The city of the first person: ", person.address.city); // New York
  