# RhinoDojo

## Check same case

Write a function that will check if two given characters are the same case.

### Requirements
If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0

*Make sure that the function returns a value*

### Examples
```
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
```

### Helpers

```
const isUpperCase = letter => /^[A-Z]$/.test(letter);
const isLowerCase = letter => /^[a-z]$/.test(letter);
```
