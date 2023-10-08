class Novel {
    constructor(title, author, genre, pageCount) {
      this.title = title;
      this.author = author;
      this.genre = genre;
      this.pageCount = pageCount;
      this.isRead = false;
    }
  
    markAsRead() {
      this.isRead = true;
    }
  
    displayInfo() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Genre: ${this.genre}`);
      console.log(`Page Count: ${this.pageCount}`);
      console.log(`Status: ${this.isRead ? 'Read' : 'Unread'}`);
    }
  }
  
  class MysteryNovel extends Novel {
    constructor(title, author, pageCount, detective) {
      super(title, author, 'Mystery', pageCount);
      this.detective = detective;
      this.isSolved = false;
    }
  
    solveMystery() {
      this.isSolved = true;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Detective: ${this.detective}`);
      console.log(`Mystery Status: ${this.isSolved ? 'Solved' : 'Unsolved'}`);
    }
  }
  
  // Create novels
  const novels = [
    new Novel('To Kill a Mockingbird', 'Harper Lee', 'Drama', 281),
    new Novel('1984', 'George Orwell', 'Science Fiction', 328),
    new Novel('Pride and Prejudice', 'Jane Austen', 'Romance', 432),
    new Novel('The Great Gatsby', 'F. Scott Fitzgerald', 'Drama', 200),
    new Novel('The Hobbit', 'J.R.R. Tolkien', 'Fantasy', 310),
  ];
  
  // Create mystery novel
  const mysteryNovel = new MysteryNovel('Sherlock Holmes', 'Arthur Conan Doyle', 320, 'Sherlock Holmes');
  mysteryNovel.markAsRead();
  mysteryNovel.solveMystery();
  
  // Display information about novels
  novels.forEach((novel, index) => {
    console.log(`Novel ${index + 1}:`);
    novel.displayInfo();
    console.log('\n');
  });
  
  // Display information about the mystery novel
  console.log('Mystery Novel:');
  mysteryNovel.displayInfo();

//   2nd Class
  class Utensil {
    constructor(name, material, color, isClean, isSharp) {
      this.name = name;
      this.material = material;
      this.color = color;
      this.isClean = isClean;
      this.isSharp = isSharp;
    }
  
    // Method to clean the utensil
    clean() {
      this.isClean = true;
    }
  
    // Method to use the utensil
    use() {
      this.isClean = false;
    }
  
    // Method to check if the utensil is suitable for cutting
    isSuitableForCutting() {
      return this.isSharp && this.material === 'Metal';
    }
  
    // Method to paint the utensil
    paint(newColor) {
      this.color = newColor;
    }
  
    // Method to display information about the utensil
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Material: ${this.material}`);
      console.log(`Color: ${this.color}`);
      console.log(`Clean: ${this.isClean ? 'Yes' : 'No'}`);
      console.log(`Sharp: ${this.isSharp ? 'Yes' : 'No'}`);
    }
  }
  
  //5 objects of the Utensil class
  const spoon = new Utensil('Spoon', 'Metal', 'Silver', true, false);
  const knife = new Utensil('Knife', 'Metal', 'Steel', true, true);
  const fork = new Utensil('Fork', 'Plastic', 'White', true, false);
  const chopsticks = new Utensil('Chopsticks', 'Wood', 'Brown', true, false);
  const ladle = new Utensil('Ladle', 'Metal', 'Stainless Steel', false, false);
  
  // Using methods and accessing attributes of the utensils
  spoon.use();
  knife.clean();
  fork.paint('Red');
  chopsticks.use();
  ladle.clean();
  
  // Display information about each utensil
  spoon.displayInfo();
  knife.displayInfo();
  fork.displayInfo();
  chopsticks.displayInfo();
  ladle.displayInfo();


//   3rd class
class AlcoholicBeverage {
    constructor(name, type, alcoholContent, volume, isCarbonated) {
      this.name = name;
      this.type = type;
      this.alcoholContent = alcoholContent;
      this.volume = volume;
      this.isCarbonated = isCarbonated;
    }
  
    // Method to open the beverage
    open() {
      console.log(`${this.name} is now open.`);
    }
  
    // Method to pour the beverage
    pour() {
      console.log(`Pouring ${this.volume} ml of ${this.name}.`);
    }
  
    // Method to check if the beverage is strong
    isStrong() {
      return this.alcoholContent >= 10;
    }
  
    // Method to chill the beverage
    chill() {
      console.log(`${this.name} is now chilled.`);
    }
  
    // Method to display information about the beverage
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Type: ${this.type}`);
      console.log(`Alcohol Content: ${this.alcoholContent}%`);
      console.log(`Volume: ${this.volume} ml`);
      console.log(`Carbonated: ${this.isCarbonated ? 'Yes' : 'No'}`);
    }
  }
  
  // Creating 5 objects of the AlcoholicBeverage class
  const beer = new AlcoholicBeverage('Beer', 'Lager', 5, 330, true);
  const wine = new AlcoholicBeverage('Wine', 'Red Wine', 12, 750, false);
  const whiskey = new AlcoholicBeverage('Whiskey', 'Scotch', 40, 50, false);
  const vodka = new AlcoholicBeverage('Vodka', 'Clear Spirit', 40, 700, false);
  const rum = new AlcoholicBeverage('Rum', 'Dark Rum', 35, 750, false);
  
  // Using methods and accessing attributes of the alcoholic beverages
  beer.open();
  wine.pour();
  whiskey.chill();
  vodka.open();
  rum.pour();
  
  // Display information about each alcoholic beverage
  beer.displayInfo();
  wine.displayInfo();
  whiskey.displayInfo();
  vodka.displayInfo();
  rum.displayInfo();




  