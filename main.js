function getPassword(){
  var chars="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]"
  var passwordLength=15;
  var password="";
  for(let i=0; i<passwordLength;i++){
    
    var romdemNumber=Math.floor(Math.random()*chars.length);
    password+=chars.substring(romdemNumber,romdemNumber+1);
    
  }
  document.getElementById("password"). value=password;
}
