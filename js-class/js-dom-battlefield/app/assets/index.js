let p1Username = "";
let p2Username = "";

const startGameBtn = document.getElementById("start-game-button");
const newGameBtn = document.getElementById("new-game-button");
const leaderboard = document.getElementById("leaderboard-button");

// Players configuration
const players = [
  {
    joinBtn: document.getElementById("p1-join-btn"),
    userModal: document.getElementById("p1-username-modal"),
    userInput: document.getElementById("p1-username-input"),
    usernameSubmitBtn: document.getElementById("p1-submit-button"),
    readyLabel: document.getElementById("p1-ready-label"),
    userLabel: document.getElementById("p1-label"),
    challengeContainer: document.getElementById("p1-challenge-container"),
    nextButton: document.getElementById("p1-next-btn"),
    setUsername: (username) => {
      p1Username = username;
    },
    getUsername: () => {
      return p1Username;
    },
    getOtherPlayer: () => {
      return p2Username;
    },
    score: 0,
    winPoints: 0,
    challengeCounter: 0,
  },
  {
    joinBtn: document.getElementById("p2-join-btn"),
    userModal: document.getElementById("p2-username-modal"),
    userInput: document.getElementById("p2-username-input"),
    usernameSubmitBtn: document.getElementById("p2-submit-button"),
    readyLabel: document.getElementById("p2-ready-label"),
    userLabel: document.getElementById("p2-label"),
    challengeContainer: document.getElementById("p2-challenge-container"),
    nextButton: document.getElementById("p2-next-btn"),
    setUsername: (username) => {
      p2Username = username;
    },
    getUsername: () => {
      return p2Username;
    },
    getOtherPlayer: () => {
      return p1Username;
    },
    score: 0,
    winPoints: 0,
    challengeCounter: 0,
  },
];

function revealScores() {
  const views = document.querySelectorAll(".score-container");
  views.forEach((view, idx) => {
    const player = players[idx];
    player.challengeContainer.remove();

    view.innerHTML = `
       <div class="score">
        <p><span id="p${idx + 1}-label">${player.getUsername() || `Player ${idx + 1}`}</span> Score: 
        <span id="p${idx + 1}-score">${player.score} ${player.score === 1 ? "point" : "points"}</span></p>
      </div>
    `;
  });
}

function markTheWinner() {
  const scores = players.map((player) => player.score);
  const maxScore = Math.max(...scores);

  let winnerIndex = -1;
  let winnerCount = 0;

  // Find the winner
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      winnerIndex = i;
      winnerCount++;
    }
  }

  if (winnerCount === 1) {
    players[winnerIndex].winPoints += 3;  
  }
}



function setPlayerContainerStyles(playerIdx) {
  const viewContainers = document.querySelectorAll(".player-view-container");
  viewContainers.forEach((view, idx) => {
    if (idx === playerIdx) {
      view.classList.add("active");
      view.classList.remove("disabled");
    } else {
      view.classList.add("disabled");
      view.classList.remove("active");
    }
  });
}

function gameOver() {
  const title = document.querySelector(".title");
  const titleCloned = title.cloneNode(true);
  titleCloned.textContent = "Game Over";
  // title.insertAdjacentElement('beforebegin', titleCloned);
  title.before(titleCloned);
  
  startGameBtn.disabled = true;
  startGameBtn.style.display = "none";

  leaderboard.disabled = false;
  leaderboard.style.display = "block";

  newGameBtn.disabled = false;
  newGameBtn.style.display = "block";

}

players.forEach((player) => {
  player.joinBtn.addEventListener("click", () => {
    player.userModal.style.display = "flex";
  });

  player.usernameSubmitBtn.addEventListener("click", () => {
    let username = player.userInput.value;
    if (username && player.getOtherPlayer() !== username) {
      player.setUsername(username);
      player.readyLabel.textContent = "Ready!";
      player.userModal.style.display = "none";
      player.joinBtn.style.display = "none";
      player.userLabel.textContent = username;
      if (username && player.getOtherPlayer())
        startGameBtn.style.display = "block";
    }
  });
});

