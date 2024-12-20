// TODO: Add your code here
const alphabet = {
    A: "Q",
    B: "W",
    C: "E",
    D: "R",
    E: "T",
    F: "Y",
    G: "U",
    H: "I",
    I: "O",
    J: "P",
    K: "A",
    L: "S",
    M: "D",
    N: "F",
    O: "G",
    P: "H",
    Q: "J",
    R: "K",
    S: "L",
    T: "Z",
    U: "X",
    V: "C",
    W: "V",
    X: "B",
    Y: "N",
    Z: "M",
  };  


  function invert(input) {
    const inputArray = input.split("")
    for(let i = 0; i < input.length; i++){
        let name = inputArray[i] 
        alphabet[name]
        
        }
    return inputArray
  }

  console.log(invert("AMAZON"))