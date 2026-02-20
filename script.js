const card = document.querySelector('.card');
const colorButtons = document.querySelectorAll('.color-btn');
const colorCodeText = document.querySelector('.color-code');

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedColor = button.getAttribute('data-color');
        card.style.backgroundColor = selectedColor;
        colorCodeText.textContent = `Current Color: ${selectedColor}`;
    });
});