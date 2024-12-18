# RhinoDojo

## The switcher

Create a function that takes an array of string as argument. 
The function should always return True, but if the word “Switch” is found during iterration, then the return should be False for the current and every next iterration until another Switch doesn’t appear and turns the return value to True.

### Examples
```
['john', 'doe', 'bob', 'switch', 'hack'] ➞ [true, true, true, false, false]

['switch', 'javascript', 'coding', 'challenges'] ➞ [False, False, False, False]

['fishing', 'switch', 'hackers', 'emails', 'switch'] ➞ [True, True, False, False, True]
```

