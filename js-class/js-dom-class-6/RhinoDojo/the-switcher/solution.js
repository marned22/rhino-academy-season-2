function checkArr(array2) {
    let wordFind = true;
    const checkingArr = array2.map((arr) => {
        if (arr.includes("switch")) {
        wordFind = !wordFind;
        }
        return wordFind;
    });
    return checkingArr;
}

const array = ["john", "doe", "bob", "switch", "hack"];
const array1 = ["switch", "javascript", "coding", "challenges"];
const array2 = ["fishing", "switch", "hackers", "emails", "switch"];
console.log(checkArr(array2));
