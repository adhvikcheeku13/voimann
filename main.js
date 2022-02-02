x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
//draw_tri = "";
draw_squa = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "Laptop can hear u speak now";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if (content == "circle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing circle ";
        draw_circle = "set";
    }
    if (content == "rectangle") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing rectangle ";
        draw_rect = "set";
    }
    if (content == "square") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Started drawing square ";
        draw_squa = "set";
    }
    //if (content == "triangle") {
        //x = Math.floor(Math.random() * 900);
        //y = Math.floor(Math.random() * 600);
       // document.getElementById("status").innerHTML = "Started drawing triangle ";
        //draw_tri = "set";
    //}
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn. ";
        draw_circle = "";
    }
    if (draw_rect == "set") {
     rect(x,y,70,50);   
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect= "";
    }
    //if (draw_tri == "set") {
       // triangle(30, 75, 58, 20, 86, 75);   
          // document.getElementById("status").innerHTML = "Triangle is drawn. ";
          // draw_tri= "";
       //}
       if (draw_squa == "set") {
        radius = Math.floor(Math.random() * 100);
        square(x,y,radius);   
           document.getElementById("status").innerHTML = "Square is drawn. ";
           draw_squa= "";
       }
}