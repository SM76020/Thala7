document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('input');
    const checkButton = document.getElementById('check-button');

    inputField.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (form submission)
            checkInput();
        }
    });

    checkButton.addEventListener('click', checkInput);
});

function checkInput() {
    const userInput = document.getElementById('input').value;

    if (!userInput) {
        alert('Please enter a valid input!');
        return;
    }

    const digits = userInput.replace(/[^0-9]/g, '');
    const letters = userInput.replace(/[^a-zA-Z]/g, '');
    const sum = digits.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const length = letters.length;

    const resultContainer = document.getElementById('result');
    const imageContainer = document.getElementById('image-container');
    const oopsMessage = document.getElementById('oops');
    const audio = document.getElementById('audio');

    resultContainer.innerHTML = '';
    imageContainer.innerHTML = '';
    oopsMessage.innerHTML = '';

    // Check if sum of digits is 7, or length of letters is 7, or length of digits is 7, or userInput is exactly 7 digits
    if (sum === 7 || length === 7 || digits.length === 7 || (digits.length === 7 && letters.length === 0)) {
        resultContainer.innerHTML = 'Thala for a Reason';
        resultContainer.classList.add('show');
        imageContainer.style.display = 'flex';

        // Add MS Dhoni photos
        for (let i = 1; i <= 7; i++) {
            const img = document.createElement('img');
            img.src = `msdhoni${i}.jpg`; // Replace with your actual image filenames
            img.alt = `MS Dhoni ${i}`; // Adding alt attribute for accessibility
            img.style.maxWidth = '100px'; // Adjust the style as needed
            img.style.margin = '5px'; // Adjust the style as needed
            imageContainer.appendChild(img);

            // Log for debugging purposes
            console.log(`Image ${i} src: ${img.src}`);
        }

        // Play the audio if it's not already playing
        if (audio.paused) {
            audio.play();
        }
    } else {
        oopsMessage.innerHTML = 'Oops!';
        oopsMessage.classList.add('show');

        // Pause the audio if it's currently playing
        if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0; // Reset the audio to the beginning
        }
    }
}
