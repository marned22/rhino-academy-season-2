# RhinoDojo

## Points

Create a function that takes a list of game results and returns the number of points for the team (team1).

### Rules
The data we have for each match is represented as an array of string where each match results is defined as `team1:team2`. We need to calculate the total points of `team1`.

For each match the points awarded are the following:

```
if team1 > team2: 3 points
if team1 < team2: 0 points
if team1 = team2: 1 point
```


#### Examples
```
['2:0', '1:1', '2:2', '0:3', '5:2']
```

