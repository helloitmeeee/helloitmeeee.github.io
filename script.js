document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const question = document.getElementById("question");
    let yesButtonSize = 1.5; // Initial font size in rem
    
    const messages = [
        "Are you sure? 😢",
        "Please think again! 🥺",
        "I will be so sad... 😭",
        "Please think again! 🥺",
        "You might regret this... 😔",
        "Please think again! 🥺",
        "Last chance! 💔"
    ];
    let messageIndex = 0;

    noButton.addEventListener("click", () => {
        if (messageIndex < messages.length) {
            question.textContent = messages[messageIndex];
            messageIndex++;
        } else {
            question.textContent = "You still trying 😈";
        }
        yesButtonSize += 1.7;
        yesButton.style.fontSize = `${yesButtonSize}rem`;
        yesButton.style.padding = `${yesButtonSize * 10}px ${yesButtonSize * 20}px`;
    });

    yesButton.addEventListener("click", celebrate);

    function celebrate() {
        for (let i = 0; i < 100; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * window.innerWidth + "px";
            confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
            confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 5000);
        }
        setTimeout(() => window.location.href = 'thankyou.html', 3000);
    }
});
