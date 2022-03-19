// Contact form Code
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

function validate(){
  const   name = document.getElementById("name");
  const   mail = document.getElementById("email");
  const   sub = document.getElementById("subject");
  const   msg =  document.getElementById("message");
  const submit = document.querySelector(".btn");

  submit.addEventListener("click", (e)=>{
    e.preventDefault();
    if(name.value == "" || mail.value == "" || sub.value == "" || msg.value == ""){
      inputEmpty();
    }
    else {
      sendMail(name.value, mail.value, sub.value, msg.value);
      console.log("succes");
      success();
      document.getElementById("myForm").reset();
    }
  })
}
validate();


function sendMail(name, mail, sub, msg){
  emailjs.send("service_yptdlh8","template_arlr23k",{
    from_name: name,
    email:mail,
    subject: sub,
    message: msg,
    });
}
function success(){
  swal({
    title: "Good job!",
    text: "Successfully sent message!",
    icon: "success",
    button: "ok!",
  });
}
function error(){
  swal({
    title: "Oops...!",
    text: "Something went wrong, message could not be sent!",
    icon: "error",
    button: "ok!",
  });
}
function inputEmpty(){
  swal({
    title: "Oops...!",
    text: "Inputs fields  are required!",
    icon: "error",
    button: "ok!",
  });
}
