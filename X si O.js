let interval = setInterval(draw, 1)
function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0, 200);
        ctx.lineTo(600, 200);
        ctx.moveTo(0, 400);
        ctx.lineTo(600, 400);
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 600)
        ctx.moveTo(400, 0);
        ctx.lineTo(400, 600)
        ctx.stroke();
        clearInterval(interval)
        interval = null;

    }

}

let currentPlayer = 0;
let mt = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
let nIntervId;
window.onload = function () {
    var secondCanvas = document.getElementById("canvas");
    secondCanvas.addEventListener("click", function (event) {
        const ctx = secondCanvas.getContext("2d");
        ctx.font = "130px sans-serif";
        ctx.textBaseline = "hanging"
        ++currentPlayer
        let valueOfMatrix = 2
        let valueOfClick = "X"
        let check = 0
        if (currentPlayer % 2 == 0) {
            valueOfClick = "0"
            valueOfMatrix = 1
        }
        var x = event.offsetX
        var y = event.offsetY
        if (currentPlayer == 11) {
            restart()
            return;
        }
        if (x < 200 && x > 0) {
            if (y < 200 && mt[0][0] == 0) {
                ctx.fillText(valueOfClick, 60, 60, 140);
                mt[0][0] = valueOfMatrix
                ++check
            } else if (y > 200 && y < 400 && mt[1][0] == 0) {
                ctx.fillText(valueOfClick, 60, 260, 140);
                mt[1][0] = valueOfMatrix
                ++check
            } else if (y > 400 && mt[2][0] == 0) {
                ctx.fillText(valueOfClick, 60, 460, 140);
                mt[2][0] = valueOfMatrix
                ++check
            }
        } else if (x > 200 && x < 400) {
            if (y < 200 && mt[0][1] == 0) {
                ctx.fillText(valueOfClick, 260, 60, 140);
                mt[0][1] = valueOfMatrix
                ++check
            } else if (y > 200 && y < 400 && mt[1][1] == 0) {
                ctx.fillText(valueOfClick, 260, 260, 140);
                mt[1][1] = valueOfMatrix
                ++check
            } else if (y > 400 && mt[2][1] == 0) {
                ctx.fillText(valueOfClick, 260, 460, 140);
                mt[2][1] = valueOfMatrix
                ++check
            }
        } else if (x > 400) {
            if (y < 200 && mt[0][2] == 0) {
                ctx.fillText(valueOfClick, 460, 60, 140);
                mt[0][2] = valueOfMatrix
                ++check
            } else if (y > 200 && y < 400 && mt[1][2] == 0) {
                ctx.fillText(valueOfClick, 460, 260, 140);
                mt[1][2] = valueOfMatrix
                ++check
            } else if (y > 400 && mt[2][2] == 0) {
                ctx.fillText(valueOfClick, 460, 460, 140);
                mt[2][2] = valueOfMatrix
                ++check
            }
        }
        if (check == 0) {
            --currentPlayer
        }
        if (mt[0][1] == mt[0][2] && mt[0][1] == mt[0][0] && mt[0][0] != 0) {
            ctx.beginPath();
            ctx.moveTo(0, 100);
            ctx.lineTo(600, 100);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[1][1] == mt[1][2] && mt[1][1] == mt[1][0] && mt[1][0] != 0) {
            ctx.beginPath();
            ctx.moveTo(0, 300);
            ctx.lineTo(600, 300);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[2][1] == mt[2][2] && mt[2][1] == mt[2][0] && mt[2][0] != 0) {
            ctx.beginPath();
            ctx.moveTo(0, 500);
            ctx.lineTo(600, 500);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[1][0] == mt[2][0] && mt[1][0] == mt[0][0] && mt[0][0] != 0) {
            ctx.beginPath();
            ctx.moveTo(100, 0);
            ctx.lineTo(100, 600);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[1][1] == mt[2][1] && mt[1][1] == mt[0][1] && mt[0][1] != 0) {
            ctx.beginPath();
            ctx.moveTo(300, 0);
            ctx.lineTo(300, 600);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[1][2] == mt[2][2] && mt[1][2] == mt[0][2] && mt[0][2] != 0) {
            ctx.beginPath();
            ctx.moveTo(500, 0);
            ctx.lineTo(500, 600);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[0][0] == mt[1][1] && mt[1][1] == mt[2][2] && mt[2][2] != 0) {
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(600, 600);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (mt[2][0] == mt[1][1] && mt[2][0] == mt[0][2] && mt[0][2] != 0) {
            ctx.beginPath();
            ctx.moveTo(600, 0);
            ctx.lineTo(0, 600);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
        } else if (currentPlayer == 9) {
            outputTiht()
            currentPlayer = 10
        }
    })
}

function restart() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    currentPlayer = 0;
    mt = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    draw()
}

function outputWinner(win) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Castigatorul este " + win, 50, 200, 440);
    clearInterval(nIntervId);
    nIntervId = null
}

function outputTiht() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Egalitate", 50, 200, 440);
}
