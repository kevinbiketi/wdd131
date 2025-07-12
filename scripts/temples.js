// Toggle hamburger menu
const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    if (navigation.style.display === "flex") {
        navigation.style.display = "none";
        menuButton.innerHTML = "&#9776;";
    } else {
        navigation.style.display = "flex";
        menuButton.innerHTML = "✖";
    }
});

// Set footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
