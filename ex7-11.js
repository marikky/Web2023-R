
//function uru{

	//if ( (!(year % 100 == 0) && (year % 4 == 0)) || ((year % 100 == 0) && (year % 400 == 0)) )
 //{year = year + "閏年です。";} 
//else {year = year + "平年です。";}};


function uru() {
var year = Number(document.getElementById('seireki').value); 
var result;
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) 
     {kotae = '閏年ですよ';} 
else {kotae = '平年でした';}

    document.getElementById('kekka').innerText = year + result + 'です。';
    alert( year + kotae);}








//





