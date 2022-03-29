function valid ()
{
	var username = document.getElementById("uname");
	var email_1 = document.getElementById("email");
	var txtbox1 = document.getElementById("txtarea")


	if (username.value.trim()=="")
	{
		alert("username is Blank");
		username.style.border = "solid 3px red"
		return false;
		
	}
	else if (username.value.trim().length<6)
	{
		alert("Username should be more than 6 letter");
		username.style.border = "solid 3px red"
		return fslse;
	}
	else if (email_1.value.trim()=="")
	{
		alert("Enter Your email");
		email_1.style.border = "solid 3px red"
		return false;	
	}
	else if (txtbox1.value.trim()=="")
	{
		alert("Write something here");
		txtbox1.style.border = "solid 3px red"
		return false;
		
	}
	else
	{
		alert("Sucessfuly Send");
		 return true;

	}

}