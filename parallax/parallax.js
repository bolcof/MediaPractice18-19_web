function scr(){
  var x = document.body.scrollLeft || document.documentElement.scrollLeft;
  var y = document.body.scrollTop || document.documentElement.scrollTop;
  //IE, Firefox, Opera
  //chrome, safari
  alert("横" + x + "px，縦" + y + "px");
}

window.onscroll=function(){
	var scrollTop =
    	document.documentElement.scrollTop || // IE、Firefox、Opera
        document.body.scrollTop; 
    if(scrollTop>=18000){
    	scrollTop=18000;
    }
	var ret = ( '000' +  Math.round(scrollTop/20)).slice( -3 );
	var filename = './images/anim/gateAnim_' + ret + '.png';
	$('#Anim').attr('src',filename);
	
	console.log(filename);
}