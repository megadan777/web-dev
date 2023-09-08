/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class wardrobe {
  constructor(
    //defining whats in the wardrobe
    shirts,
    pants,
    shoes,
    hats,
    scarves,
    underwear,
    socks,
    drawsLeft,
    drawsRight,
    doorClosed
  ) {
    this.shirts = shirts;
    this.pants = pants;
    this.shoes = shoes;
    this.hats = hats;
    this.scarves = scarves;
    this.underwear = underwear;
    this.socks = socks;
    this.draws = {
      left: drawsLeft,
      right: drawsRight,
    };
    this.doorClosed = doorClosed;
  }
  toggledoor(doorStatus) {
    this.doorOpen = doorStatus;
  }
}

console.log("The wardrobe contains:", wardrobe);
console.log();
