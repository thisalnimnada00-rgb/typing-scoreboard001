let count = 0;

const typingBox = document.getElementById("typingBox");
const counter = document.getElementById("count");

typingBox.addEventListener("keydown", () => {
    count++;
    counter.textContent = count;
});
function saveScore() {

    const name = prompt("Enter your name");

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.push({name: name, score: count});

    localStorage.setItem("scores", JSON.stringify(scores));

    showScores();
}

function showScores() {

    const scoreboard = document.getElementById("scoreboard");

    scoreboard.innerHTML = "";

    let scores = JSON.parse(localStorage.getItem("scores")) || [];

    scores.sort((a,b) => b.score - a.score);

    scores.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player.name + " : " + player.score;
        scoreboard.appendChild(li);
    });

}