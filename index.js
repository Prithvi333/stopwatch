const pla=document.querySelector('.play')
const res=document.querySelector('.reset')
const time=document.querySelector('.time')
const rese=document.querySelector('.rese')
const h5=document.querySelector('h5')


let seconds=0
let minutes=0
let hours=0


let leadSeconds=0
let leadMinutes=0
let leadHours=0

let timerInterval=null
let timerStatus="started"

function stopWatch(){
    seconds++
    if(seconds%60==0){
        seconds=0
        minutes++
        if(minutes%60==0){
            minutes=0
            hours++
        }
    }

    
if(seconds<10){
    leadSeconds="0"+ seconds.toString()
}

else{
    leadSeconds=seconds
}

if(minutes<10){
    leadMinutes="0"+ minutes.toString()
}
else{
    leadMinutes=minutes
}

if(seconds<10){
    leadHours="0"+ hours.toString()
}
else{
    leadHours=hours
}

    document.querySelector('.time').innerHTML= leadHours + ":" + leadMinutes + ":" + leadSeconds
}



// window.setInterval(stopWatch,100)

pla.addEventListener('click',function(){
  
    if(timerStatus=="started"){
        timerInterval= window.setInterval(stopWatch,1000)
        timerStatus="stopped"

    }
    h5.style.display='block'


})

res.addEventListener('click',function(){
    
    if(timerStatus=="stopped"){
      window.clearInterval(timerInterval)
        timerStatus="started"

    }
    h5.style.display='none'


})

rese.addEventListener('click',function(){
    window.clearInterval(timerInterval)
    seconds=0
    minutes=0
    hours=0
    time.innerHTML="00:00:00"
    timerStatus="started"

    h5.style.display='none'



})
