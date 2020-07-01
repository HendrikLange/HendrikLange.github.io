 var hold = document.createElement("IMG")
window.onload = function () {


init();

//console.log(music)

    var video = document.getElementById("video");
    
    video.addEventListener("timeupdate", pause1);
    video.addEventListener("ended", holdPeach);
     video.addEventListener("ended", function(event){
        video.removeEventListener("keyup", keyCode , true);      // Succeeds
    });

   
  //  hold.addEventListener("click", holdPeach);
  //  video.addEventListener("timeupdate", hold);
    var pause1 = document.createElement("IMG")
   
    function pause1() {

        if (video.currentTime >= 1.75 * 1 && video.currentTime <= 1 * 2.1) {
            video.pause();

            pause1.setAttribute("src", "gif.gif");
            pause1.id = "pause1";
            pause1.setAttribute("onclick", "hide()");
            pause1.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1s");
            pause1.addEventListener("click", playVideo);
           /*  window.addEventListener("keyup", function(event) {
                if (event.keyCode === 32) {
                 event.preventDefault();
                 pause1.click();
                 
                }
              }); */

              window.addEventListener("keyup", keycode); 
            
            document.body.appendChild(pause1);
            console.log(video.currentTime);
        }
        else if (video.currentTime >= 2 * 1 && video.currentTime <= 1 * 8) {

            playVideo();
            console.log("start 2")
            //pause1.remove();
            // pause1.classList.add("animate__animated", "animate__fadeOut")
        }
        else if (video.currentTime >= 8.5 * 1 && video.currentTime <= 1 * 8.75) {
            pauseVideo();
            document.body.appendChild(pause1);

        }

        else if (video.currentTime >= 20 * 1 && video.currentTime <= 1 * 20.3 ){
        pauseVideo();
            document.body.appendChild(pause1);
        }
     



    }
    



}

function holdPeach(){
        hold.setAttribute("src", "hold.png");
        hold.id = "hold";
        hold.setAttribute("onclick", "hideHold()");
        hold.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1s");
        hold.addEventListener("click", playVideo);
        document.body.appendChild(hold);
        console.log("endegelände")

        window.addEventListener("keypress", function(event) {
            if (event.keyCode === 13) {
                setTimeout(function(){
                    // hold.remove();
                    window.location.reload();
                     //hold.click();
                     //playVideo();
                     
            
                     console.log("RESTART")
            
            
            
                  }, 3000); 
             
            }
          });


}

function timer(){

    

}


function keycode(){
    if (event.keyCode === 32) {
        event.preventDefault();
        pause1.click();
        
       }


}

function hide() {
    pause1.remove();
    
}

function hideHold(){

        hold.remove();
 
}

var counter = 1;
function mute(){


if(counter == 0){
    document.getElementById("sound").muted = false;
    document.getElementById("mute").src = "unmute.png"
counter = 1;
}
else if(counter == 1)
{
    document.getElementById("sound").muted = true;
    document.getElementById("mute").src = "mute.png"
    counter = 0;
}


}



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
    music.volume ="0.2"
    music.loop ="true"
    document.body.click();
    document.addEventListener("DOMContentLoaded", music.play())
}

function init() {


  /*   
    document.getElementById("startingPoint").style.display = "none";
    document.getElementById("init").style.display = "none";
    document.getElementById("text").style.display = "none"; */
  
   // document.getElementById("startingPoint").style.display = "none";
    document.getElementById("init").style.display = "none";
   
    
    
    
    var buttonGo = document.createElement("BUTTON");
    buttonGo.classList.add("animate__animated", "animate__fadeInUp");
    buttonGo.id="go";
    buttonGo.setAttribute("onclick" ,"hideStart()");
    buttonGo.innerHTML="Start";
    document.getElementById("button_wrap2").appendChild(buttonGo);
    document.getElementById("mute").addEventListener("click", mute);

    document.getElementById("text").style.display = "block";

    console.log("eyy");
}
