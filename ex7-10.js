// function keisan1(){ 
//  var a, b,d;
//  a = document.getElementById("shincho1").value; 
//  b	= document.getElementById("taijuu1").value; 
//  c = b/( (a/100)*(a/100) ); 

// if(c >= 25){document.getElementById("kuuran1").textContent = "肥満"; }
//  else if(c < 25 && c >= 18.5){document.getElementById("kuuran1").textContent = "普通"; }
//  else{document.getElementById("kuuran1").textContent = "低体重";}
//  {alert("kuuran1");}}

function hantei2(){ 
  var a, b,d;
  a = document.getElementById("height").value; 
  b	= document.getElementById("bodyweight").value; 
  c = b/( (a/100)*(a/100) ); 

 if(c >= 25){ 
   document.getElementById("haku").textContent = "肥満"; }
  else if(c < 25 && c >= 18.5){ document.getElementById("haku").textContent = "普通"; }
  else{ document.getElementById("haku").textContent = "低体重";}
  { alert("haku"); }}


