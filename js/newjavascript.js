function insertChar(char) {
    var entry = getEntry();//document.getElementById('unos').value;
    entry = entry + char;
    setEntry(entry);//document.getElementById('unos').value = entry;
}


function clearData() {
    setEntry('');//document.getElementById('unos').value = '';
    setRez('');
}


function calculate() {
    var entry = getEntry();//document.getElementById('unos').value;
    var resulat = eval(entry);
    setRez(resulat);//document.getElementById('unos').value = resulat;
}

function squareRootCalc() {
    var entry = getEntry();//document.getElementById('unos').value;
    var resulat = Math.sqrt(eval(entry));
    setRez(resulat);//document.getElementById('unos').value = resulat;
}

function squareCalc() {
    var entry = getEntry();//document.getElementById('unos').value;
    var resulat = eval(entry) * eval(entry);
    setRez(resulat);//document.getElementById('unos').value = resulat;
}


function cosCalc() {
    var entry = getEntry();//document.getElementById('unos').value;
    var entry = entry * Math.PI / 180;
    setRez(Math.cos(entry));//document.getElementById('unos').value = resulat;
}

function sinCalc() {
    var entry = getEntry();//document.getElementById('unos').value;
    var entry = entry * Math.PI / 180;
    setRez(Math.sin(entry));//document.getElementById('unos').value = resulat;
}





function getEntry() {
    return document.getElementById('unos').value;
}


function setEntry(entry) {
    document.getElementById('unos').value = entry;
}

function setRez(entry) {
    document.getElementById('rez').value = entry;
}

function deleteChar() {
    var entry = getEntry();
    // '5+6+8'

    entry = entry.substr(0, (entry.length - 1));

    setEntry(entry);
}

function newBackground() {
    document.getElementById('wall').setAttribute("style", "background-image: url(img/space.jpg)");
    document.getElementById('bgTrans').setAttribute("style", "background: linear-gradient(to bottom, rgba(187, 0, 255, 0.9), rgba(241, 62, 62, 0.9))");
}

function oldBackground() {
    document.getElementById('wall').setAttribute("style", "background-image: url(img/blur.jpg)");
    document.getElementById('bgTrans').setAttribute("style", "background: linear-gradient(to bottom, rgba(187, 0, 255, 0.7), rgba(241, 62, 62, 0.7))");

}

