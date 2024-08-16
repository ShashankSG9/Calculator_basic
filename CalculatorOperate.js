let inputIn = document.getElementById("input-info");

let result = "";

let isCalciOn = false;

let toUpdateIn = 0;

let isDetected = false;

let caretPosition = 0;

let inInputNew = "";

let isCleared = false;


// NUMBER REGION
function onInputNine() {
    if (isCalciOn) {
        toUpdateIn = 9;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}


function onInputEight() {
    if (isCalciOn) {
        toUpdateIn = 8;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputSeven() {
    if (isCalciOn) {
        toUpdateIn = 7;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputSix() {
    if (isCalciOn) {
        toUpdateIn = 6;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputFive() {
    if (isCalciOn) {
        toUpdateIn = 5;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputFour() {
    if (isCalciOn) {
        toUpdateIn = 4;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputThree() {
    if (isCalciOn) {
        toUpdateIn = 3;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputTwo() {
    if (isCalciOn) {
        toUpdateIn = 2;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputOne() {
    if (isCalciOn) {
        toUpdateIn = 1;
        onUpdateInput(toUpdateIn);
        onDetectingZero(isDetected);
    }
}

function onInputZero() {
    if (isCalciOn) {
        toUpdateIn = 0;
        if (caretPosition >= 0) {
            onUpdateInput(toUpdateIn);
        }
        inputIn.focus();
    }
}

//CLEAR FIELD
function onInputClear() {
    if (isCalciOn) {
        inputIn.value = "";
        inputIn.focus();
        caretPosition = 0;
        isCalled = false;
        inInputNew = "";
        toUpdateIn = 0;
        isDetected = false;
    }
}


// CONCAT DOT
function onInputDot() {
    if (isCalciOn) {
        toUpdateIn = ".";
        onUpdateInput(toUpdateIn);
    }
}


// ZERO DETECTOR
function onDetectingZero(isDetectedIn) {
    if (inputIn.value[0] === "0" && !isDetectedIn) {
        inputIn.value = parseFloat(inputIn.value);
        caretPosition = inputIn.value.length;
        isDetected = true;
    }
    inputIn.focus();
}


// OPERATION REGION
function onOperateDivide() {
    if (isCalciOn) {
        toUpdateIn = "/";
        if (caretPosition >= 0) {
            isCleared = false;
            isDetected = true;
            onUpdateInput(toUpdateIn);
        } else {
            inputIn.value += "/";
            inputIn.focus();
        }
    }
}

function onOperateMultiply() {
    if (isCalciOn) {
        toUpdateIn = "*";
        if (caretPosition >= 0) {
            isCleared = false;
            isDetected = true;
            onUpdateInput(toUpdateIn);
        } else {
            inputIn.value += "*";
            inputIn.focus();
        }
    }
}

function onOperateSubtsract() {
    if (isCalciOn) {
        toUpdateIn = "-";
        if (caretPosition >= 0) {
            isCleared = false;
            isDetected = true;
            onUpdateInput(toUpdateIn);
        } else {
            inputIn.value += "-";
            inputIn.focus();
        }
    }
}

function onOperateSum() {
    if (isCalciOn) {
        toUpdateIn = "+";
        if (caretPosition >= 0) {
            isCleared = false;
            isDetected = true;
            onUpdateInput(toUpdateIn);
        } else {
            inputIn.value += "+";
            inputIn.focus();
        }
    }
}


// RESULT
function onResult() {

    if (isCalciOn) {
        result = "";
        let count = 0, detectMinus = "-";
        let concater = "", collect = "";

        if ((inputIn.value.includes("/") || inputIn.value.includes("*")) && inputIn.value.includes("+") || inputIn.value.includes("-")) {
            onBodmasBegin();
        }

        for (let each of inputIn.value) {

            switch (each) {

                case "/": {
                    collect = onConcatParameter(each, collect, count);

                    result = parseFloat(concater) / parseFloat(collect);

                    concater = result;

                    break;
                }

                case "*": {
                    collect = onConcatParameter(each, collect, count);

                    result = parseFloat(concater) * parseFloat(collect);

                    concater = result;

                    break;
                }
                case "+": {
                    collect = onConcatParameter(each, collect, count);

                    result = parseFloat(concater) + parseFloat(collect);

                    concater = result;

                    break;
                }
                case "-": {
                    collect = onConcatParameter(each, collect, count);

                    if (each === detectMinus) {
                        concater = "-" + collect;
                        result = concater;
                    } else {
                        result = parseFloat(concater) - parseFloat(collect);

                        concater = result;

                    }

                    break;
                }
                default: {

                    if (result === "") {
                        concater += "" + each;
                    }
                    detectMinus = "";
                }
            }

            count++;
        }

        //=========================================== OUTPUT ==============================================
        inputIn.value = result;
        //=================================================================================================

        caretPosition = parseInt(inputIn.value.length);
        isCleared = true;
        isDetected = false;

        inputIn.setSelectionRange(caretPosition, caretPosition);
    }
}


function onConcatParameter(inEach, inCollect, inCount) {

    inCollect = "";
    let i = inputIn.value.indexOf(inEach);
    while (i <= inCount) {
        if (i === inCount) {
            i++;
            break;
        }
        i++;
    }

    while (i < inputIn.value.length) {
        let check = inputIn.value[i];
        if (check === "/" || check === "*" || check === "-" || check === "+") {
            break;
        } else {
            inCollect += "" + check;
        }
        i++;
    }

    return inCollect;
}



// DISPLAY CONFIG
// if (!isCalciOn) {
//     inputIn.setAttribute("readonly", true);
// }

// ON AND OFF
function onCalciOn() {
    onInputClear();
    inputIn.removeAttribute("readonly", true);

    if (!isCalciOn) {
        inputIn.value = "KALC";

        inputIn.style.textAlign = "center";
        setTimeout(() => {
            inputIn.value = "";
            inputIn.style.textAlign = "right";

            inputIn.focus();
        }, 650);
    }
    // inputIn.style.caretColor = "green";
    isCalciOn = true;
}

function onCalciOff() {
    onInputClear();
    if (isCalciOn) {
        inputIn.value = "KALC";
        inputIn.style.textAlign = "center";
        setTimeout(() => {
            inputIn.value = "";
            inputIn.style.textAlign = "right";
            inputIn.blur();
        }, 650);
    }

    inputIn.setAttribute("readonly", true);
    isCalciOn = false;
}


//MOVE CARET
let checkLength = 0;
function onLeftShiftCaret() {
    if (isCalciOn) {
        checkLength = inputIn.value.length;
        if (caretPosition > 0) {
            caretPosition--;
        }
        inputIn.focus();
        inputIn.setSelectionRange(checkLength, caretPosition);
    }
}

function onRightShiftCaret() {
    if (isCalciOn) {
        checkLength = inputIn.value.length;
        if (caretPosition < inputIn.value.length) {
            caretPosition++;
        }
        inputIn.focus();
        inputIn.setSelectionRange(checkLength, caretPosition);
    }
}


//INPUT UPDATE BY CARET
function onUpdateInput(updateInNum) {
    if (isCleared) {
        inputIn.value = "";
        caretPosition = 0;
        isCleared = false;
    }

    inInputNew = inputIn.value.split("");
    inInputNew.splice(caretPosition, 0, updateInNum);
    inInputNew = inInputNew.join("");

    inputIn.value = inInputNew;
    caretPosition++;

    inputIn.focus();
    inputIn.setSelectionRange(caretPosition, caretPosition);
}

//DELETE ELEMENT
function onDeleteElement() {
    if (isCalciOn) {
        if (caretPosition > 0 && inputIn.value.length > 0) {

            caretPosition--;

            inInputNew = inputIn.value.split("");
            inInputNew.splice(caretPosition, 1);
            inInputNew = inInputNew.join("");

            inputIn.value = inInputNew;
        }

        if (caretPosition === 0 && inputIn.value.length === 0) {
            isDetected = false;
        }

        inputIn.focus();
        inputIn.setSelectionRange(caretPosition, caretPosition);
    }
}


//===================================BODMAS REGION====================================

let deleteStart = 0, deleteCount = 0;

let toInput = "";

let firstNum = "", secondNum = "";

let firstOutput = "";

let isIterateCalled = false;


function onBodmasBegin() {

    if (inputIn.value.includes("/")) {
        onOperandDivide();
    }

    deleteStart = 0, deleteCount = 0;

    firstNum = "", secondNum = "";

    firstOutput = "";

    isIterateCalled = false;

    // console.log("here");
    if (inputIn.value.includes("*")) {
        onOperandMultiply();
    }
}


function onOperandDivide() {

    let countIndex = 0;

    for (let b = 0; b < inputIn.value.length; b++) {

        if (inputIn.value[b] === "/" && b === countIndex) {

            deleteCount++;

            for (let i = b - 1; i >= 0; i--) {
                if (inputIn.value[i] === "/" || inputIn.value[i] === "*" || inputIn.value[i] === "+" || inputIn.value[i] === "-") {
                    break;
                } else {
                    firstNum = inputIn.value[i] + firstNum;
                    deleteStart = i;
                }

                deleteCount++;
            }

            for (let i = b + 1; i < inputIn.value.length; i++) {
                if (inputIn.value[i] === "/" || inputIn.value[i] === "*" || inputIn.value[i] === "+" || inputIn.value[i] === "-") {
                    break;
                } else {
                    secondNum += inputIn.value[i];
                }

                deleteCount++;
            }

            firstOutput = firstNum / secondNum;

            toInput = inputIn.value.split("");
            toInput.splice(deleteStart, deleteCount, firstOutput);
            toInput = toInput.join("");


            if (toInput.includes("/")) {
                isIterateCalled = true;
                onIterateInputAgain(isIterateCalled);
            }
        }

        countIndex++;
    }

    inputIn.value = toInput;
}


function onOperandMultiply() {

    let countIndex = 0;

    for (let b = 0; b < inputIn.value.length; b++) {

        if (inputIn.value[b] === "*" && b === countIndex) {

            deleteCount++;

            for (let i = b - 1; i >= 0; i--) {
                if (inputIn.value[i] === "/" || inputIn.value[i] === "*" || inputIn.value[i] === "+" || inputIn.value[i] === "-") {
                    break;
                } else {
                    firstNum = inputIn.value[i] + firstNum;
                    deleteStart = i;
                }

                deleteCount++;
            }

            for (let i = b + 1; i < inputIn.value.length; i++) {
                if (inputIn.value[i] === "/" || inputIn.value[i] === "*" || inputIn.value[i] === "+" || inputIn.value[i] === "-") {
                    break;
                } else {
                    secondNum += inputIn.value[i];
                }

                deleteCount++;
            }


            firstOutput = firstNum * secondNum;

            toInput = inputIn.value.split("");
            toInput.splice(deleteStart, deleteCount, firstOutput);
            toInput = toInput.join("");


            if (toInput.includes("*")) {
                isIterateCalled = true;
                onIterateInputAgain(isIterateCalled);
            }
        }

        countIndex++;
    }

    inputIn.value = toInput;

}



function onIterateInputAgain(isCalling) {
    if (isCalling) {
        inputIn.value = toInput;

        deleteStart = 0; deleteCount = 0;

        firstNum = "", secondNum = "";

        isIterateCalled = false;

        onBodmasBegin();
    }
}

// 23-125/25+28/7-10*8/4