//menu action js

var navLink = $('#slidemenu_ul li a' );
var navList = $('#slidemenu_ul li');
var contentsPos = new Array();

for(var i=0; i< navLink.length; i++){
  var targetContents = navLink.eq(i).attr('href');

  if(targetContents.charAt(0)=='#'){
    var targetContentsTop = $(targetContents).offset().top-50;
    var targetContentsBottom = targetContentsTop + $(targetContents).outerHeight(true)-1;
    contentsPos[i] = [targetContentsTop, targetContentsBottom];
  }
}

function currentPos(){
  var windowTop = $(window).scrollTop();
  for(var i=0; i<contentsPos.length; i++){
    if(contentsPos[i][0] <= windowTop && contentsPos[i][1] >= windowTop) {
      navList.removeClass('current');
      navList.eq(i).addClass('current');
      i == contentsPos.length;
    }
  }
}

$(window).on('load scroll', function(){
  currentPos();
});
