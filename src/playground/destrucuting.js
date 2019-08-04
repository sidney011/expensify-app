//
//  Object destructuring
//

// const person = {
//   name: "Sidney",
//   age: 27,
//   location: {
//     city: "Metz",
//     temp: 28
//   }
// };

// const { name: firstName = "Anonymous", age } = person

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-published"} = book.publisher;

console.log(publisherName);

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'New York'];

const [street, city, state = "California"] = address;
console.log(`You are in ${city} ${state}.`)

const item = ['Coffee (ice)', '$2.00', '$3.50', '$2.75'];

const [itemName, ,mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);