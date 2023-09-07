/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bookshelf = {
  name: "Bookshelf",
  noOfBooks: 250,
  shelves: 5,
  color: "black",
  numberOfBooksTopShelves: {
    left: 47,
    right: 30,
  },
};

console.log("Black Bookshelf", bookshelf);

var query = "numberOfBooksTopShelves";
console.log("How many books are on the top shelves?", bookshelf[query]);
