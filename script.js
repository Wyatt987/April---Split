/*Left button */
let buttonhova2 = document.getElementById('buttonhova2')
let icon = document.getElementById('icon')
let choice
function toggle() {
    buttonhova2.classList.toggle('clicked')
    console.log('800m')
    choice = 800
    icon.classList.add('animate');
}

/*middle button */
let buttonhova3 = document.getElementById('buttonhova3')

function toggle2() {
    buttonhova3.classList.toggle('clicked')
    console.log('1600m')
    choice = 1600
    icon.classList.add('animate');
}
/*Right button */

let buttonhova4 = document.getElementById('buttonhova4')

function toggle3() {
    buttonhova4.classList.toggle('clicked')
    console.log('3200m')
    choice = 3200
    icon.classList.add('in-n-out');
}
let timeInput = document.getElementById('timeInput')

function inputedTime() {
    if(choice === '800m') {
        calculateSplits800()
    } else if(choice === '1600m') {
        calculateSplits1600()
    } else if(choice === '3200m') {
        calculateSplits3200()
    }
}

let totalTime = 0;

function calculateSplits800() {
    let inputFieldM = document.getElementById('timeInputM').value;
    let inputFieldS = document.getElementById('timeInputS').value;

    inputFieldM = Number(inputFieldM) * 60;
    inputFieldS = Number(inputFieldS);

    totalTime = inputFieldM + inputFieldS;

    displaySplits();
}

function displaySplits() {
    for (let t = 1; t <= 4; t++) {
        let distance = t * 200; 
        let split = (totalTime / 4) * t; 
        let splitMin = Math.floor(split / 60); // Convert back to seconds
        let splitSec = Math.floor(split % 60).toString();  //Round
        let splitText = `${splitMin}m ${splitSec}s`;

//Match each with time
        let elementId = `800m${distance}`;
        let element = document.getElementById(elementId);
        if (element) {
            element.innerText = splitText;
        }
    }
}


