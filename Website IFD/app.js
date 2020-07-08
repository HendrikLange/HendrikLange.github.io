var hold = document.createElement("IMG")
window.onload = function () {


    //essential variables
    var canvas = document.getElementById("canvas"),
        ctx = canvas.getContext("2d"),
        aniId;
    //parameters
    var gradient = ctx.createLinearGradient(0, 0, 0, 1050);
    gradient.addColorStop(0, "rgb(205, 82, 19)");
    gradient.addColorStop(1, "rgb(231, 185, 68)");

    var w = canvas.width = window.innerWidth,
        h = canvas.height = window.innerHeight,
        particles = [],	//particle array
        level = 3,
        fill = false,
        color = gradient,
        c;
    //Particle object constructor
    function particle(x, y, d) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.respawn = function () {
            this.x = Math.random() * (w * 0.8) + (0.1 * w);
            this.y = Math.random() * 30 + h - (h - 100) * level / 100 - 50 + 50;
            this.d = Math.random() * 5 + 5;
        };
    }
    //function to start or restart the animation
    function init() {
        c = 0;
        particles = [];
        for (var i = 0; i < 50; i++) {
            var obj = new particle(0, 0, 0);
            obj.respawn();
            particles.push(obj);
        }
        aniId = window.requestAnimationFrame(draw);
    }
    //function that draws into the canvas in a loop
    function draw() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = color;
        ctx.strokeStyle = color;

        //draw the liquid
        ctx.beginPath();
        ctx.moveTo(w, h - (h - 100) * level / 100 - 50);
        ctx.lineTo(w, h);
        ctx.lineTo(0, h);
        ctx.lineTo(0, h - (h - 100) * level / 100 - 50);
        var temp = (50 * Math.sin(c * 1 / 50));
        ctx.bezierCurveTo((w / 3), h - (h - 100) * level / 100 - 50 - temp,
            (2 * w / 3), h - (h - 100) * level / 100 - 50 + temp,
            w, h - (h - 100) * level / 100 - 50);
        ctx.fill();

        //draw the bubbles
        for (var i = 0; i < 40; i++) {
            ctx.beginPath();
            ctx.arc(particles[i].x, particles[i].y, particles[i].d, 0, 2 * Math.PI);
            if (fill)
                ctx.fill();
            else
                ctx.stroke();
        }
        //debug
        ctx.fillText("c:" + c + " lv:" + level, 10, 10);

        update();
        aniId = window.requestAnimationFrame(draw);
    }
    //function that updates variables
    function update() {
        c++;
        if (100 * Math.PI <= c)
            c = 0;
        for (var i = 0; i < 50; i++) {
            particles[i].x = particles[i].x + Math.random() * 2 - 1;
            particles[i].y = particles[i].y - 1;
            particles[i].d = particles[i].d - 0.04;
            if (particles[i].d <= 0)
                particles[i].respawn();
        }
    }
    /* document.getElementById("level").oninput = function () {
        level = document.getElementById("level").value;
    }
    document.getElementById("Filled_Hollow").onchange = function () {
        fill = document.getElementById("Filled_Hollow").checked;
    }
    document.getElementById("blue_red").onchange = function () {
        if (document.getElementById("blue_red").checked)
            color = "#34A7C1";
        else
            color = "tomato";
    } */
    //update canvas size when resizing the window
    window.addEventListener('resize', function () {
        //update the size
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
        //stop the animation befor restarting it
        window.cancelAnimationFrame(aniId);
        init();
    });
    //start animation
    init();




    (function () {
        var number = 1;
        var handle
        function progress() {

           /*  document.getElementById("bam").style.height = number++ + "%" */
           /* document.getElementById("canvas").style.display =" block" */
           level= level + 0.8;
            console.log(level)
            if(level > 100){
                window.location.reload();
            }

        }

        var mouseTimer;
        function mouseDown() {
            mouseUp();
            mouseTimer = window.setTimeout(execMouseDown, 200); //set timeout to fire in 2 seconds when the user presses mouse button down
        }

        function mouseUp() {
            if (mouseTimer) window.clearTimeout(mouseTimer);  //cancel timer when mouse button is released
            div.style.backgroundColor = "#FFFFFF";
            console.log(mouseTimer)
            clearInterval(handle)
        }

        function execMouseDown() {
            div.style.backgroundColor = "#CFCF00";
            handle = setInterval(progress, 25);



            //   setInterval(function(){  console.log() }, 50);
            /*  for( var i= 0; i < 100; i++)
             {
                
             } */
        }

        var div = document.getElementById("bam");
        document.getElementById("video").addEventListener("ended", addEvents)
        function addEvents(){
        console.log("events hinzu")
         window.addEventListener("mousedown", mouseDown); // REMAP AUF MOUSE // Event erst am ende hinzufügen video ended
        window.addEventListener("mouseup", mouseUp);  //listen for mouse up event on body, not just the element you originally clicked on 
        }

    }());







