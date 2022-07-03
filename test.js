function confirm(){
    var mail = document.getElementById("mail").value;
    var x = /^[a-z|A-Z]+\w*\W*@\w*\W*\.(com|co\.in|co\.uk)$/
if(mail.match(x)){
    alert("vaild mail")
}
else{alert("invaild mail")}
}