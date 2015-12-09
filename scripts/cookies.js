function setCookie(cookie_name,cookie_value, daysToExpire){
	var expirationDate=new Date();
	expirationDate.setTime(expirationDate.getTime()+(daysToExpire*24*60*60*1000));
	var expires = "expires="+expirationDate.toGMTString();
	document.cookie=cookie_name+"="+cookie_value;
}
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
    var user=getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}