function guck(){

   
        if (event.keyCode === 13) {
           

        }
  


}




    init2();

    //console.log(music)


    function showHold() {
      //  document.getElementById("bam").style.display = " flex"
        document.getElementById("canvas").style.display =" block"

    }

    var video = document.getElementById("video");

    video.addEventListener("timeupdate", pause1);
    video.addEventListener("ended", showHold)
    video.addEventListener("ended", holdPeach)
    video.addEventListener("ended", function (event) {
    video.removeEventListener("keyup", keyCode, true);      
    });


 
    var pause1 = document.createElement("IMG")

    function pause1() {

        if (video.currentTime >= 1.75 * 1 && video.currentTime <= 1 * 2.1) {
            video.pause();

            pause1.setAttribute("src", "gif.gif");
            pause1.id = "pause1";
            pause1.setAttribute("onclick", "hide()");
            pause1.classList.add("animate__animated", "animate__fadeInUp");
            pause1.addEventListener("click", playVideo);


            window.addEventListener("keyup", keycode);

            document.body.appendChild(pause1);
            pause1.style.left = "5%"
            pause1.style.top = "30%"
            console.log(video.currentTime);
        }
        else if (video.currentTime >= 2 * 1 && video.currentTime <= 1 * 8) {

            playVideo();
            console.log("start 2")
 
        }
        else if (video.currentTime >= 8.5 * 1 && video.currentTime <= 1 * 8.75) {
            pauseVideo();
            document.body.appendChild(pause1);
            pause1.style.left = "70%"
            pause1.style.top = "23%"

        }

        else if (video.currentTime >= 20 * 1 && video.currentTime <= 1 * 20.3) {
            pauseVideo();
            document.body.appendChild(pause1);
            pause1.style.left = "5%"
            pause1.style.top = "30%"
        }




    }




}

function holdPeach() {
    hold.setAttribute("src", "grab2.png");
    hold.id = "grab2";
  //  hold.setAttribute("onclick", "hideHold()");
    hold.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1s");
    //hold.addEventListener("click", playVideo);
    document.body.appendChild(hold);
    //console.log("endegelände") 

   /*  window.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            setTimeout(function () {
                // hold.remove();
                window.location.reload();
                //hold.click();
                //playVideo();


                console.log("RESTART")



            }, 3000);

        }
    }); */


}


function move() {
    var progress = document.getElementById("progressbar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            progress.value = width
        }
    }
}

function timer() {



}


function keycode() {
    if (event.keyCode === 32) {
        event.preventDefault();
        pause1.click();

    }


}

function hide() {
    pause1.remove();

}

function hideHold() {

    hold.remove();

}

var counter = 1;
function mute() {


    if (counter == 0) {
        document.getElementById("sound").muted = false;
        document.getElementById("mute").src = "unmute.png"
        counter = 1;
    }
    else if (counter == 1) {
        document.getElementById("sound").muted = true;
        document.getElementById("mute").src = "mute.png"
        counter = 0;
    }


}


/* var infoCounter = 1;
function toggleInfo(){
    if(infoCounter == 0){
        //document.getElementById("startingPoint").style.visibility = "hidden";
        
        document.getElementById("startingPoint").classList.add("animate__animated", "animate__fadeOutDown");
        document.getElementById("startingPoint").classList.remove("animate__animated", "animate__fadeOutDown");
         
        document.getElementById("startingPoint").style.visibility = "hidden";
      
    infoCounter = 1;
    console.log(infoCounter)
    }
    else if(counter == 1)
    {
       
        document.getElementById("startingPoint").style.visibility = "visible";
      document.getElementById("startingPoint").classList.add("animate__animated", "animate__fadeInUp");
      document.getElementById("startingPoint").classList.remove("animate__animated", "animate__fadeInUp");
        infoCounter = 0;
        console.log(infoCounter)
    }


}
 */


$(document).ready(function () {
    $('#info').click(function (e) {
        e.preventDefault();
        var test = $('#startingPoint');
        if (test.hasClass('showed')) {
            test.removeClass('showed').fadeOut();
        } else {
            test.addClass('showed').fadeIn();
        }
    })
})


function playVideo() {
    document.getElementById("video").play();
}

function pauseVideo() {
    document.getElementById("video").pause();
}
function hideStart() {

    document.getElementById("video").play();
    document.getElementById("go").style.display = "none";
    console.log("eyy");
    document.getElementById("text").style.display = "none";
    var music = document.getElementById("sound")
    music.volume = "0.2"
    music.loop = "true"
    document.body.click();
    document.addEventListener("DOMContentLoaded", music.play())
}

function init2() {


    /*   
      document.getElementById("startingPoint").style.display = "none";
      document.getElementById("init").style.display = "none";
      document.getElementById("text").style.display = "none"; */

    // document.getElementById("startingPoint").style.display = "none";
    document.getElementById("init2").style.display = "none";
    var buttonGo = document.createElement("BUTTON");
    buttonGo.classList.add("animate__animated", "animate__fadeInUp");
    buttonGo.id = "go";
    buttonGo.setAttribute("onclick", "hideStart()");
    buttonGo.innerHTML = "Start";
    document.getElementById("button_wrap2").appendChild(buttonGo);
    document.getElementById("mute").addEventListener("click", mute);
    document.getElementById("info").click();

    document.getElementById("text").style.display = "block";

    console.log("eyy");
}

