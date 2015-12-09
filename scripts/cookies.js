function validateForm(){
var x=document.forms["myForm"]["username"].value;
	if (x==null||x==""){
		alert("Name must be filled out");
		return false;
	}
	else {
		alert("Welcome!");
	}
	var storedValues="";
	if(form.elements[x].id){
		storedValues+= form.elements[x].id+"="+form.elements[x].value+",";
	}
	this.createCookie("cookie_name", storedValues, 30)
	return false;
}
function createCookie(cookie_name, cookie_value, daysToExpire){
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
}
function deleteCookie(cookie_name){
    document.cookie=name + "=null; path=/; expires=" + expired.toGMTString();
}
function storeValues(myForm){
	setCookie("username", myForm.username.value);
	setCookie("password", myForm.password.value);
}


