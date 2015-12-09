var summerSlam=function(){
    return{
		formValidate: function(form){
			var requiredFields=["name", "email", "phn"]
			var storedValues="";
			for(var x=0; x<form.elements.length; x++){
				if(requiredFields.indexOf(form.elements[x].id)>-1){	
					if((form.elements[x].value.length<=0) || (form.elements[x].value == " ") ){
					form.elements[x].focus()
					console.log(form.elements[x].value.length)
					alert("please complete all required fields")
					return false;
					}
				}
				if(form.elements[x].id{
					storedValues+= form.elements[x].id+"="+form.elements[x].value+",";
				}
			}
			this.createCookie("sslam", storedValues, 30)
			return false;
		},
		createCookie: function(cookie_name,cookie_value, daysToExpire){
			var expirationDate=new Date();
			expirationDate.setDate(expirationDate.getDate()+daysToExpire);
			cookie_value+= ";expires="+expirationDate;
			document.cookie=cookie_name+"="+cookie_value;
		}
	};
}();
