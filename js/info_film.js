
var x = document.getElementById("myDIV1");
var y = document.getElementById("myDIV2");
var z = document.getElementById("myDIV3");
var btn1 = document.getElementById("bt1")
var btn2 = document.getElementById("bt2")
var btn3 = document.getElementById("bt3")
x.style.display = "block"
btn1.style.backgroundColor = "orange"
btn2.style.backgroundColor = "grey"
btn3.style.backgroundColor = "grey"
function myFunction1() {
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        btn1.style.backgroundColor = "orange"
        btn2.style.backgroundColor = "grey"
        btn3.style.backgroundColor = "grey"
    } else {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        btn1.style.backgroundColor = "orange"
        btn2.style.backgroundColor = "grey"
        btn3.style.backgroundColor = "grey"
    }
}
function myFunction2() {
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        btn1.style.backgroundColor = "grey"
        btn2.style.backgroundColor = "orange"
        btn3.style.backgroundColor = "grey"
    } else {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
        btn1.style.backgroundColor = "grey"
        btn2.style.backgroundColor = "orange"
        btn3.style.backgroundColor = "grey"
    }
}
function myFunction3() {
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        btn1.style.backgroundColor = "grey"
        btn2.style.backgroundColor = "grey"
        btn3.style.backgroundColor = "orange"
    } else {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
        btn1.style.backgroundColor = "grey"
        btn2.style.backgroundColor = "grey"
        btn3.style.backgroundColor = "orange"
    }
}