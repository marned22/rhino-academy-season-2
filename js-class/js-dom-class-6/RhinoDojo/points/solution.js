function calculatePoints(results) {
    let totalPoints = 0;

    for(const result of results){
        const [team1Score, team2Score] = result.split(':').map(Number)

        if(team1Score > team2Score) {
            totalPoints += 3 
        } else if(team1Score < team2Score){
            totalPoints += 0
        } else {
            totalPoints += 1
        }
    };

    return totalPoints
}

const results = ['2:0', '1:1', '2:2', '0:3', '5:2']
console.log(calculatePoints(results));
