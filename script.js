/*Left button */
let buttonhova2 = document.getElementById('buttonhova2')
let icon = document.getElementById('icon')

function toggle() {
    buttonhova2.classList.toggle('clicked')
    let choice = 800
    icon.classList.add('animate');

}

/*middle button */
let buttonhova3 = document.getElementById('buttonhova3')

function toggle2() {
    buttonhova3.classList.toggle('clicked')
    console.log('1600m')
    let choice = 1600
    icon.classList.add('animate');
}
/*Right button */

let buttonhova4 = document.getElementById('buttonhova4')

function toggle3() {
    buttonhova4.classList.toggle('clicked')
    console.log('3200m')
    let choice = 3200
    icon.classList.add('in-n-out');
}
let timeInput = document.getElementById('timeInput')
function inputedTime() {
    if(choice === '800m') {
        difficultyBox.classList.add('easy')
        difficultyBox.innerText = 'Difficulty: Easy 🥱'
        document.getElementById('og-stick-man').classList.add('d-none')
        document.getElementById('shamrock').classList.remove('d-none')
        document.getElementById('adjust').classList.add('adjust')
    } else if(level === '1600m') {
        difficultyBox.classList.add('medium')
        difficultyBox.innerText = 'Difficulty: Medium 😐'
        document.getElementById('og-stick-man').classList.add('d-none')
        document.getElementById('shamrock').classList.remove('d-none')
        document.getElementById('adjust').classList.add('adjust')
    } else if(level === '3200m') {
        difficultyBox.classList.add('hard')
        difficultyBox.innerText = 'Difficulty: Hard 🫠'
        document.getElementById('og-stick-man').classList.add('d-none')
        document.getElementById('shamrock').classList.remove('d-none')
        document.getElementById('adjust').classList.add('adjust')
    }
}

function inputedTime() {
    let inputField = document.getElementById('timeInput') 

    
    }