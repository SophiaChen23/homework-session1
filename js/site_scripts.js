// Create the section element
var section = document.createElement("section");

// Create the unordered list element
var ul = document.createElement("ul");
ul.id = "partners";

// Create an array of partner image sources and alt texts
var partners = [
    { src: "images/partners/partner-bustour.png", alt: "Partner Bus Tours" },
    { src: "images/partners/partner-cabinrental.png", alt: "Partner Cabin Rental" },
    { src: "images/partners/partner-campingadv.png", alt: "Partner Camping Adventure" },
    { src: "images/partners/partner-collegetours.png", alt: "Partner College Tours" },
    { src: "images/partners/partner-rentalbike.png", alt: "Partner Bike Rentals" },
    { src: "images/partners/partner-tourgroup.png", alt: "Partner Tour Group" }
];

// Iterate through the partners array and create list items with images
for (var i = 0; i < partners.length; i++) {
    var partner = partners[i];

    // Create the list item element
    var li = document.createElement("li");
    li.className = "partner";

    // Create the image element
    var img = document.createElement("img");
    img.src = partner.src;
    img.alt = partner.alt;

    // Append the image element to the list item
    li.appendChild(img);

    // Append the list item to the unordered list
    ul.appendChild(li);
}

// Append the unordered list to the section
section.appendChild(ul);

// Append the section to the desired parent element in the document
var parentElement = document.getElementById("partners");
parentElement.appendChild(section);
