const TYPED = document.querySelector(".typing");
// var SUBMIT = document.getElementById("sub");
// var SUBMIT2 = document.getElementById("sub");

// var placeholder = document.getElementById("key_search").placeholder;
// var search = document.getElementById("key_search").value;
// console.log(search);

// var searchResult;
// var search;

// function getValue() {
// 	search = document.getElementById("key_search").value;
// 	// searchResult = search;
// };
// console.log(search);

// SUBMIT.addEventListener("click", getValue, false);




var i = 0;
var txt = "Welcome to THE OFFICE!!";
var speed = 50;

window.onload = function typeWriter() {
  if (i < txt.length) {
    TYPED.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



var key = "the office";
console.log(key);

var request = new XMLHttpRequest();



request.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=79SnwtGlSNSyhNbAJxCldfoDGnZkkuXV&q=' + key +'&rating=pg&limit=50');

request.onload = function gifResult() {
	var response = request.response;
	var parsedResponse = JSON.parse(response);
	console.log(parsedResponse)

	var randomN = Math.floor(Math.random() * 50);
	console.log(randomN);
	var originalUrl = parsedResponse.data[randomN].images.original.url;
	console.log(parsedResponse.data[randomN]);
	console.log(originalUrl);

	var gif = document.createElement('img');
	gif.setAttribute('src', originalUrl);
	document.body.appendChild(gif);
}

request.send();















//