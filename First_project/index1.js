let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let mountains7 = document.getElementById('mountains7');

let nouvil=document.querySelector('.nouvil');
window.onscroll=function(){
let value=scrollY
stars.style.left=value+'px';
moon.style.top=value *3+'px';
mountains3.style.top=value*2 +'px';
mountains4.style.top=value*1.5+'px';
river.style.top=value +'px';
boat.style.top=value +'px';
boat.style.left=value*3 +'px';

// ////        لحتى تكبر كلمة nouvil وتوصل لحد معين انا بدي ياه , ولحتى كمان تثبت عن طريق ال postion//////
nouvil.style.fontSize = value +'px';
if(scrollY>=67){
nouvil.style.fontSize = 67 +'px';
nouvil.style.position = 'fixed';
// /// من هون لحتى الكلمة تختفي//// 
if(scrollY>=346.925048828125){
nouvil.style.display = 'none';

}else{
nouvil.style.display = 'block';

}
// لحتى تتغير لون السما اذا نزلت لتحت تصير زرقة يعني خخ//
if(scrollY>=142.67784118652344){
document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)';
}else{
document.querySelector('.main').style.background='linear-gradient(to top,#200016 , transparent)';
    


}
}

}










