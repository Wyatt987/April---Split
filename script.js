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