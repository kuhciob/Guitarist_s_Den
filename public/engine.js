



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
