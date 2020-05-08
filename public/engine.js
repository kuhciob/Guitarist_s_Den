
let quiz = 1 ;
let sun_clicks=0;

let isSimpleChordPaste=0;
const quiz_button=document.getElementById('quiz_button');   
const sun=document.getElementById('sun2');

const registration=document.getElementById('regiatration');

const h1=document.getElementById('main_head');
const LogInButton=document.getElementById('sbutton');
let inputGUESS=document.getElementById("UserGuess")
let inputTwoPlusTwo=document.createElement("input")
let inputtextTwoPlusTwo=document.createElement("input")
let guessBttn=document.getElementById('guessbutton');

inputTwoPlusTwo.class="reg_buttons"
inputTwoPlusTwo.type="submit"
inputTwoPlusTwo.value="Back"
inputTwoPlusTwo.style="font-size:1em; align-self:center;"
inputTwoPlusTwo.addEventListener('click',()=>BackToGuess())
inputtextTwoPlusTwo.type="text";




let anim=20;
h1.style="cursor:pointer";

let attempts=0;
let counter=13;
let counter_value=0;


function MoveQuiz(){
    ++attempts;
    if(quiz==1){
        quiz_button.style.top='200px';
        quiz=2;
    }else{
        quiz_button.style.top='0px';
        quiz=1;
    }
    if(attempts==6){
        alert('Не виходить? Спробуйте ще');
    }
    if(attempts==13){
        alert('Та ну, ще хочаб 2 рази');
    }
    if(attempts==15){
        alert('Хм, дивно, може сонце допоможе?');
    }
}

function SunClick(){
    ++sun_clicks;
    if(anim>1){
        --anim;
    }else{
        if(anim>0.2){
            anim-=0.1;
        }else
        if(anim>0.02){
            anim-=0.01;
        }else anim=20;

        
    }
    const sunlight=document.getElementById('sun2');
    sunlight.style="animation:spin " + anim + "s linear infinite;";
    if(sun_clicks % 13 ==0){     
        Secret();
        //sun_clicks=0;
    }else{
        quiz_button.addEventListener('mouseover', MoveQuiz);

    }
}



const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


function GeneratePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


function validateLoginForm(evt){
    validateForm(evt,"SignInForm","username","password")
}
function validateForm(evt,formname,name,pass)
{
    let Event = evt || window.event;
    FieldIsEmpty(Event,formname,name)
    FieldIsEmpty(Event,formname,pass)
  
}
function FieldIsEmpty(Event, formname, inputname){
    let data=document.forms[formname][inputname].value;
    if (data==null || data=="")
    { 
        document.forms[formname][inputname].setAttribute("style","background-color: rgba(255, 0, 0, 0.397);")
        Event.returnValue = false;
        alert("Field "+inputname + " is empty");
        if(Event.preventDefault) Event.preventDefault();
        return false;
    }
    else{
        document.forms[formname][inputname].setAttribute("style","background-color: rgba(153, 153, 153, 0);") 
    }
}


function validateLogin(evt, formname, inputname) {
    var theEvent = evt || window.event;
    let data=document.forms[formname][inputname].value;
    if (data!=null || data1!="")
       document.forms[formname][inputname].setAttribute("style","background-color: rgba(153, 153, 153, 0);") 
    //Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9a-zA-Z]|\_/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }
    
}
function validatePassword(evt, formname, inputname) {
    var theEvent = evt || window.event;
    data=document.forms[formname][inputname].value;
    if (data!=null || data1!="")
        document.forms[formname][inputname].setAttribute("style","background-color: rgba(153, 153, 153, 0);") 
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9a-zA-Z]/;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
        
    }

}

  


  












//-------------------------------------------------------
