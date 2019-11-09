var stack = [];
var operators = ['+', '-', '*', '/'];

function push(element) {
    if (operators.includes(element) && isLastOperator()) {
        stack.pop();
    }
    stack.push(element);
    refreshOutput(stack.join(""));
}

function evalutate() {
    var ans = eval(stack.join(""));
    refreshOutput(ans);
    stack = [ans];
    refreshOutput(stack.join(""));
}

function clearF() {
    stack = [];
    refreshOutput(stack.join(""));
}

function refreshOutput(value) {
    var outputObj = document.getElementById("output-box");
    outputObj.value = value;
}

function isLastOperator() {
    var lastLetter = stack[stack.length - 1];
    if (operators.includes(lastLetter)) {
        return true;
    }
    return false;
}

function customEval(exp) {

}

$(document).ready(function () {
    document.getElementById("output-box").value = "";
});


/**
 * aditya.v@wayforward.io

 **/
