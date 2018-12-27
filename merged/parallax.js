document.write("<script type='text/javascript' src='easing.js'></script>");
document.write("<script type='text/javascript' src='modal.js'></script>");

jQuery(document).ready(function() {

  var isPlaying=true;
  var isButtonScrolling=false;
  var exScrPoint=0;
  document.documentElement.scrollTop = 0;

  var width = $(window).width();
var height = $(window).height(); // jQuery
$('#Anim').css('width',width*0.99);
$('#Anim').css('height',height*0.99);

$('.go_top').click(function(){
  console.log("go top");
  isButtonScrolling = true;
  $('.base-modal').fadeOut(500);
  easing(document.documentElement.scrollTop/*後で*/,0,667,
    function(value){(document.documentElement.scrollTop) = value;},
    function(){
      /*outlineをフェードイン*/
      if(!isPlaying){
        easing(1.0,0.15,333,
          function(opacity){
            $("#Anim")
            .css("opacity",opacity)
          },
          function(){
            $('#movie').fadeIn();
            // videoControl("playVideo");
            // $('#movie-content').seekTo(0,true);
          });
        $('#allow_img').hide();
        isPlaying=true;
        isButtonScrolling = false;
      }
    });
});

$('.go_outline').click(function(){
  console.log("go outline");
  isButtonScrolling = true;
  $('#allow_img').hide();
  $('#modal-info').fadeOut(500);
  $('#modal-exhibitors').fadeOut(500);
  $('#modal-access').fadeOut(500);
  if(isPlaying){
    easing(0.15,1.0,333,
      function(opacity){
        $("#Anim")
        .css("opacity",opacity)
      },
      function(){
      });
    $('#movie').fadeOut();
    videoControl("pauseVideo");
    isPlaying = false;
  }
  easing(document.documentElement.scrollTop/*後で*/,2250,667,
    function(value){(document.documentElement.scrollTop) = value;},
    function(){
      $('#modal-about').fadeIn(500);
      isButtonScrolling = false;
    });
});

$('#go_information').click(function(){
  console.log("go information");
  isButtonScrolling = true;
  $('#modal-about').fadeOut(500);
  $('#modal-exhibitors').fadeOut(500);
  $('#modal-access').fadeOut(500);
  if(isPlaying){
    easing(0.15,1.0,333,
      function(opacity){
        $("#Anim")
        .css("opacity",opacity)
      },
      function(){
      });
    $('#movie').fadeOut();
    videoControl("pauseVideo");
    isPlaying = false;
  }
  easing(document.documentElement.scrollTop/*後で*/,4250,667,
    function(value){(document.documentElement.scrollTop) = value;},
    function(){
      $('#modal-info').fadeIn(500);
      isButtonScrolling = false;
    });
});

$('#go_exhibitors').click(function(){
  console.log("go exhibitors");
  isButtonScrolling = true;
  $('#modal-about').fadeOut(500);
  $('#modal-info').fadeOut(500);
  $('#modal-access').fadeOut(500);
  if(isPlaying){
    easing(0.15,1.0,333,
      function(opacity){
        $("#Anim")
        .css("opacity",opacity)
      },
      function(){
      });
    $('#movie').fadeOut();
    videoControl("pauseVideo");
    isPlaying = false;
  }
  easing(document.documentElement.scrollTop/*後で*/,6500,667,
    function(value){(document.documentElement.scrollTop) = value;},
    function(){
      /*outlineをフェードイン*/
      $('#modal-exhibitors').fadeIn(500);
      isButtonScrolling = false;
    });
});

$('.go_access').click(function(){
  console.log("go access");
  isButtonScrolling = true;
  $('#modal-about').fadeOut(500);
  $('#modal-info').fadeOut(500);
  $('#modal-exhibitors').fadeOut(500);
  if(isPlaying){
    easing(0.15,1.0,333,
      function(opacity){
        $("#Anim")
        .css("opacity",opacity)
      },
      function(){
      });
    $('#movie').fadeOut();
    videoControl("pauseVideo");
    isPlaying = false;
  }
  easing(document.documentElement.scrollTop/*後で*/,8750,667,
    function(value){(document.documentElement.scrollTop) = value;},
    function(){
      $('#modal-access').fadeIn(500);
      isButtonScrolling = false;
    });
});

$(window).keydown(function(){
  var str = event.keyCode;
});
$(window).click(function(){

  if(isPlaying){
    easing(0.15,1.0,333,
      function(opacity){
        $("#Anim")
        .css("opacity",opacity)
      },
      function(){
        $('#movie').fadeOut(667);
        $('#allow_wrapper').show();
        $('#allow_img').css("display", "block");
        setTimeout('allow_move()');
      });
    videoControl("pauseVideo");
    isPlaying = false;
  }
});

window.onscroll=function(){
  var scrollTop =
  document.documentElement.scrollTop || // IE、Firefox、Opera
  document.body.scrollTop;

  if(getModalOpened()){
    document.documentElement.scrollTop=exScrPoint;
    document.body.scrollTop=exScrPoint;
    scrollTop=exScrPoint;
  }
  // console.log(scrollTop);
  if(scrollTop>=10300){
    scrollTop=10300;
  }
  var ret = ( '0000' + Math.round(scrollTop/12)).slice( -4 );
  var filename = './images/anim_sell/gateAnim_' + ret + '.png';
  $('#Anim').attr('src',filename);
  if(!isButtonScrolling){

    if(exScrPoint<=300){
      if(scrollTop>=300){
        $('#allow_img').fadeOut(333);
      }
    }

    if(exScrPoint<=400){
      if(scrollTop>=400){
        easing(0.15,1.0,333,
          function(opacity){
            $("#Anim")
            .css("opacity",opacity)
          },
          function(){
            $('#movie').fadeOut(500);
          });
        videoControl("pauseVideo");
        isPlaying = false;
      }
    }else if(exScrPoint>=1050 && exScrPoint<=2450){
      if(scrollTop<=1050 || scrollTop>=2450){
        $('#modal-about').fadeOut(500);
      }
    }else if(exScrPoint>=3050 && exScrPoint<=4450){
      if(scrollTop<=3050 || scrollTop>=4450){
        $('#modal-info').fadeOut(500);
      }
    }else if(exScrPoint>=5050 && exScrPoint<=6950){
      if(scrollTop<=5050 || scrollTop>=6950){
        $('#modal-exhibitors').fadeOut(500);
      }
    }else if(exScrPoint>=7550 && exScrPoint<=8950){
      if(scrollTop<=7550 || scrollTop>=8950){
        $('#modal-access').fadeOut(500);
      }
    }

    if(exScrPoint>=400){
      if(scrollTop<=400){
        easing(1.0,0.15,333,
          function(opacity){
            $("#Anim")
            .css("opacity",opacity)
          },
          function(){
            $('#movie').fadeIn();
            // videoControl("playVideo");
            // $('#movie-content').seekTo(0,true);
          });
        isPlaying = true;
      }
    }
    if(exScrPoint<=1050 || exScrPoint>=2450){
      if(scrollTop>=1050 && scrollTop<=2450){
        $('#modal-about').fadeIn(500);
      }
    }
    if(exScrPoint<=3050 || exScrPoint>=4450){
      if(scrollTop>=3050 && scrollTop<=4450){
        $('#modal-info').fadeIn(500);
      }
    }
    if(exScrPoint<=5050 || exScrPoint>=6950){
      if(scrollTop>=5050 && scrollTop<=6950){
        $('#modal-exhibitors').fadeIn(500);
      }
    }
    if(exScrPoint<=7550 || exScrPoint>=8950){
      if(scrollTop>=7550 && scrollTop<=8950){
        $('#modal-access').fadeIn(500);
      }
    }
  }
  exScrPoint=scrollTop;
//console.log(filename);
}

});

$(window).on('resize', function(){

  $('#Anim').css('width','100%');
  $('#Anim').css('height','100%');
  $('#Anim').fadeIn(800);
});

function scr(){
  var x = document.body.scrollLeft || document.documentElement.scrollLeft;
  var y = document.body.scrollTop || document.documentElement.scrollTop;
  //IE, Firefox, Opera
  //chrome, safari
  alert("横" + x + "px，縦" + y + "px");


  var width = $(window).width();
	var height = $(window).height(); // jQuery
	alert("width=" + width + "\n" + "height="+height);
}

function videoControl(action){ 
  var $playerWindow = $('#movie-content')[0].contentWindow;
  $playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
}
 
function allow_move() {
    $('#allow_img').animate({
        marginTop: '-=10px'
    }, 800).animate({
        marginTop: '+=10px'
    }, 800);
    setTimeout('allow_move()', 1600); //アニメーションを繰り返す間隔
}

