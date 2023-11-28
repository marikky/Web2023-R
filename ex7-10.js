function keisan1(){ 
  var a, b,d;
  a = document.getElementById("shincho1").value; 
  b	= document.getElementById("taijuu1").value; 
  c = b/( (a/100)*(a/100) ); 

 if(c >= 25){document.getElementById("kuuran1").textContent = "肥満型"; }
  else if(c < 25 && c >= 18.5){document.getElementById("kuuran1").textContent = "標準型"; }
  else{document.getElementById("kuuran1").textContent = "瘦せ型";}
