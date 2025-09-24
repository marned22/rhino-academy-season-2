const numberOfCards = 12;
const container = document.getElementsByClassName('container')[0];

for (let i = 0; i < numberOfCards; i++) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = `Card's Title ${i + 1}`

    card.appendChild(title);
    container.appendChild(card);
}

// const titlesQuery = document.querySelectorAll('.title');
// console.log(titlesQuery);

const titles = document.getElementsByClassName('title');
console.log(titles);
Array.from(titles).forEach((title) => {
    title.addEventListener('click', () => {
        console.log('Bubbling - Title Clicked')
    })

    title.addEventListener('click', () => {
        console.log('Capturing - Title Clicked');
    }, true);
})
container.addEventListener('click', () => {
    console.log('Bubbling - Container Clicked');
})

container.addEventListener('click', () => {
    console.log('Capturing - Container Clicked');
}, true);

const navigation = document.getElementsByTagName('nav')[0];
const navPosition = navigation.offsetTop;

// Scroll event
window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > navPosition) {
        navigation.classList.add('sticky');
    } else {
        navigation.classList.remove('sticky')
    };
})

const adjustNavStyle = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 769) {
        navigation.style.fontSize = '12px';
        navigation.style.backgroundColor = 'lightpink';
    } else {
        navigation.style.fontSize = '16px';
        navigation.style.backgroundColor = 'lightgreen';
    }
}

window.addEventListener('resize', adjustNavStyle)