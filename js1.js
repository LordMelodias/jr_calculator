var a, b;

function add()
{
    var add;
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    add = a + b;
    document.getElementById("ans1").value = add;
}

function sub()
{
    var sub;
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    sub = a - b;
    document.getElementById("ans2").value = sub;
}

function mul()
{
    var mul;
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    mul = a * b;
    document.getElementById("ans3").value = mul;
}

function div()
{
    var div;
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    div = a / b;
    document.getElementById("ans4").value = div;
}