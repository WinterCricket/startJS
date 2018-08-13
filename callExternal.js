

// function outside() {
// 	alert("called: outside() function");
// }


function sniffer(message) {
	console.log("You have clicked " + message);
	document.getElementById('header').onclick=function(){sniffer('header')};
	document.getElementById('pGraph').onclick=function(){sniffer('paragraphs')};
	document.getElementById('list').onclick=function(){sniffer('list')};
	document.getElementById('butt').onclick=function(){sniffer('button')};

};


// document.getElementsByTagName('input').onfocusin=function(){nameFunc(this)};

// function nameFunc(x) {
// 	x.style.background = "yellow";}

	function loader() {


	
	 document.getElementById('pageLoad').onload=function(){alert('Page Loading...')};
	};
	
	