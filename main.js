function my_keydown(e) {
keyPressed = e.keyCode;

	if(keyPressed == '82')
	{
		document.getElementById("red_ranger").style.display="inline-block";
	}
	if(keyPressed == '71')
	{
		document.getElementById("green_ranger").style.display="inline-block";
	}
	if(keyPressed == '89')
	{
		document.getElementById("yellow_ranger").style.display="inline-block";
	}
	if(keyPressed == '80')
	{
		document.getElementById("pink_ranger").style.display="inline-block";
	}
	if(keyPressed == '66')
	{
		document.getElementById("blue_ranger").style.display="inline-block";
	}

}