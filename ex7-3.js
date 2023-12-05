//function bmi5(){ var x,y
               //x = document.getElementById('bmi1').value;
               //y = document.getElementById('bmi2').value;
               //alert(Number(x) / Number(y) * Number(y));}


function keisan(){ //keisanという関数を実行
  var a, b,d;
  a = document.getElementById("shincho").value;
  b	= document.getElementById("taijuu").value; 
  c = b/( (a/100)*(a/100) ); //BMIの計算結果をcに代入
　'あなたのBMIは' + alert(c) + 'です' ;}

