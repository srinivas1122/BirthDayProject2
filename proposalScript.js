function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 150 + 'vw';
        confetti.style.animationDuration = Math.random() * 1 + 2 + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Trigger confetti when the page loads
window.onload = createConfetti;