(function() {
  let changeColor = () => {
    const dark = "#333";
    const light = "#f3f3f3";

    const color = localStorage.getItem('color');

    let background = light;
    let textColor = dark;
    
    if (color === 'dark') {
      background = dark;
      textColor = light;
    }

    document.body.style.background = background;
    document.body.style.color = textColor;
  }

  let invertColor = () => {
    const color = localStorage.getItem('color');
    const newColor = color === 'dark' ? 'light' : 'dark';

    localStorage.setItem('color', newColor);
    changeColor();
  }

  chrome.runtime.onMessage.addListener((request, sender, respond) => {
      if (request.msg == "invert") {
        invertColor();
      }

      respond({msg: "done"});
  });

  changeColor();
})();
