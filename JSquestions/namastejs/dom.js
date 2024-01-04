//DOM
//Document Object Model
//It is a representation of HTML document.
//It is a tree structure of nodes.
//Common DOM methods
//getElementById()
//getElementsByTagName()
//querySelector()
//querySelectorAll()
//createElement()
//createTextNode()

// Create a new element
const element = document.createElement("div");

// Set attributes for the element
element.setAttribute("id", "myDiv");
element.setAttribute("class", "myClass");

// Add text content to the element
element.textContent = "Hello, World!";

// Append the element to the document body
document.body.appendChild(element);

// Remove the element from the document
element.remove();
