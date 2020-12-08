let mail = document.getElementById("email");
let pwd = document.getElementById("pass");
let lgin = document.getElementById("submit");
//let msg =document.getElementById("msg");


function ValidateEmailPhone(){
    var regexp = /^admin$/; // email
   
    if (regexp.test(mail.value) )
     {
         return (true);      
     }
     else{

     document.getElementById("msg").innerHTML="Invalid Username ";
    return (false);
     }
        
}


function ValidatePassword()
{
    var rgxp=/^12345$/;
    if(rgxp.test(pwd.value) )
    {
       
        return true;
       
        
    }

    else{
        document.getElementById("msg1").innerHTML="Invalid password ";
        return (false);
        
    }
    
}





