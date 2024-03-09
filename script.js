//popup blocked

window.open('https://javascript.info');

//popup allowed 

GamepadButton.onclick = () => {

    window.open('https://javascript.info');

}

let newWindow = open('/', 'example', 'width=300,height=300')
newWindow.focus();

alert(newWindow.location.href); 

newWindow.onload = function() {

    let html = '<div style="font-size:30px">Welcome!</div>';

}