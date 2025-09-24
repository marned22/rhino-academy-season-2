const birthDates = ['1990-01-01', '1991-01-01', '1993-01-01', '1992-01-01'];
let intervals = birthDates.length - 1;
const sortedDates = birthDates.toSorted();
let intervals2 = sortedDates.length - 1;

function printTimeout() {
  addBirthDate(new Date(birthDates[intervals]));
  if (intervals-- > 0) {
    setTimeout(printTimeout, 3000);
  }
}

function printSortedTimeout() {
  addSortBirthDate(new Date(sortedDates[intervals2]));
  if (intervals2-- > 0) {
    setTimeout(printSortedTimeout, 5000)
  }
}

function addBirthDate(date) {
  const tableBody = document.getElementById('log');
  tableBody.insertRow().insertCell().textContent = date;
}

function addSortBirthDate(date) {
  const tableBody = document.getElementById('logSorted')
  tableBody.insertRow().insertCell().textContent = date;
}

document.getElementById('print').addEventListener('click', printTimeout);
document.getElementById('printSortedDates').addEventListener('click', printSortedTimeout)
