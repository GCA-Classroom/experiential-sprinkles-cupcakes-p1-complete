// featured cupcake flavors array
let featuredFlavors = [
  {
    dayCode: 0,
    dayName: "sunday",
    name: "Blueberry Pie",
    img: "assets/blueberry-pie.jpg",
  },
  {
    dayCode: 1,
    dayName: "monday",
    name: "Matcha",
    img: "assets/matcha.jpg",
  },
  {
    dayCode: 2,
    dayName: "tuesday",
    name: "Reeses",
    img: "assets/reeses.jpg",
  },
  {
    dayCode: 3,
    dayName: "wednesday",
    name: "Strawberry Shortcake",
    img: "assets/strawberry.jpg",
  },
  {
    dayCode: 4,
    dayName: "thursday",
    name: "Smores",
    img: "assets/smores.jpg",
  },
  {
    dayCode: 5,
    dayName: "friday",
    name: "Banana Split",
    img: "assets/banana-split.jpg",
  },
  {
    dayCode: 6,
    dayName: "saturday",
    name: "Cannoli",
    img: "assets/cannoli.jpg",
  },
];

// find flavor object based on weekday using a loop
function findFlavorObject() {
  let todayCode = new Date().getDay();
  console.log(`Today's day code is: ${todayCode}`);
  for (let i = 0; i < featuredFlavors.length; i++) {
    if (featuredFlavors[i].dayCode === todayCode) {
      return featuredFlavors[i];
    }
  }
}

// Dev Shop code

// find correct flavor, select DOM element, change img src
function revealFlavor() {
  let flavorObject = findFlavorObject();
  let flavorImage = document.querySelector("#featured-cupcake-img");
  flavorImage.src = flavorObject.img;
  let flavorName = document.querySelector("#featured-cupcake-name");
  flavorName.innerText = flavorObject.name;
}

//PART 2 INSTRUCTOR DEMO - Show Random Flavor

// 1. Add a "Random Flavor" button to the HTML (#random-flavor-btn).
// Uncomment the code in index.html (line 478).

// 2. Select the button, cupcake name, and image elements from the DOM.

// 3. Create a variable to track which flavor is showing (start at 0).

// 4. Write code that updates the image and name based on the current flavor.

// 5. Run that code once when the page loads to show the first flavor.

// 6. Add a click event listener to the Random Flavor button.

// 7. When clicked: choose a random index from the array, update the display, and log the result.
