const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    login = document.querySelector(".login-link");

//   js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("active");
});
login.addEventListener("click", () => {
    container.classList.remove("active");
});

    //     function validate(mail) {
    //     var x = /^[a-zA-Z]+\w*\W*@\w*\W*\.(com|co\.in|co\.uk)$/
    //     if (mail.match(x)) {
    //         alert("Valid Email.")
    //     }
    //     else { alert("Invalid Email") }
        
    // }
    function validate(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("mail").value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
    
    function focusFunction(x) {
        x.style.background ="gray";
    }

    function blurFunction(y) {
        y.style.background = "beige";
    }

   // Alert in in-browser JavaScript - Does not return anything
   // alert(""); 

   function getConfirmation() {
    var retVal = confirm("Do you want to continue ?");
    if( retVal == true ) {
       document.write ("User wants to continue!");
       return true;
    } else {
       document.write ("User does not want to continue!");
       return false;
    }
 }
 