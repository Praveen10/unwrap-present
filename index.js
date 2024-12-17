document.addEventListener('DOMContentLoaded', () => {
    const gift = document.getElementById('gift');
    const message = document.getElementById('message');
    let isUnwrapped = false;
    let resetTimeout;

    function setupGift() {

        gift.addEventListener('mouseenter', () => {
            if (!isUnwrapped) {
                gift.classList.add('shake');
            }
        });
    
        gift.addEventListener('mouseleave', () => {
            gift.classList.remove('shake');
        });

        gift.addEventListener('click', unwrapGift);
    }


    function unwrapGift() {
        if (!isUnwrapped) {
            isUnwrapped = true;
            // gift.classList.remove('shake');
            gift.style.display = 'none';
            message.style.display = 'block';
            createConfetti();
            resetTimeout = setTimeout(resetGift, 6000);
        }
    };

    function resetGift() {
        isUnwrapped = false;
        gift.style.display = 'block'; 
        message.style.display = 'none'; 
        removeConfetti(); 
        clearTimeout(resetTimeout); 
    }

    function createConfetti() {
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(confetti);
        }
    }

    function removeConfetti() {
        const confetti = document.querySelectorAll('.confetti');
        confetti.forEach(c => c.remove());
    }

    setupGift();
});
