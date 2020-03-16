$('body').on("click", function (e) {
	
	alert("X: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
	debugger;
	console.log(e)
	chrome.runtime.sendMessage({x: e.clientX, y: e.clientY}, function(response) {
	console.log(response.farewell);
	});
});

