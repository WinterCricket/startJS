

// function outside() {
// 	alert("called: outside() function");
// }

var  email = "johnny@psight.com";

var theAt = email.indexOf("@");
console.log(theAt);

function sniffer(message) {
	console.log("You have clicked " + message);


};

document.getElementById('header').onclick=function(){sniffer('header')};
document.getElementById('pGraph').onclick=function(){sniffer('paragraphs')};
document.getElementById('list').onclick=function(){sniffer('list')};
document.getElementById('butt').onclick=function(){sniffer('button')};

function nameFunc(x) {
	x.style.background = "yellow";}

	document.getElementsByTagName('input').onfocusin=function(){nameFunc(this)};


	document.getElementById('pageLoad').onload=function(){alert('Page Loading...')};


	function superCheck() {

		
		var myNum = "If this is true";
		var result = isNaN(myNum);
		console.log(result);
		



		

		if(result === false) {

			alert("foolish believer in objects! Here's the number: " + myNum);
		} else {


			alert( "Here are you're words instead:" +" "+ myNum + " and this is their number: " + myNum.length);
		}
	}

	


	function runNext() {

		var target = document.getElementById("next");
		var currentVal = target.innerHTML;
		console.log(currentVal);

		// if(currentVal<3) {

		// }

	}
	
	
	document.getElementById('activator').onclick=function(){runNext();}