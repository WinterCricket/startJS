

// function outside() {
// 	alert("called: outside() function");
// }

// var  email = "johnny@psight.com";

// var theAt = email.indexOf("@");
// console.log(theAt);

function sniffer(message) {
	console.log("You have clicked " + message);


};

document.getElementById('header').onclick=function(){sniffer('header')};
document.getElementById('pGraph').onclick=function(){sniffer('paragraphs')};
document.getElementById('list').onclick=function(){sniffer('list')};
document.getElementById('butt').onclick=function(){sniffer('button')};

// function nameFunc(x) {
// 	x.style.background = "yellow";}

// 	document.getElementsByTagName('input').onfocusin=function(){nameFunc(this)};


	// document.getElementById('pageLoad').onload=function(){alert('Page Loading...')};


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
		var numVal = currentVal.length;

		if(numVal<50) {
			target.innerHTML = "There were fewer than 50 spaces in that paragraph.";
		} else {
			target.innerHTML = "Silly Wizard, dirty tricks are for kids! That was a long graph.";
		}

	}
	
	
	document.getElementById('activator').onclick=function(){runNext();}

	//  function runStr() {


	// 	var str = "meldrem@shit.com";
		
	// 	var result = str.indexOf('@');
	// 	console.log(result);

	// 	if (result != -1) {
	// 		console.log("Result: " + result + " " + str);
	// 		console.log(true);
	// 	} else {
	// 		console.log("Result: " + result + " " + str);
	// 		console.log(false);
	// 	}
	// }
 // document.getElementById('ebutton').onclick=function(){runStr();}
//document.getElementById('activator').onclick=function(){runStr();}

function repeatIt() {
	var loopCount = 5;
	while (loopCount > 0) {

		var countlist = document.getElementById('countlist');
		countlist.innerHTML = "Count: " + loopCount + "<br>"+ countlist.innerHTML;
		if(loopCount == 3) {
			alert("You've hit magic number " + loopCount);
			loopCount = loopCount -1;
		} else {

		
		console.log("The count is now: " + loopCount);
		loopCount = loopCount -1;
		}
	}
	alert("Your foolish counting has stopped.");
	console.log("Your foolish counting has stopped.");
}
document.getElementById('leCount').onclick=function(){
	repeatIt(); 
	document.getElementById('leCount').innerHTML = "Stop";
	this.style.background = "red";
}



