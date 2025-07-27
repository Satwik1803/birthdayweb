// Floating hearts animation
const heartContainer = document.getElementById('hearts');

// Make sure heart container exists
if (heartContainer) {
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '💖';

    // Random horizontal position (0 to 100vw)
    heart.style.left = Math.random() * 100 + 'vw';

    // Random font size between 20px and 40px
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';

    // Random animation duration (4s to 9s)
    heart.style.animationDuration = (Math.random() * 5 + 4) + 's';

    // Optional: add random opacity and animation delay
    heart.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 to 1
    heart.style.animationDelay = Math.random() * 2 + 's';

    heartContainer.appendChild(heart);

    // Remove heart after 8 seconds
    setTimeout(() => {
      heart.remove();
    }, 8000);
  }

  // Generate a new heart every 300ms
  setInterval(createHeart, 300);
}

