document.addEventListener("DOMContentLoaded", () => {
    
    const heroButton = document.querySelector("#hero button");
    
    if (heroButton) {
        heroButton.addEventListener("click", () => {
            alert("Welcome to my digital craft! Decoding the future with DecodeLabs.");
        });
    }

});