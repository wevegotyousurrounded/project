document.addEventListener('DOMContentLoaded', () => {
    let specialsScrolledTo = false; 

    /**
     * Scroll vertically to the Specials section
     */
    const scrollToSpecials = () => {
        const specialsSection = document.querySelector('#specials-section');
        if (specialsSection) {
            specialsSection.scrollIntoView({ behavior: 'smooth' });
            specialsScrolledTo = true;
        } else {
            console.warn("Specials section not found!");
        }
    };

    /**
     * Scroll horizontally within the Specials section
     * @param {string} direction - "left" or "right"
     */
    const scrollSpecials = (direction) => {
        const specialsContainer = document.querySelector('.specials-container');
        const scrollAmount = 300; // Adjust scroll amount as needed
        if (specialsContainer) {
            specialsContainer.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        } else {
            console.warn("Specials container not found!");
        }
    };

    // Attach event listeners to buttons
    const downButton = document.querySelector('.scroll-button.down');
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');

    // Down Button: Scroll to Specials section
    if (downButton) {
        downButton.addEventListener('click', scrollToSpecials);
    } else {
        console.warn(".scroll-button.down not found!");
    }

    // Left/Right Buttons: Horizontal scrolling
    if (leftButton && rightButton) {
        leftButton.addEventListener('click', () => scrollSpecials('left'));
        rightButton.addEventListener('click', () => scrollSpecials('right'));
    } else {
        console.warn("Scroll buttons for horizontal navigation not found!");
    }

    /**
     * Background audio playback initialization
     */
    const backgroundAudio = document.getElementById('background-audio');
    let audioStarted = false;

    const startAudio = () => {
        if (!audioStarted && backgroundAudio) {
            backgroundAudio.muted = false;
            backgroundAudio.play()
                .then(() => {
                    console.log("Audio started playing.");
                    audioStarted = true;
                })
                .catch((error) => {
                    console.warn("Audio playback failed:", error);
                });
        }
    };

    // Trigger audio playback on user interaction
    window.addEventListener('scroll', startAudio);
    window.addEventListener('click', startAudio);
    window.addEventListener('mousemove', startAudio);
});

