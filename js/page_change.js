var p1 = document.getElementById("page1")
var p2 = document.getElementById("page2")
var p3 = document.getElementById("page3")
var p4 = document.getElementById("page4")

var btn1 = document.getElementById("btn1")
var btn2 = document.getElementById("btn2")
var btn3 = document.getElementById("btn3")
var btn4 = document.getElementById("btn4")

p1.style.display = "flex"
p2.style.display = "none"
p3.style.display = "none"
p4.style.display = "none"

btn1.style.backgroundColor = "skyblue"
btn2.style.backgroundColor = "grey"
btn3.style.backgroundColor = "grey"
btn4.style.backgroundColor = "grey"

function page1() {
    p1.style.display = "flex"
    p2.style.display = "none"
    p3.style.display = "none"
    p4.style.display = "none"

    btn1.style.backgroundColor = "skyblue"
    btn2.style.backgroundColor = "grey"
    btn3.style.backgroundColor = "grey"
    btn4.style.backgroundColor = "grey"

    document.documentElement.scrollTop = 650
}

function page2() {
    p1.style.display = "none"
    p2.style.display = "flex"
    p3.style.display = "none"
    p4.style.display = "none"

    btn1.style.backgroundColor = "grey"
    btn2.style.backgroundColor = "skyblue"
    btn3.style.backgroundColor = "grey"
    btn4.style.backgroundColor = "grey"
    
    document.documentElement.scrollTop = 650
}

function page3() {
    p1.style.display = "none"
    p2.style.display = "none"
    p3.style.display = "flex"
    p4.style.display = "none"

    btn1.style.backgroundColor = "grey"
    btn2.style.backgroundColor = "grey"
    btn3.style.backgroundColor = "skyblue"
    btn4.style.backgroundColor = "grey"

    document.documentElement.scrollTop = 650
}

function page4() {
    p1.style.display = "none"
    p2.style.display = "none"
    p3.style.display = "none"
    p4.style.display = "flex"

    btn1.style.backgroundColor = "grey"
    btn2.style.backgroundColor = "grey"
    btn3.style.backgroundColor = "grey"
    btn4.style.backgroundColor = "skyblue"

    document.documentElement.scrollTop = 650
}