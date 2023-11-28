function keisan1(){ //keisanという関数を実行
  var a, b,d;
  a = document.getElementById("shincho1").value; // "sincho"で記入した値をaに代入
  b	= document.getElementById("taijuu1").value; // "taijyuu"で記入した体重をbに代入
  c = b/( (a/100)*(a/100) ); //BMIの計算結果をcに代入

 if(c >= 25){ //cが25以上の場合〇〇に”肥満型”と表示される
   document.getElementById("kuuran1").textContent = "肥満型"; }
  else if(c < 25 && c >= 18){ //cが18〜25の場合〇〇に”標準型”と表示される
   document.getElementById("kuuran1").textContent = "標準型"; }
  else{ //それ以外は〇〇に”痩せ型”と表示される
   document.getElementById("kuuran1").textContent = "瘦せ型";}
