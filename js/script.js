function calculate() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    

    var sum = 1/2 * number1 * number2;

    var result = "L = 1/2 * a * t " + "<br>" + "L = 1/2" + " * " + number1 + " * " + number2 + "<br>" + "L = " + sum

    document.getElementById("result").innerHTML = result;

}

function calculateKeliling() {
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);
    var number3 = parseFloat(document.getElementById("number3").value);

    var sum = number1 + number2 + number3;

    var result = "K = A + B + C" + "<br>" + "K = " + number1 + " + " + number2 + " + " +number3 + "<br>" + "K = " + sum
    
    document.getElementById("result").innerHTML = result;

}