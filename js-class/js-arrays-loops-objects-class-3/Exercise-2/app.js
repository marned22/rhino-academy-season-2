function processNames(names) {
    const filteredNames = names.filter((name) => name.length > 3).map(name => name.toUpperCase());
    return filteredNames
}

const names = ["Martin", "Zlate", "Mia", "Bo", "Viktor"]
const perfectNames = processNames(names)
console.log(perfectNames);

