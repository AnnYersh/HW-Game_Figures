let input   = document.querySelector('.input'),
    btn     = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__block'),
    score = 0,
    gameTime = 0,
    interval = 0;
    
let colors = ['rgba(255, 31, 180, 0.737)', 'white', 'purple', 'lightgrey'];

//let form = [0, 50]

let clip = ['polygon(50% 0%, 0% 100%, 100% 100%)', 'circle(50% at 50% 50%)', 'polygon(0 0, 100% 0, 100% 100%, 0 100%)']
    
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
        score = 0
        clearInterval(interval)
        start()
    }
})


gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})

function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decrease(), 1000)
    createBall()
}

function decrease() {
    if(gameTime == 0) {
        end()
    }else {
        let currentTime = --gameTime
        timeOut.innerHTML = currentTime
    }
}

function end() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} баллов</h2>`
}


function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    let size = random(20, 100)
 
   
    let { height, width } = gameBox.getBoundingClientRect()
    
    let leftValue = random(0, width - 100)
    let topValue = random(0, height - 100)
    
    ball.style.width = ball.style.height = size + 'px'
    ball.style.left = leftValue + 'px'
    ball.style.top = topValue + 'px'
    //ball.style.background = 'rgba(255, 31, 180, 0.737)'
    ball.style.background = randomTwo(colors)
    //ball.style.border = '3px solid white'
    //ball.style.borderRadius = randomTwo(form) + '%'
    ball.style.clipPath = randomTwo(clip)

    
    gameBox.append(ball)
    
}

function random(min,max) {
    return Math.floor(Math.random()  * (max + 1 - min ) + min )
}

function randomTwo(one) {
    let rund = Math.floor(Math.random() * one.length);
    return one[rund];  
}




// Размер 20 - 100
// Круг, квадрат, треугольник
// взять рандомный цвет из массива