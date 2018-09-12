function feedBackform(){
var firstname=document.getElementById("firstname").value


}

function validateName(){
let  firstname=document.getElementById("firstname").value
if(firstname===""){
 let error=document.getElementById('error-first-name')
 error.innerHTML = "Name cannot be empty" 
 error.style.color="red"
}

}