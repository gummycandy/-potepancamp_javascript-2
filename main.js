var resultArea;
var is_calc = false;
var inputNumber = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

window.addEventListener("load",function() {
    resultArea = null;
    resultArea = document.getElementById('resultArea');
})

function clickClear() {
    resultArea.value = "0";
    is_calc = false;
    
    document.getElementById("inputPoint").disabled=false;
}

function clickNumber(val) {
    if(is_calc)  resultArea.value = "0";
    is_calc = false;  

    if(resultArea.value =="0" && val == "0"){
        resultArea.value = "0";
    }else if(resultArea.value =="0" && val == "00"){
        resultArea.value = "0";
    }else if(resultArea.value == "0"){
        resultArea.value = val;
    }else{
        resultArea.value += val;
    }
}

function clickFBAO(val) {
    if(resultArea.value == "0") resultArea.value = val;
    
    if(is_clickFBAO_last()) {
        resultArea.value = resultArea.value.slice(0, -1) + val;
    }else {
        resultArea.value += val;
    }
}

function clickPoint(val) {
    if(can_clickPoint()) {
        if(["."].includes.resultArea.value) {
            if(["+","-","*","/"].includes.resultArea.value) {
                if(resultArea.indexOf(".") < resultArea.indexOf("+","-","*","/") && resultArea.split(".").length === resultArea.split("+","-","*","/").length + 1) {
                    resultArea.value += val;
                }else {
                    resultArea.value = resultArea.value.slice(0);
                }
            }else {
                resultArea.value = resultArea.value.slice(0);
            }
        }else {
            resultArea.value += val;
        }
    }else {
        resultArea.value = resultArea.value.slice(0);
    }
}

function clickEqual() {
    if(is_clickFBAO_last())  resultArea.value = resultArea.value.slice(0);

    var temp = new Function("return "  + resultArea.value)();
    if(temp == Infinity || Number.isNaN(temp)){
        resultArea.value = "Error";
    }else{
        resultArea.value = temp;
        is_calc = true;
    }
    
}

function is_clickFBAO_last() {
    return ["+","-","*","/"].includes(resultArea.value.toString().slice(-1));
}

function can_clickPoint() {
    return inputNumber.includes(resultArea.value.toString().slice(-1));
}