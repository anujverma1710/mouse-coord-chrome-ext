
//updating background.html
function updateForm(m) {
  //x-coord
  $('#x').text(m.x);
  //y-coord
  $('#y').text(m.y);
}

// receiving the mesaage from content.js regarding the x,y coordinates
chrome.runtime.onMessage.addListener(function (message, sender, sendRepsonse) {
  console.log(message);
  
  updateForm(message);
});