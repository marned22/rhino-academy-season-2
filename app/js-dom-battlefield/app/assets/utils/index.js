const ROUNDS = 3;

/**
 * Helpers
 */
function getChallenge() {
  const index = Math.floor(Math.random() * challenges.length);
  return challenges[index];
}

function getRandomChallenge(usedChallenges) {
  const availableChallenges = challenges.filter(challenge => !usedChallenges.includes(challenge));
  if (availableChallenges.length === 0) {
    return null; // No more challenges available
  }
  const randomIndex = Math.floor(Math.random() * availableChallenges.length);
  return availableChallenges[randomIndex];
}
