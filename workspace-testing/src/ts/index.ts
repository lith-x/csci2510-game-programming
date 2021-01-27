const cvs = document.querySelector("canvas") as HTMLCanvasElement;
const cvsWIDTH = 500;
const cvsHEIGHT = 500;
cvs.width = cvsWIDTH;
cvs.height = cvsHEIGHT;
cvs.style.display = "block";
cvs.style.margin = "auto";

const ctx = cvs.getContext("2d");

const sqNUM = 70;
const sqHEIGHT = 50;
const sqWIDTH = 50;
for (let i = 0; i < sqNUM; i++) {
    ctx.fillStyle = `hsl(${i / sqNUM * 360}, 100%, 50%)`;
    ctx.fillRect(i * (cvsWIDTH - sqWIDTH) / (sqNUM - 1), i * (cvsHEIGHT - sqHEIGHT) / (sqNUM - 1), sqWIDTH, sqHEIGHT);
}

for (let i = 0; i < sqNUM; i++) {
    ctx.fillStyle = `hsl(${i / sqNUM * 360}, 100%, 50%)`;
    ctx.fillRect((cvsWIDTH - sqWIDTH) - (i * (cvsWIDTH - sqWIDTH) / (sqNUM - 1)), i * (cvsHEIGHT - sqHEIGHT) / (sqNUM - 1), sqWIDTH, sqHEIGHT);
}

ctx.font = "50pt Arial";
ctx.lineWidth = 1.25;
ctx.fillText("colors weeeeeeee", 10, cvsHEIGHT / 2);
ctx.strokeText("colors weeeeeeee", 10, cvsHEIGHT / 2);