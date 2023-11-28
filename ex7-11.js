
function uru{

let year = "2400"

	if ( (!(year % 100 == 0) && (year % 4 == 0)) || ((year % 100 == 0) && (year % 400 == 0)) )
  {year = year + "閏年です。";} else {year = year + "平年です。";}};
