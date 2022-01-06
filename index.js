var r = 255
var g = 0
var b = 0

var color_index = 1

function changecolor() {
    var element = document.getElementsByTagName("body")[0]
    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}



window.setInterval(function() {
    if(color_index == 1) {
        if(g >= 255) {
            color_index = 2
        } else {
            g++
            changecolor()
        }
    } else if(color_index == 2) {
        if(r <= 0) {
            color_index = 3
        } else {
            r--
            changecolor()
        }
    } else if(color_index == 3) {
        if(b >= 255) {
            color_index = 4
        } else {
            b++
            changecolor()
        }
    } else if(color_index == 4) {
        if(g <= 0) {
            color_index = 5
        } else {
            g--
            changecolor()
        }
    } else if(color_index == 5) {
        if(r >= 255) {
            color_index = 6
        } else {
            r++
            changecolor()
        }
    } else if(color_index == 6) {
        if(b <= 0) {
            color_index = 1
        } else {
            b--
            changecolor()
        }
    }
})