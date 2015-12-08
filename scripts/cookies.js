function writeCookie(cookieName, cookieValue, expireHours, path, domain){
	var date =  new Date();
date.setHours(date.getHours + expireHours);
document.cookie = cookieName + '=' + cookieValue + '; expires=' + date + '; path=' + path + '; domain=' + domain;
}
 
function readCookie(cookieName){
	var textArray = document.cookie.split(';');
		for(var i = 0; i < textArray.length; i++){
	var textPiece = textArray[i]; 
		while(textPiece(0)==' ') textPiece = textPiece.substring(1,textPiece.length);
		if (textPiece.indexOf(cookieName)== 0)
			return textPiece.substring(cookieName.length,c.length);
	}
}
var summerSlam = function(){
    return{
		formValidate: function(myform){
			alert("hello there");
			return false;
			var requiredFields = ["name", "email", "phn" ]
			for(var x = 0; x < form.elements.length; x++){
				if(requiredFields.indexOf(form.elements[x].name)>-1){	
				if((form.elements[x].value.length <=0) || (form.elements[x].value == " ") ){
					form.elements[x].focus()
					alert("please complete all required fields")
					return false;}
				}
			}
		}
	};
}();