
//left click
// $('body').on("click", function (e) {
	
// 	alert("X: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
// 	debugger;
// 	console.log(e)
// 	chrome.runtime.sendMessage({x: e.clientX, y: e.clientY}, function(response) {
// 	console.log(response.farewell);
// 	});
// });



var isDragging = false;
$('body').mousedown(function(e) {
	console.log(e);
	//The event.which is an inbuilt property in jQuery which 
	//is used to return which keyboard key or mouse button was pressed for the event
    switch (e.which) {
        //left click
        case 1:
            console.log('Left Mouse button pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
            break;
        // middle click
        case 2:
            console.log('Middle Mouse button pressed.'+ "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
            break;
        // Right click
        case 3:
            console.log('Right Mouse button pressed.'+ "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
            break;
        default:
            console.log('You have a strange Mouse!'+ "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
	}

	chrome.runtime.sendMessage({x: e.clientX, y: e.clientY}, function(response) {
		console.log(response);
		});
}).mousemove(function(e) {
    isDragging = true;
 })
.mouseup(function(e) {
    var wasDragging = isDragging;
    isDragging = false;
    if (!wasDragging) {
        //double click
        console.log('Double click pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
    }
});

