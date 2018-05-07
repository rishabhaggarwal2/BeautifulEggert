let button = document.getElementById('invert');
button.onclick = (el) => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {msg: "invert"}, function(response) {
      console.log(response);
    });
  });
}