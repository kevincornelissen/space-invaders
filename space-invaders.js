var c = document.getElementById("si-canvas");
var ctx = c.getContext("2d");
var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};
var spaceShipXOffset = 475;

ctx.fillStyle = "#FF0000";
ctx.fillRect(spaceShipXOffset, 575, 50, 25);

function assignKeys(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = true;
    else if (kc === 38) Keys.up = true;
    else if (kc === 39) Keys.right = true;
    else if (kc === 40) Keys.down = true;
}

function clearSpaceShipCanvas() {
    ctx.clearRect(0, 500, 1000, 100);
}

function moveSpaceShipRight(distance) {
    if ((1000 - (spaceShipXOffset + 50)) >= 0) {
    	spaceShipXOffset += distance;
    } 
}

function moveSpaceShipLeft(distance) {
    if (spaceShipXOffset >= 0) {
        spaceShipXOffset -= distance;
    } 
}


window.onkeydown = function(e) {
    assignKeys(e);

    if (Keys.left) {
        clearSpaceShipCanvas();
        moveSpaceShipLeft(15);
    }

    if (Keys.right) {
        clearSpaceShipCanvas();
        moveSpaceShipRight(15);
    }

    if (Keys.up) {
    }

    if (Keys.down) {
    }

    ctx.fillRect(spaceShipXOffset, 575, 50, 25);
};

window.onkeyup = function(e) {
    var kc = e.keyCode;
    e.preventDefault();

    if (kc === 37) Keys.left = false;
    else if (kc === 38) Keys.up = false;
    else if (kc === 39) Keys.right = false;
    else if (kc === 40) Keys.down = false;
};