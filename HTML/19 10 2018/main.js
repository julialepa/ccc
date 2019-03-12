

let inputNode = document.getElementsByTagName('input')[0];
let outputNode = document.querySelector('#output');


function setContent() {
    let name = inputNode.value
switch (name) {
    case "Arancia":
    outputNode.innerHTML= name + " è arancione <br />";
    break;
    case "Mela":
    outputNode.innerHTML= name + " è araxxxncione <br />";
    break;
}
}
