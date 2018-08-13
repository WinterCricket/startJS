

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
	// document.getElementsByTagName('button').onclick=function(){sniffer('button')};

	function nameFunc(x) {
		x.style.background = "yellow";}

		document.getElementsByTagName('input').onfocusin=function(){nameFunc(this)};


		document.getElementById('pageLoad').onload=function(){alert('Page Loading...')};


		document.getElementById('activator').onclick=function(){alert('This is what you ordered: ')};

		function numCheck() {
		var myNum = "Holiday Harry";
		var result = isNaN(myNum);
		console.log(result);
}

		function intCheck() {
		var myNum = "42 natural gas units";
		var result = parseInt(myNum);
		console.log(result);
		console.log(result + 42);
		console.log(myNum + 42);
}