let gameSqn = []
let userSqn = []

let btns = ['yellow', 'red', 'blue', 'green']

let started = false
let level = 0

let itag = document.querySelector('i')

document.addEventListener('keypress', () => {
    if (started == false) {
        started = true
        levelUp()
    }
})

function gameFlash(btn) {
    btn.classList.add('flash')
    setTimeout(() => {
        btn.classList.remove('flash')
    }, 250)
}

function userFlash(btn) {
    btn.classList.add('userflash')
    setTimeout(() => {
        btn.classList.remove('userflash')
    }, 250)
}

let levelUp = () => {
    userSqn = []
    level++
    itag.innerText = `^_^ level ${level}`
    let randIndex = Math.floor(Math.random() * 4)
    let randColor = btns[randIndex]
    let ranBtn = document.querySelector(`.${randColor}`)
    gameSqn.push(randColor)
    gameFlash(ranBtn)
}

function checkAns(idx) {
    if (userSqn[idx] === gameSqn[idx]) {
        if (userSqn.length == gameSqn.length) {
            setTimeout(levelUp, 1000)
        }
    } else {
        itag.innerHTML = `Game Over, score is <b>${level}</b> Press any key to restart`
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = 'white'
        }, 1000)
        reset()
    }
}

function btnPress(event) {
    let btn = event.currentTarget
    userFlash(btn)
    let userColor = btn.getAttribute('id')
    userSqn.push(userColor)

    checkAns(userSqn.length - 1)
}

let allBtns = document.querySelectorAll('.btn')

allBtns.forEach((btn) => {
    btn.addEventListener('click', btnPress)
})

function reset() {
    started = false
    level = 0
    userSqn = []
    gameSqn = []
}
