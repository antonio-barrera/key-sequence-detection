const secretKey = "daniela";
const pressed = [];

window.addEventListener('keydown', (e) => {
    pressed.push(e.key.toLowerCase());
    pressed.splice(-secretKey.length-1, pressed.length - secretKey.length);
    console.log(pressed);
    if (pressed.join('') == secretKey) {
        console.log('Logrado');
        cornify_add();
    }
});
