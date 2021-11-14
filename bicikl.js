function izracunaj() 
{
	var x = Number(document.getElementById("visina").value);
	
	if(x <= 155)
	{
		document.getElementById("rez").innerHTML = "Veličina okvira bicikla je XS";
	}
	if(x > 156 && x <= 165)
	{
		document.getElementById("rez").innerHTML = "Veličina okvira bicikla je S";
	}
	if(x > 166 && x <= 175)
	{
		document.getElementById("rez").innerHTML = "Veličina okvira bicikla je M";
	}
	if(x > 166 && x <= 175)
	{
		document.getElementById("rez").innerHTML = "Veličina okvira bicikla je L";
	}
	if(x > 184 && x <= 191)
	{
		document.getElementById("rez").innerHTML = "Veličina okvira bicikla je XL";
	}
	if(x > 192)
	{
		document.getElementById("rez").innerHTML = "Veličina okvira bicikla je XXL";
	}
} 