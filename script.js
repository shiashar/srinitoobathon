// Initialize variables for laundry items
let laundryItems = {
    "shirts": 0,
    "pants": 0,
    "socks": 0,
    "underwear": 0
  };
  
  // Function to add items to laundry
  function addItem(item) {
    laundryItems[item] += 1;
    console.log(`${item} added to laundry.`);
    console.log(laundryItems);
  }
  
  // Function to remove items from laundry
  function removeItem(item) {
    if (laundryItems[item] > 0) {
      laundryItems[item] -= 1;
      console.log(`${item} removed from laundry.`);
      console.log(laundryItems);
    } else {
      console.log(`${item} not found in laundry.`);
    }
  }
  
  // Example usage
  addItem("shirts");
  addItem("pants");
  addItem("socks");
  removeItem("socks");
  removeItem("underwear");
  