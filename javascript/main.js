if(frmContact){
btnSubmit.addEventListener("click",fncSubmit,false);
function fncSubmit(){
    let usrFname=fname.value;
    let usrLname=lname.value;
    let usrEmail=email.value;
    let msgSubject=subject.value;
    let usrMsg=message.value;
    result.innerHTML="<table><tr><th>Name:<td>"+usrFname+"</td><td>"+usrLname+"</td><tr><th>Email Address: </th><td colspan='2'>"+usrEmail+"</td></tr></th></tr><tr></tr><th>Subject: </th><td colspan='2'>"+msgSubject+"</td></tr><tr><th rowspan='3'>Message: </th><td colspan='2' rowspan='3'>"+usrMsg+"</td></tr></table>"
}
}
function login() {

    let uName=userName.value;
    let pw=password.value;
    if(uName=='L001' && pw=='12345'){
     window.location = '../pages/info1.html';
 }
     else {
         alert("Invalid username/password")
     }
}
