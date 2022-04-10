const result = document.querySelector("#result");
const btn = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const resetBtn = document.querySelector(".reset");
const plusMinus = document.querySelector(".plusMinus");


function inputtingNumber() {
    result.innerText = result.innerText + this.innerText;
    resetBtn.innerText = "C";
}

function outputtingResult() {
    let Result;
    Result = eval(result.innerText);
    result.innerText = Result;
}

function reset() {
    result.innerText = "";
    resetBtn.innerText = "AC";
}

function changePlusMinus() {
    if(result.innerText < 0) {
    result.innerText = Math.abs(Number(result.innerText));
    } else if(result.innerText > 0) {
        result.innerText = -1 * Number(result.innerText);
    }
}

equal.addEventListener("click",outputtingResult)
resetBtn.addEventListener("click",reset);
plusMinus.addEventListener("click",changePlusMinus);

for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click",inputtingNumber);
} 














