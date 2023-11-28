
function uru{
  
//----] 西暦年を入力から取得
const Seireki = Number( window.prompt( "西暦年を入力してください" ) );
//----] うるう年を判別
if( Seireki%400===0 ) { alert( "閏年です" ) }
else if( Seireki%100===0 ) { alert( "平年です" ) }
else if( Seireki%4===0 ) { alert( "閏年です" ) }
else { alert( "平年です" ) }}
