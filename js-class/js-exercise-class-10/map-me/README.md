# Complementary Key Mapping

In this exercise, you need to create a function that converts a string of letters into their "shifted" keyboard equivalents based on a predefined mapping.

---

## Concept
Imagine a keyboard where each key has a complementary counterpart:

The left side of the keyboard's alphabet (Q,W,E,R,T,Y...) maps to the corresponding alphabet letter (A,B,C,D,E,F...).

### Mapping Rules
Here’s the mapping you’ll use:
```
A → Q, B → W, C → E, ..., Z → M.

```
Other letters and symbols (e.g., spaces, punctuation) remain unchanged.

---
## Requirements
The function should handle both uppercase and lowercase letters.
Example: A → Q, a → q.
Non-alphabetic characters (like numbers or punctuation) should remain as is.
The input string will always be non-empty.

---
## Examples
Input → Output
```
"AMAZON" → "QDQMGF"
"HELLO" → "ITSSG"
"hello" → "itssg"
"A QUICK BROWN FOX" → "Q JXOEA WKGVF YGB"
```
