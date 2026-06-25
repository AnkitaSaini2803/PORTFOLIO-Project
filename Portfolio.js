// Hire Me Button

const hireBtn = document.getElementById("hireBtn");

hireBtn.addEventListener("click", () => {
    alert("Thank you for visiting my portfolio!");
});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    alert("Message Sent Successfully!");

    contactForm.reset();

});