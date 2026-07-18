const facts = [
    "I was born in Drogheda, Ireland.",
    "I moved to Florida when I was five years old.",
    "I study Graphic Design at UCF.",
    "I enjoy cooking and baking.",
    "I like watercolour painting.",
    "I have had 12 orthopedic surgeries"
];

const button = document.getElementById("factButton");
const fact = document.getElementById("funFact");

button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * facts.length);
    fact.textContent = facts[randomIndex];
});

//* A random fun fact button *//
