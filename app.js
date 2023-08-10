

var audio = document.createElement("audio")
    audio.setAttribute('src', './image/lember.mp3')

function soundOf()  {
    
    audio.loop = true
    audio.pause()


}
function soundOn()  {
    
    audio.loop = true
    audio.play();

}
