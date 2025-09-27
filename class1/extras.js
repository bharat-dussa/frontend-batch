const chaiPatthi = "Tata Tea";
const milk = "Amul Milk";
const litres = "2";
const sugar = "sugar";
const water = "water";
const quantity = "2";

function VinayMakingChai(chaiPatthi, milk, litres, sugar, water, quantity) {
  const stove1 = "stove";

  if (stove1 === "stove") {
    console.log("stove is on");
  } else {
    console.log("stove is off");
  }

  if ((milk === "Amul Milk" && chaiPatthi === "Tata Tea") || sugar) {
    console.log("Pour milk into bowl & add chai patthi");

    // Template literals
    console.log(`Pour ${quantity} milk into bowl & add chai patthi`);
  } else {
    console.log("Nenu Chai petta");
  }

  if (water) {
    if (quantity) {
      // String Concatenation
      console.log("Pour " + quantity + " litres of water into bowl");
    } else {
      console.log("Pour water into bowl");
    }
  } else {
    console.log("Do same as it is");
  }
  // console.log("chai is ready");
}

VinayMakingChai(chaiPatthi, milk, "", "", water, quantity);
