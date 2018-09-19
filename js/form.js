function feedBackform() {
    var firstname = document.getElementById("firstname").value


}

function validateName() {
    let firstname = document.getElementById("firstname").value
    if (firstname === "") {
        let error = document.getElementById('error-first-name');
        error.innerHTML = "First Name cannot be empty";
        error.style.color = "red";
    } else {

        let error = document.getElementById("error-first-name");
        error.innerHTML = "";
        error.style.color = "green";
    }

}

function validateEmail() {
    let emailid = ['sunil@gmail.com', 'su@gmail.com']
    let email =document.getElementById("email").value;
   
    if (email === emailid) {
        let erroremail = document.getElementById("error-email-id");
        erroremail.innerHTML = "email is sucessfully match";
        erroremail.style.color = "green";
    } else {
        erroremail.innerHTML = "enter valid enail";
        erroremail.style.color = "red";

    }
    function genderVerification() {
        let gendervalue = document.getElementsByClassName("gender").value;
        if (gendervalue === "male") {
let 

        } else if (gendervalue === "female") {



            

        } else {


        }



    }
}
setTimeout(function()){
    var FormDom=document.getElementById("");
    FormDom.style.display="null";},500}



}
