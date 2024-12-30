function calculatePoints(results) {
  let totalPoints = 0;

  for (let i = 0; i < results.length; i++) {
    const result = results[i];

    const team1Score = parseInt(result.charAt(0));
    const team2Score = parseInt(result.charAt(2));
    
    if (team1Score > team2Score) {
      totalPoints += 3;
    } else if (team1Score < team2Score) {
      totalPoints += 0;
    } else {
      totalPoints += 1;
    }
  }

  return totalPoints;
}

const results = ["2:0", "1:1", "2:2", "0:3", "5:2"];
console.log(calculatePoints(results));
