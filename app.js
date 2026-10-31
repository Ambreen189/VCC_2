
// Display a welcome message in the browser console.
console.log("Welcome to Ambreen's Developer Portfolio!");

// Highlight the current page in the navigation menu.
var currentPage = window.location.pathname.split("/").pop();

if (currentPage === "") {
    currentPage = "index.html";
}

var navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {
    var linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});

// Display the current year in the footer.
var footerText = document.querySelector("footer p");

if (footerText) {
    footerText.innerHTML =
        "&copy; " + new Date().getFullYear() +
        " Ambreen Saleem. All rights reserved.";
}
