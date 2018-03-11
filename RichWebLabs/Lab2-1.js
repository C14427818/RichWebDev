/**
 * Created by ORuairc on 05/10/2017.
 */
function btnPlus() {

    document.calculator.display.value += '+';
    document.calculator.display.value.style.textAlign = "right";
}

function btnMin() {

    document.calculator.display.value += '-';
    document.calculator.display.value.style.textAlign = "right";

}

function btnMult() {

    document.calculator.display.value += '*';
    document.calculator.display.value.style.textAlign = "right";

}

function btnDiv() {

    document.calculator.display.value += '/';
    document.calculator.display.value.style.textAlign = "right";

}

function btnMod() {

    if(document.calculator.display.value == 0){
        document.calculator.display.value += "";
    }
    else if(document.calculator.display.value > 0 || document.calculator.display.value < 0) {
        document.calculator.display.value = (document.calculator.display.value) * -1;
        document.calculator.display.value.style.textAlign = "right";
    }
}

function btnClear() {

    document.calculator.display.value = "";
    document.calculator.display.value.style.textAlign = "right";

}

function btnDot() {

    document.calculator.display.value += '.';
    document.calculator.display.value.style.textAlign = "right";

}
