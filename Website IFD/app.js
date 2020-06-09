window.onload = function () {



    var video = document.getElementById("video");
    
    video.addEventListener("timeupdate", pause1);

    var pause1 = document.createElement("IMG")
    function pause1() {

        if (video.currentTime >= 1.75 * 1 && video.currentTime <= 1 * 2) {
            video.pause();

            pause1.setAttribute("src", "key2.png");
            pause1.id = "pause1";
            pause1.setAttribute("onclick", "hide()");
            pause1.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-1s");
            pause1.addEventListener("click", playVideo);
            window.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) {
                 event.preventDefault();
                 pause1.click();
                }
              });
            // pause1.innerHTML="GO";
            document.body.appendChild(pause1);
            console.log(video.currentTime);
        }
        else if (video.currentTime >= 2 * 1 && video.currentTime <= 1 * 8) {

            playVideo();

            //pause1.remove();
            // pause1.classList.add("animate__animated", "animate__fadeOut")
        }
        else if (video.currentTime >= 8.5 * 1 && video.currentTime <= 1 * 8.75) {
            pauseVideo();
            document.body.appendChild(pause1);

        }

    }




}
function hide() {
    pause1.remove();
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
}

function init() {


  /*   
    document.getElementById("startingPoint").style.display = "none";
    document.getElementById("init").style.display = "none";
    document.getElementById("text").style.display = "none"; */
  
    document.getElementById("startingPoint").style.display = "none";
    document.getElementById("init").style.display = "none";
    document.getElementById("text").style.display = "none";


    var buttonGo = document.createElement("BUTTON");
    buttonGo.classList.add("animate__animated", "animate__fadeInUp");
    buttonGo.id="go";
    buttonGo.setAttribute("onclick" ,"hideStart()");
    buttonGo.innerHTML="Start";
    document.getElementById("button_wrap2").appendChild(buttonGo);



    console.log("eyy");
}