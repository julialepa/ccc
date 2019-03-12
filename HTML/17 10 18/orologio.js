

function printTime(){
 const now = new Date()
 const formattedHour= now.getHours() + ":"
 const formattedMinute= now.getMinutes() + ":"
 const formattedSecond= now.getSeconds()

 const ore = document.getElementById("ore")
 ore.innerHTML = formattedHour;
 const minuti = document.getElementById("minuti")
 minuti.innerHTML = formattedMinute;
 const secondi = document.getElementById("secondi")
 secondi.innerHTML = formattedSecond;
}

setInterval(printTime, 1000)
