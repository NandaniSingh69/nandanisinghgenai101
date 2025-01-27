// Array of fun facts
const facts = [
    "I love hiking and have traveled to five national parks.",
    "I am an avid reader and read around 20 books per year.",
    "I once baked a 3-tiered cake for a family gathering!",
    "I speak three languages fluently.",
    "I’m learning to play the guitar in my free time.",
    "I enjoy stargazing and can name 10 constellations.",
    "I’ve completed a half-marathon!",
    "I’m a huge fan of solving puzzles and escape rooms.",
    "I can make a perfect cup of coffee with latte art.",
    "I have a collection of over 50 unique postcards."
];

// Select the display area and button
const factDisplay = document.getElementById("fact-display");
const generateBtn = document.getElementById("generate-btn");

// Function to generate a random fact
function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factDisplay.textContent = facts[randomIndex];
}

// Add event listener to the button
generateBtn.addEventListener("click", generateFact);
