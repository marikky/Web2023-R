// function keisan1(){ 
//  var a, b,d;
//  a = document.getElementById("shincho1").value; 
//  b	= document.getElementById("taijuu1").value; 
//  c = b/( (a/100)*(a/100) ); 

// if(c >= 25){document.getElementById("kuuran1").textContent = "肥満"; }
//  else if(c < 25 && c >= 18.5){document.getElementById("kuuran1").textContent = "普通"; }
//  else{document.getElementById("kuuran1").textContent = "低体重";}
//  {alert("kuuran1");}}

//function hantei2(){ 
//  var a, b,d;
//  a = document.getElementById("height").value; 
//  b	= document.getElementById("bodyweight").value; 
//  c = b/( (a/100)*(a/100) ); 

// if(c >= 25){ document.getElementById("haku").textContent = "肥満"; }
//  else if(c < 25 && c >= 18.5){ document.getElementById("haku").textContent = "普通"; }
//  else{ document.getElementById("haku").textContent = "低体重"; }
//  { alert('あなたのBMI指数は' + 'c' + 'で' + 'haku' + 'です。'); }}


function hantei2() {
    var height = Number(document.getElementById('height').value) / 100;
    var bodyweight = Number(document.getElementById('bodyweight').value);
    var keisan3 = bodyweight / (height * bodyweight); 

    var classification;
    if (keisan3 < 18.5) {classification = '低体重';} 
    else if (keisan3 < 25) {classification = '普通';}
    else {classification = '肥満';}
    alert('あなたのBMIは ' + keisan3 + ' です。この数値は「' + classification + '」の範囲に分類されます。');}
