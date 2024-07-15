"use strict";
//function to convert array-like objects to arrays.
function _toConsumableArray(a){
    if (Array.isArray(a)){
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
    }
    return Array.from(a);
}
//initial variable and state.
var playing = true;
var interval = timer();//starts the timer instantly.
//timer() function increments counter every second.
function timer(){
    return setInterval(function() {
        var a = document.getElementById("counter");
        var b = parseInt(a.innerText);
        a.innerText = b + 1;
    }, 1000);
}
// event listeners for forms and buttons.
//manually increment and decrement the counter.
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");

minus.addEventListener("click", function(){
    var a = document.getElementById("counter");
    var b = parseInt(a.innerText);
    a.innerText = b - 1;
});

plus.addEventListener("click", function() {
    var a = document.getElementById("counter");
    var b = parseInt(a.innerText);
    a.innerText = b + 1;
});

//like the individual number of a counter
var heart = document.getElementById("heart");
heart.addEventListener("click", function() {
    var a = document.getElementById("counter");
    var b = parseInt(a.innerText);
    var c = document.querySelector(".likes");
    var d;
    
    if ([].concat(_toConsumableArray(c.children)).map(function(a) {
        return parseInt(a.dataset.num);
    }).includes(b)) {
        d = document.querySelector('[data-num="' + b + '"]');
        var e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times";
    } else {
        d = document.createElement("li");
        d.setAttribute("data-num", b);
        d.innerHTML = b + " has been liked <span>1</span> time";
        c.appendChild(d);
    }
});
//pause and resume the counter.
var pause = document.getElementById("pause");
pause.addEventListener("click", function() {
    if (playing) {
        playing = false;
        clearInterval(interval);//pauses the timer
        this.innerText = "resume";//changes button text to "resume"
        } else {
            playing = true;
            interval = timer();//resumes the timer
            this.innerText = "pause";//changes button text to "pause"
            }
            //disables all buttons except pause/resumes based on playing state.
            [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) {
                if (a.id !== "pause") {
                    a.disabled = !playing;
                }
            });
        });
        //leaves comments on gameplay.
        var commentForm = document.getElementsByTagName("form")[0];
        commentForm.addEventListener("submit", function(a) {
            a.preventDefault();
            var b = this.children[0];
            var c = b.value;
            b.value = "";
            var d = document.querySelector(".comments");
            var e = document.createElement("p");
            e.innerText = c;
            d.appendChild(e);
        });