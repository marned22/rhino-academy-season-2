function processNames(names) {
    const longName = names.filter((name) => name.length > 3)
    const upperCassed = longName.map(name => name.toUpperCase());
    return upperCassed;
}

const names = ["Martin", "Zlate", "Mia", "Bo", "Viktor"]
const perfectNames = processNames(names)
console.log(perfectNames);

