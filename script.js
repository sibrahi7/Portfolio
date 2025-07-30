// This script toggles the "Learn More" section when the button is clicked.

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggleLearnMore");
    const learnMoreSection = document.getElementById("learn-more");

    toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    learnMoreSection.classList.toggle("show");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contactBtn");
    const contactSection = document.getElementById("contact");

    if (contactBtn && contactSection) {
    contactBtn.addEventListener("click", function (e) {
        e.preventDefault();
        contactSection.scrollIntoView({ behavior: "smooth" });
    });
    }
});
