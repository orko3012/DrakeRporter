const quizz=document.querySelectorAll(".quizz")
for(i=0; i<quizz.length; i++){
    quizz[i].className="quizz black"
}
document.querySelector(".quizz").className="quizz fush"


const titre=document.getElementById("titre2")
titre2.textContent="STOP EATING PANDA"


const titl=document.querySelector(".titl")
window.setInterval(()=>{
    titl.classList.toggle( "red")
}, 1000)

