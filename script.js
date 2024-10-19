const messages = [
    "From the moment I met you, I knew you were someone special. My feelings for you have only grown stronger each day.",
    "I admire your kindness, your laughter, and the way you make everyone around you feel valued. You mean so much to me.",
    "Every time I see you, my heart skips a beat. I hope one day you'll see me the way I see you.",
    "You've brought so much joy into my life, and I can't help but feel that we have something truly special.",
    "Being around you makes me feel like I'm home. I cherish every moment we spend together.",
    "I think about you all the time, and every thought is filled with warmth and affection for you.",
    "You are my favorite person, and I can't imagine my life without you. I hope you feel the same way about me.",
    "Your smile lights up my world, and I can't wait to see what the future holds for us.",
    "I hope this message finds you well and brings a smile to your face, just like you do for me.",
    "You have a way of making everything better, and I just wanted to let you know how much you mean to me."
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('generate-message');
    const messageElement = document.getElementById('message');
    const loveLetter = document.getElementById('love-letter');

    let clickCount = 0;

    button.addEventListener('click', () => {
        clickCount++;
        const randomIndex = Math.floor(Math.random() * messages.length);
        const message = messages[randomIndex];
        
        if (clickCount === 1) {
            button.textContent = 'Click Again';
        }

        loveLetter.classList.remove('hidden');
        loveLetter.classList.add('show');
        messageElement.textContent = message;
    });
});