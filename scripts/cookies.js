function validateForm(){
var x=document.forms["myForm"]["name"].value;
	if (x==null||x==""){
		alert("Name must be filled out");
		return false;
	}
	else {
		alert("Welcome!");
	}
}
function setCookie(cookie_name,cookie_value, daysToExpire){
	var expirationDate=new Date();
	expirationDate.setTime(expirationDate.getTime()+(daysToExpire*24*60*60*1000));
	var expires = "expires="+expirationDate.toGMTString();
	document.cookie=cookie_name+"="+cookie_value;
}
function storeValues(form)  
  {
    setCookie("name", form.name.value);
    setCookie("email", form.email.value);
    setCookie("phn", form.phn.value);
    return true;
  }
  if(name = getCookie("name")) document.getElementById(myForm).name.value = name;
  if(email = getCookie("email")) document.getElementById(myForm).email.value = email;
  if(phn = getCookie("phn")) document.getElementById(myForm).phn.value = phn;
function getCookie(cookie_name) {
    var name = cookie_name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("name");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

