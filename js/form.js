function feedBackform(){
var firstname=document.getElementById("firstname").value


}

function validateName(){
let  firstname=document.getElementById("firstname").value
if(firstname===""){
 let error=document.getElementById('error-first-name');
 error.innerHTML = "First Name cannot be empty" ;
 error.style.color="red";
}else{

let error=document.getElementById("error-first-name");
    error.innerHTML="First Name is added sucessfully ";
error.style.color="green";
}

}
filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function validateEmail(){

let  email=document.getElementById("email").value;
if(email==="" &&!email.filter ){
let erroremail=document.getElementById("error-email-id");
erroremail.innerHTML=""

}

}