let hrs=document.getElementById("hrs")
let min=document.getElementById("min")
let sec=document.getElementById("sec")


setInterval(() => {

let currentTime=new Date();

hrs.innerText = currentTime.getHours();
min.innerText = currentTime.getMinutes();
sec.innerText = currentTime.getSeconds();
},1000);


