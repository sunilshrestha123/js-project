setInterval(function(){
    var todayTime= new Date().toLocaleTimeString();
 


document.getElementById('time').innerHTML=todayTime;
},1000)

setInterval(function(){
    var todayDay=new Date().toLocaleDateString();
    document.getElementById("date").innerHTML=todayDay;
})
// setInterval(function(){
// var Time=new Date 
let Settime=10;

setInterval(function(){
let now =new Date.toLocaleTimeString();
let difference =Settime-now;
document.getElementById().innerHTML=difference;
})


// })