/* NICKNAMES */
// List of nicknames
const nicknames = {
    nickname1: '{ sammySeal }',
    nickname2: '{ smokinSammySeal }',
    nickname3: '{ originalSamSeal }',
    nickname4: '{ samuelSealwall }',
    nickname5: '{ samuelSealworth }',
    nickname6: '{ samuelSealington }',
    nickname7: '{ sammySealkowski }',
    nickname7: '{ sammySeal-Mart }',
};

const nicknamesArray = Object.values(nicknames);
        // CONSOLE TESTING
    console.log('Names to choose from: ' + nicknamesArray);

// Nickname randomizer
let n = Math.floor(Math.random() * nicknamesArray.length);
const randomNickname = nicknamesArray[n];
        // CONSOLE TESTING
    console.log('Nickname index: ' + n);
    console.log('Random nickname: ' + randomNickname);

// DOM - Nickname manipulator
let nicknameDisplay = document.getElementById('nickname');
nicknameDisplay.innerHTML = randomNickname;
        // CONSOLE TESTING
    console.log('Name currently displayed: ' + nicknameDisplay.innerHTML);
/* END NICKNAMES */

/* TITLE FONTS */
// List of title fonts
const fonts = {
    font1: "'Capriola', sans-serif",
    font2: "arial, sans-serif",
    font3: "'Carattere', sans-serif",
    font4: "'Caveat', sans-serif",
    font5: "'Gluten', sans-serif",
    font6: "'Lato', sans-serif",
    font7: "'Pacifico', sans-serif",
    font8: "'Courier-New', monospace",
    font9: "'Trebuchet', sans-serif",
    font10: "'Lucida Console', monospace"
};

const fontsArray = Object.values(fonts);
        // CONSOLE TESTING
    console.log('Available fonts: ' + fontsArray);

// Font randomizer
let f = Math.floor(Math.random() * fontsArray.length);
const randomFont = fontsArray[f];
        // CONSOLE TESTING
    console.log('Fonts index: ' + f);
    console.log('Random font: ' + randomFont);

// DOM - Title Font manipulator
nicknameDisplay.style.fontFamily = randomFont;

/* END TITLE FONTS */


/* PORTRAITS */
// List of portraits
const portraits = {
    portrait1: 'assets/sammy1-2.png',
    portrait2: 'assets/sammy2-2.png',
    portrait3: 'assets/sammy3-2.png',
    portrait4: 'assets/sammy4-2.png'
}

const portraitsArray = Object.values(portraits);
        // CONSOLE TESTING
    console.log('Portrait options: ' + portraitsArray);

// Portrait randomizer
let match = true;
let tries = 0;
let p;
while (match === true) {
    tries++;
    console.log('tries', tries);
    p = Math.floor(Math.random() * portraitsArray.length);
    console.log('existing p', sessionStorage.getItem('currentPortraitIndex'));
    console.log('new p', p);
    if (p != sessionStorage.getItem('currentPortraitIndex')) {
        match = false;
        sessionStorage.setItem('currentPortraitIndex', p);
    }
}

const randomPortrait = portraitsArray[p];
        // CONSOLE TESTING
    console.log('Portrait index: ' + p);
    console.log('Random portrait: ' + randomPortrait);

let portraitDisplay = document.getElementById('sammy-portrait')
portraitDisplay.src = randomPortrait;
        // CONSOLE TESTING
    console.log('Portrait currently displayed: ' + portraitDisplay.src);
/* END PORTRAITS */

/* JOKE TELLING FEATURE*/
const Jokes = {
    1: ['Why did the scarecrow win a Nobel Prize?','...because it was out standing in its field!'],    
    2: ['Why do cows have hooves instead of feet?','...because they lac-tose!'],    
    3: ['What do you call a bear left out in the rain?','...a drizzly bear!'],    
    4: ['What do you call a bear who lost his dentures?','...a gummy bear!'],
    5: ['What did the mommy cow say to the baby cow?','...it\'s pasture bed time!'],    
    6: ['How do farmers count their herd?','...with a cow-culator!'],
    7: ['What did the mom buffalo say to the baby buffalo when he went off to college?','...bye son!']    
}
const nJokes = Object.keys(Jokes).length;

// FUNCTION DEFINITIONS
function tellJoke(){
    const randoNum = Math.ceil(Math.random()*nJokes);
    const joke = Jokes[randoNum];
    const jokeQ = joke[0];
    const jokeA = joke[1];
    alert(`\nJoke: #${randoNum}\n\n${jokeQ}\n`)
    setTimeout(()=> {
        alert(jokeA+'\n');
        location.reload();
    }, 1000)
}

function checkBack() {
    alert('This feature is not yet available. Check back later for updates!');
}
/* END -- JOKE TELLING FEATURE*/
