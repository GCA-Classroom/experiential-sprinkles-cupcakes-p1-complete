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
//PART 2 INSTRUCTOR DEMO

// 1. Select the Next Flavor button from the DOM

// 2. Attach an event listener to the button

// 3. Find the current displayed flavor name

// 4. Find the index of the current flavor in the array

// 5. Calculate the next flavor index (wrap around if at end)

// 6. Update the cupcake display with the next flavor

// Console log at each step to show how event-driven programming works
