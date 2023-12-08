// Function use to sum of all elements tick
function calTotal() {
    // Select all elements with the class "input_element"
    const input_elements = document.querySelectorAll(".input_element");

    // Get HTML elements with id "ul_testing" and "total"
    const ul_testing_element = document.getElementById("ul_testing");
    const total_element = document.getElementById("total");

    // Initialize a variable to store total price
    let total_price = 0;

    input_elements.forEach((element) => {
        // Check if the elemrnt is checked
        if(element.checked === true) {
            // Create a new list item element
            const li_ele = document.createElement("li");

            li_ele.textContent = element.nextSibling.textContent;

            // Extract the price from the text content of next sibling
            const price_raw = element.nextSibling.nextSibling.textContent.charAt(0);
            const price = parseInt(price_raw);

            // Add the price 
            total_price += price;

            ul_testing_element.appendChild(li_ele);
        }
    });

    total_element.textContent = "Total amount: " + total_price;
}