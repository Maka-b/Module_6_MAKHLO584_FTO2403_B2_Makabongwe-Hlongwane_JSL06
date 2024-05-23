// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};
const menuPrices = {
    "Garlic Bread" : 20 ,
    "Bruschetta" : 15,
    "Margherita Pizza" : 14,
    "Spaghetti Carbonara" : 13,
    "Tiramisu" : 12,
    "Cheesecake" : 25
}


function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.getElementById("menu")

    // Loop through each category and its items in the menu object
    const menuCategory = Object.keys(menu)
    const menuItem = Object.values(menu) 
    
    
    

        // Create an element to represent the category

    //const listEl = document.createElement("ul") //declared outside functin for global scope
    for (i = 0 ; i < menuCategory.length; i++) {
        const categoryEl = document.createElement("h1")
        const listEl = document.createElement("ul")
        categoryEl.textContent = menuCategory[i]

        if (menuCategory[i] == "Starters"){
            listEl.setAttribute("id","starters" )
        }else if (menuCategory[i] == "MainCourses"){
            listEl.setAttribute("id","main-courses" )
        }else if (menuCategory[i] == "Desserts"){
            listEl.setAttribute("id","desserts" )
        }
        
        
        menuEl.append(categoryEl)
        //console.log(`${menuEl} i${i} `)
        menuEl.append(listEl)
        
    }
    
        // Set the text content of the category element to the category name
        // Append the category element to the menu container

    const startersEl = document.getElementById("starters")
    const mainCoursesEl = document.getElementById("main-courses")
    const dessertsEl = document.getElementById("desserts")

        // Create an element to represent a list of items
   
    for (i = 0; i < menuItem.length ; i++) {
        for (let x = 0; x < menuItem[i].length; x++){
            const itemEl = document.createElement("li")
            itemEl.textContent = menuItem[i][x] 
            let itemSnapShot = menuItem[i][x]
            itemEl.addEventListener("click", function() {
                addToOrder(itemEl)
                //console.log(itemEl.textContent)
        })

            //console.log(`${itemSnapShot} i:${i} x:${x}`)
            if (menuItem.indexOf(menuItem[i]) == 0 ) { //starters
                startersEl.appendChild(itemEl)
            }else if (menuItem.indexOf(menuItem[i]) == 1 ) { //starters
                mainCoursesEl.appendChild(itemEl)
            } else if (menuItem.indexOf(menuItem[i]) == 2 ) { //starters
                dessertsEl.appendChild(itemEl)
            }
    }

    }
    
        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items           
}
let total = 0;


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItems = document.getElementById("order-items")
    const orderTotal = document.getElementById("order-total")
    // Create a list item for the order
    const clickItemEl = document.createElement("li")
    clickItemEl.textContent = itemName.textContent
    orderItems.append(clickItemEl)
    // Set the text content of the list item to the item name
    // Append the list item to the order items list
    // Calculate and update the total price
    const items = Object.keys(menuPrices)
    const itemPrices = Object.values(menuPrices)
   // console.log(itemPrices)
   
   for (i = 0; i < itemPrices.length ; i++) {
        if (items[i] == itemName.textContent) {
              total += itemPrices[i];
            }
    }
    orderTotal.textContent = total
}
// Update the text content of the order total element with the new total

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu)
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu)
