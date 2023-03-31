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
        ctx.textBaseline = "middle"
        ctx.textAlign = "center";
        ++currentPlayer
        let valueOfMatrix = 4
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
        for (let i = 0; i < 3; ++i) {
            for (let j = 0; j < 3; ++j) {
                if (x - i * 200 < 200 &&x - i * 200>0&& y - j * 200 < 200 &&y - j * 200 >0&& mt[j ][i ] == 0) {
                    ctx.fillText(valueOfClick, 100 + i * 200, 100 + j * 200, 140);
                    mt[j][i] = valueOfMatrix
                    ++check
                }
            }
        }

        if (check == 0) {
            --currentPlayer
        }
        for(let i=0;i<3;++i){
            let checkLine=0
            let checkColomn = 0
            for (let j=0;j<3;++j){
                checkLine+=mt[i][j]
                checkColomn+=mt[j][i]
            }
            if(checkLine==valueOfMatrix*3){
                ctx.beginPath();
                ctx.moveTo(0, 100+i*200);
                ctx.lineTo(600, 100+i*200);
                ctx.stroke();
                nIntervId = setInterval(outputWinner, 1000, valueOfClick)
                currentPlayer = 10
                i=4
            }
            if(checkColomn==valueOfMatrix*3){
                ctx.beginPath();
            ctx.moveTo(100+i*200, 0);
            ctx.lineTo(100+i*200, 600);
            ctx.stroke();
            nIntervId = setInterval(outputWinner, 1000, valueOfClick)
            currentPlayer = 10
            i=4
            }
        }
        if (mt[0][0] == mt[1][1] && mt[1][1] == mt[2][2] && mt[2][2] != 0) {
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
    ctx.fillText("Castigatorul este " + win, 300, 300, 440);
    clearInterval(nIntervId);
    nIntervId = null
}

function outputTiht() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Egalitate", 300, 300, 440);
}
