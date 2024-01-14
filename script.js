function checkInput() {
    const userInput = document.getElementById('input').value;

    if (!userInput) {
        alert('Please enter a valid input!');
        return;
    }

    const sum = userInput.replace(/[^0-9]/g, '').split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    const length = userInput.replace(/[^a-zA-Z]/g, '').length;

    const resultContainer = document.getElementById('result');
    const imageContainer = document.getElementById('image-container');
    const oopsMessage = document.getElementById('oops');
    const audio = document.getElementById('audio');

    resultContainer.innerHTML = '';
    imageContainer.innerHTML = '';
    oopsMessage.innerHTML = '';

    if (sum === 7 || length === 7) {
        resultContainer.innerHTML = 'Thala for a Reason';
        resultContainer.classList.add('show');
        imageContainer.style.display = 'flex';

        // Add MS Dhoni photos
        for (let i = 1; i <= 7; i++) {
            const img = document.createElement('img');
            img.src = `msdhoni${i}.jpg`; // Replace with your actual image filenames
            imageContainer.appendChild(img);
        }

        // Play the audio if it's not already playing
        if (audio.paused) {
            audio.play();
        }
    } else {
        oopsMessage.innerHTML = 'Oops!';
        
        // Pause the audio if it's currently playing
        audio.pause();
    }
}