function gameStart() {
  startGameBtn.disabled = true;
  startGameBtn.style.display = 'none'
  leaderboard.disabled = true;

  let currentPlayerIndex = 0;
  const usedChallenges = [];

  function nextChallenge() {
    const player = players[currentPlayerIndex];
    const isGameOver = currentPlayerIndex >= players.length;

    if (isGameOver) {
      markTheWinner();
      gameOver();
      revealScores();
      return;
    }

    if (player.challengeCounter >= ROUNDS - 1) {
      currentPlayerIndex += 1;
      player.challengeContainer.innerHTML = "Done";
      nextChallenge();
      return;
    }

    const challenge = getRandomChallenge(usedChallenges);

    if (!challenge) {
      alert(`${player.getUsername()} has completed all challenges!`);
      return;
    }
    setPlayerContainerStyles(currentPlayerIndex);

    usedChallenges.push(challenge);
    player.challengeContainer.innerHTML = ""; 

    const question = document.createElement("p");
    question.textContent = "Question: " + challenge.question;
    player.challengeContainer.appendChild(question);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your answer here..";
    input.classList.add("player-input");
    player.challengeContainer.appendChild(input);

    const submitButton = document.createElement("button");
    submitButton.textContent =
      player.challengeCounter < ROUNDS - 2 ? "Next" : "Finish";
    submitButton.onclick = () => {
      if (challenge.validate(input.value)) {
        player.score += 5;
      } else if (input.value === "") {
        player.score -= 1;
      } else {
        player.score -= 2;
      }

      player.challengeCounter++;
      nextChallenge();
    };

    player.challengeContainer.appendChild(submitButton);
  }

  nextChallenge();
}

function updateLeaderboard() {
  const sortedPlayers = [...players].sort((a, b) => (b.score + b.winPoints) - (a.score + a.winPoints));

  const leaderboardContainer = document.getElementById("leaderboard-container");
  leaderboardContainer.innerHTML = "";

  sortedPlayers.forEach((player, index) => {
    const playerRow = document.createElement("div");
    playerRow.classList.add("leaderboard-row");

    const playerRank = document.createElement("span");
    playerRank.classList.add("rank");
    playerRank.textContent = `${index + 1}.`;

    const playerName = document.createElement("span");
    playerName.classList.add("player-name");
    playerName.textContent = player.getUsername();

    const playerScore = document.createElement("span");
    playerScore.classList.add("player-score");
    playerScore.textContent = `Win Points: ${player.winPoints}`;  

    playerRow.appendChild(playerRank);
    playerRow.appendChild(playerName);
    playerRow.appendChild(playerScore);

    leaderboardContainer.appendChild(playerRow);
  });
}


function newGame() {
  p1Username = "";
  p2Username = "";

  players.forEach((player, index) => {
    player.score = 0;
    player.challengeCounter = 0;
    player.setUsername("");  
    player.readyLabel.textContent = "Get ready...";
    player.userLabel.textContent = `Player ${index + 1}`;
    player.joinBtn.style.display = "block";
    player.joinBtn.disabled = false;
    player.userModal.style.display = "none";
    player.userInput.value = "";
    player.challengeContainer.innerHTML = "";
  });

  const leaderboardContainer = document.getElementById("leaderboard-container");
  leaderboardContainer.innerHTML = "";

  document.querySelectorAll(".score").forEach(scoreElement => scoreElement.remove());
  const gameOverTitle = document.querySelector(".title");
  if (gameOverTitle) gameOverTitle.remove();

  leaderboard.disabled = true;
  leaderboard.style.display = "none";

  newGameBtn.disabled = true;
  newGameBtn.style.display = "none";
  startGameBtn.disabled = false;
  startGameBtn.style.display = "block";
}


newGameBtn.addEventListener("click", () => {
  newGame()
})


startGameBtn.addEventListener("click", () => {
  gameStart()
});


leaderboard.addEventListener("click", updateLeaderboard);
