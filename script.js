const ans = document.querySelector(".ans");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no"); // Update to .option2

yes.addEventListener("click", function() {
    ans.style.display = "block";
});

no.addEventListener("click", function() {
    // Generate random values for positioning
    const randomLeft = Math.random() * (window.innerWidth - no.offsetWidth);
    const randomTop = Math.random() * (window.innerHeight - no.offsetHeight);

    // Calculate the maximum allowed positions to keep the button within the screen
    const maxLeft = window.innerWidth - no.offsetWidth;
    const maxTop = window.innerHeight - no.offsetHeight;

    // Apply the random position within the screen boundaries
    no.style.transform = `translate(${Math.min(randomLeft, maxLeft)}px, ${Math.min(randomTop, maxTop)}px)`;
});
