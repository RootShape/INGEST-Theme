$(document).ready(function(){
  
  	$("#form_login").submit(function(){    
	    if($("#email").val() == ""){
	      alert("EMAIL OR USERNAME IS WRONG!");
	      return false;
	    }
	    if($("#email").val() != "admin"){
	      alert("EMAIL OR USERNAME DOESN'T EXISTS");
	      return false;
	    }
	    if($("#password").val() == ""){
	      alert("PASSWORD IS REQUIRED!");
	      return false;
	    }
	    if($("#password").val() != "admin"){
	      alert("PASSWORD IS WRONG! TRY AGAIN.");
	      return false;
	    }
  	});
});