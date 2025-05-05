/*Left button */
let buttonhova2 = document.getElementById('buttonhova2')
let icon = document.getElementById('icon')
let choice = null
let eightSplits = document.getElementById('800mSplits')
let eightSplits2 = document.getElementById('800mSplits2')
let eightSplits3 = document.getElementById('800mSplits3')
let eightSplits4 = document.getElementById('800mSplits4')
let eightSplits5 = document.getElementById('800mSplits5')
let mileSplits = document.getElementById('mileSplits')
let mileSplits2 = document.getElementById('mileSplits2')
let mileSplits3 = document.getElementById('mileSplits3')
let mileSplits4 = document.getElementById('mileSplits4')
let mileSplits5 = document.getElementById('mileSplits5')
let twoMileSplits = document.getElementById('twoMileSplits')
let twoMileSplits2 = document.getElementById('twoMileSplits2')
let twoMileSplits3 = document.getElementById('twoMileSplits3')
let twoMileSplits4 = document.getElementById('twoMileSplits4')
let twoMileSplits5 = document.getElementById('twoMileSplits5')

const trackWordGen = [
    "Starting Line",
    "Sprint Zone",
    "Finish Line",
    "Relay Exchange",
    "Track Curve",
    "Lane Markers",
    "Hurdle Hop",
    "Speed Boost",
    "Lap Counter",
    "False Start",
    "Photo Finish",
    "Cleat Grip",
    "Track Surface",
    "Pace Setter",
    "Race Clock",
    "Whistle Blow",
    "Podium Stand",
    "Victory Lap"
  ];

function toggle() {
    buttonhova2.classList.toggle('clicked')
    console.log('800m')
    choice = '800'
    icon.classList.add('in-n-out');
}

/*middle button */
let buttonhova3 = document.getElementById('buttonhova3')

function toggle2() {
    buttonhova3.classList.toggle('clicked')
    console.log('1600m')
    choice = '1600'
    icon.classList.add('in-n-out');
}
/*Right button */

let buttonhova4 = document.getElementById('buttonhova4')

function toggle3() {
    buttonhova4.classList.toggle('clicked')
    console.log('3200m')
    choice = '3200'
    icon.classList.add('in-n-out');
}
let timeInput = document.getElementById('timeInput')

function inputedTime() {
    if(choice === '800') {
        calculateSplits800()
    } else if(choice === '1600') {
        calculateSplits1600()
    } else if(choice === '3200') {
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

    displaySplits800();
}

function displaySplits800() {
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
    eightSplits.classList.remove('d-none')
    eightSplits2.classList.remove('d-none')
    eightSplits3.classList.remove('d-none')
    eightSplits4.classList.remove('d-none')
    eightSplits5.classList.remove('d-none')

}

function resetButton800() {
    buttonhova2.classList.toggle('clicked')
    eightSplits.classList.add('d-none')
    eightSplits2.classList.add('d-none')
    eightSplits3.classList.add('d-none')
    eightSplits4.classList.add('d-none')
    eightSplits5.classList.add('d-none')
    totalTime = 0;

}

function calculateSplits1600() {
    let inputFieldM = document.getElementById('timeInputM').value;
    let inputFieldS = document.getElementById('timeInputS').value;

    inputFieldM = Number(inputFieldM) * 60;
    inputFieldS = Number(inputFieldS);

    totalTime = inputFieldM + inputFieldS;

    displaySplits1600();
}

function displaySplits1600() {
    for (let t = 1; t <= 4; t++) {
        let distance = t * 400; 
        let split = (totalTime / 4) * t; 
        let splitMin = Math.floor(split / 60); // Convert back to seconds
        let splitSec = Math.floor(split % 60).toString();  //Round
        let splitText = `${splitMin}m ${splitSec}s`;

//Match each with time
        let elementId = `1600m${distance}`;
        let element = document.getElementById(elementId);
        if (element) {
            element.innerText = splitText;
        }
    }
    mileSplits.classList.remove('d-none')
    mileSplits2.classList.remove('d-none')
    mileSplits3.classList.remove('d-none')
    mileSplits4.classList.remove('d-none')
    mileSplits5.classList.remove('d-none')

}

function resetButton1600() {
    buttonhova2.classList.toggle('clicked')
    mileSplits.classList.add('d-none')
    mileSplits2.classList.add('d-none')
    mileSplits3.classList.add('d-none')
    mileSplits4.classList.add('d-none')
    mileSplits5.classList.add('d-none')

    totalTime = 0;
}

function calculateSplits3200() {
    let inputFieldM = document.getElementById('timeInputM').value;
    let inputFieldS = document.getElementById('timeInputS').value;

    inputFieldM = Number(inputFieldM) * 60;
    inputFieldS = Number(inputFieldS);

    totalTime = inputFieldM + inputFieldS;

    displaySplits3200();
}

function displaySplits3200() {
    for (let t = 1; t <= 4; t++) {
        let distance = t * 800; 
        let split = (totalTime / 4) * t; 
        let splitMin = Math.floor(split / 60); // Convert back to seconds
        let splitSec = Math.floor(split % 60).toString();  //Round
        let splitText = `${splitMin}m ${splitSec}s`;

//Match each with time
        let elementId = `3200m${distance}`;
        let element = document.getElementById(elementId);
        if (element) {
            element.innerText = splitText;
        }
    }
    twoMileSplits.classList.remove('d-none')
    twoMileSplits2.classList.remove('d-none')
    twoMileSplits3.classList.remove('d-none')
    twoMileSplits4.classList.remove('d-none')
    twoMileSplits5.classList.remove('d-none')
}

function resetButton3200() {
    buttonhova2.classList.toggle('clicked')
    twoMileSplits.classList.add('d-none')
    twoMileSplits2.classList.add('d-none')
    twoMileSplits3.classList.add('d-none')
    twoMileSplits4.classList.add('d-none')
    twoMileSplits5.classList.add('d-none')
    totalTime = 0;
}