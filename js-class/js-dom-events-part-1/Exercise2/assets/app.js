const container = document.getElementById('container')
const slide = document.getElementsByClassName('slide')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
let i = 0
const dot = document.getElementsByClassName('dot')

function reset() {
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none'
    }

    for(let j = 0; j < dot.length; j++){
        dot[j].classList.remove('active')
    }
}

function firstStart() {
    slide[0].style.display = 'block'
    dot[0].classList.add('active')
}

function nextSlide() {
    reset()
    slide[i + 1].style.display = 'block'
    i++
    dot[i].classList.add('active')
}

function prevSlide() {
    reset()
    slide[i - 1].style.display = 'block'
    i--
    dot[i].classList.add('active')
}


next.addEventListener('click', () => {
    if(i === slide.length - 1){
        i = -1
    }
    nextSlide()
})

prev.addEventListener('click', () => {
    if(i === 0){
        i = slide.length
    }
    prevSlide()
})


function clickDots() {
    for(let j = 0; j < dot.length; j++){
        dot[j].addEventListener('click', () => {
            reset();
            slide[j].style.display = 'block'
            i = j
            dot[j].classList.add('active')
        })
    }
}

clickDots()
firstStart()