const tips = [
    "Save water by fixing leaks.",
    "Use reusable bags to reduce plastic waste.",
    "Switch to energy-efficient appliances.",
    "Plant trees to improve air quality.",
    "Switch off lights when not in use.",
    "Eat locally grown food to reduce your carbon footprint."
];

const button = document.getElementById('get-tip-button');
const tipDisplay = document.getElementById('tip-display');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipDisplay.textContent = tips[randomIndex];
});
