

// function outside() {
// 	alert("called: outside() function");
// }


function sniffer(message) {
	console.log("You have clicked " + message);
	

};

document.getElementById('header').onclick=function(){sniffer('header')};
	document.getElementById('pGraph').onclick=function(){sniffer('paragraphs')};
	document.getElementById('list').onclick=function(){sniffer('list')};
	document.getElementById('butt').onclick=function(){sniffer('button')};
// 

function nameFunc(x) {
 	x.style.background = "yellow";}

	document.getElementsByTagName('input').onfocusin=function(){nameFunc(this)};

	
	 document.getElementById('pageLoad').onload=function(){alert('Page Loading...')};
	
	
	