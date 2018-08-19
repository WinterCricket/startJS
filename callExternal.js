

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

function repeatIt(message) {
for(var i = 10; i >= 0; i--) { 

		

		var target = document.getElementById('target');
		target.innerHTML = "Count: " + i + "<br>"+ target.innerHTML;
		console.log("The damned, self important count is now: " + i);
		

	}

	

	console.log("Your foolish counting has stopped.");
	var button = document.getElementById('leCount');
	button.value = "Count Done!";
	button.style.background = "red";
	button.style.fontSize = "34px";

}
document.getElementById('leCount').onclick=function(){
	repeatIt(); 
// 	document.getElementById('leCount').innerHTML = "Stop";
// 	this.style.background = "red";
}


alert(document.title);




function snacksList(message) {

	var snacks = ["apple", "papaya", "crackers", "sardines"];
	
	
	
	// var list = snacks.sort();
	for (var i = 0; i < snacks.length; i++) {

		var food = document.getElementById('food');
		food.innerHTML = food.innerHTML + "Snack: " += food[i] + "<br>";

		
	}

	console.log("Your foolish snacks are packed, you brat!.");
	var button = document.getElementById('box');
	button.value = "Snacks Boxed!";
	button.style.background = "green";
	button.style.fontSize = "60px";
}
document.getElementById('box').onclick=function(){
	snacksList(); 
}