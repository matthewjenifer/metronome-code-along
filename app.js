import Timer from './timer'

const tempoDisplay = document.querySelector('.tempo');
const tempoText = document.querySelector('.tempo-text');
const decreaseTempoBtn = document.querySelector('.decrease-tempo');
const increaseTempoBtn = document.querySelector('.increase-tempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.start-stop');
const subtractBeats = document.querySelector('.subtract-beats');
const addBeats = document.querySelector('.add-beats');
const measureCount = document.querySelector('.measure-count');

const click1 = new Audio('click1.mp3');
const click2 = new Audio('click2.mp3');

// click1.play(); // use "play()" to listen to imported files
// click2.play();

let bpm = 140;
let beatsPerMeasure = 4;
let tempoTextString = 'Nice and Steady';

decreaseTempoBtn.addEventListener('click', () =>{
    bpm--;
    updateMetronome();
    validateTempo();
})

increaseTempoBtn.addEventListener('click', () =>{
    bpm++;
    updateMetronome();
    validateTempo();
})

tempoSlider.addEventListener('input', () =>{
    bpm = tempoSlider.value;
    updateMetronome();
    validateTempo();
})

subtractBeats.addEventListener('click', () =>{
    if(beatsPerMeasure <= 2) {return}
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
})

addBeats.addEventListener('click', () =>{
    if(beatsPerMeasure >= 12) {return}
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
})

function updateMetronome() {
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    // metronome.timeInterval = 60000 / bpm;
    if (bpm <= 40) { tempoTextString = "Super Slow" };
    if (bpm > 40 && bpm < 80) { tempoTextString = "Slow" };
    if (bpm > 80 && bpm < 120) { tempoTextString = "Getting there" };
    if (bpm > 120 && bpm < 180) { tempoTextString = "Nice and Steady" };
    if (bpm > 180 && bpm < 220) { tempoTextString = "Rock n' Roll" };
    if (bpm > 220 && bpm < 240) { tempoTextString = "Funky Stuff" };
    if (bpm > 240 && bpm < 260) { tempoTextString = "Relax Dude" };
    if (bpm > 260 && bpm <= 280) { tempoTextString = "To the EXTREME!!!" };

    tempoText.textContent = tempoTextString;
}

function validateTempo() {
    if(bpm <= 20) {return};
    if(bpm >= 280) {return};
    
}

function playClick() {
    click1.play();
}

const metronome = new Timer(playClick, 60000 / bpm, {immediate: true});

metronome.start();
