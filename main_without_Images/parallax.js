document.write("<script type='text/javascript' src='easing.js'></script>");

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
            videoControl("playVideo");
          });
        isPlaying=true;
        isButtonScrolling = false;
      }
    });
});

$('#go_outline').click(function(){
  console.log("go outline");
  isButtonScrolling = true;
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
  easing(document.documentElement.scrollTop/*後で*/,3600,667,
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
  easing(document.documentElement.scrollTop/*後で*/,7200,667,
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
  easing(document.documentElement.scrollTop/*後で*/,10800,667,
    function(value){(document.documentElement.scrollTop) = value;},
    function(){
      /*outlineをフェードイン*/
      $('#modal-exhibitors').fadeIn(500);
      isButtonScrolling = false;
    });
});

$('#go_access').click(function(){
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
  easing(document.documentElement.scrollTop/*後で*/,14400,667,
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
      });
    videoControl("pauseVideo");
    isPlaying = false;
  }
});

window.onscroll=function(){
  var scrollTop =
  document.documentElement.scrollTop || // IE、Firefox、Opera
  document.body.scrollTop;
  if(scrollTop>=18000){
    scrollTop=18000;
  }
  var ret = ( '0000' +  Math.round(scrollTop/19)).slice( -4 );
  var filename = './images/anim/gateAnim_' + ret + '.png';
  $('#Anim').attr('src',filename);
  if(!isButtonScrolling){
    if(exScrPoint<=1500){
      if(scrollTop>=1500){
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
    }else if(exScrPoint>=2100 && exScrPoint<=5100){
      if(scrollTop<=2100 || scrollTop>=4600){
        $('#modal-about').fadeOut(500);
      }
    }else if(exScrPoint>=5700 && exScrPoint<=8700){
      if(scrollTop<=5700 || scrollTop>=8700){
        $('#modal-info').fadeOut(500);
      }
    }else if(exScrPoint>=9300 && exScrPoint<=12300){
      if(scrollTop<=9300 || scrollTop>=12300){
        $('#modal-exhibitors').fadeOut(500);
      }
    }else if(exScrPoint>=12900 && exScrPoint<=15900){
      if(scrollTop<=12900 || scrollTop>=15900){
        $('#modal-access').fadeOut(500);
      }
    }

    if(exScrPoint>=1500){
      if(scrollTop<=1500){
        easing(1.0,0.15,333,
          function(opacity){
            $("#Anim")
            .css("opacity",opacity)
          },
          function(){
            $('#movie').fadeIn();
            videoControl("playVideo");
          });
        isPlaying = true;
      }
    }
    if(exScrPoint<=2100 || exScrPoint>=4600){
      if(scrollTop>=2100 && scrollTop<=4600){
        $('#modal-about').fadeIn(500);
      }
    }
    if(exScrPoint<=5700 || exScrPoint>=8700){
      if(scrollTop>=5700 && scrollTop<=8700){
        $('#modal-info').fadeIn(500);
      }
    }
    if(exScrPoint<=9300 || exScrPoint>=12300){
      if(scrollTop>=9300 && scrollTop<=12300){
        $('#modal-exhibitors').fadeIn(500);
      }
    }
    if(exScrPoint<=12900 || exScrPoint>=15900){
      if(scrollTop>=12900 && scrollTop<=15900){
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

function appearModal(modal_id){
  easing(0.0,1.0,500,
    function(opacity){
      $(modal_id).css("opacity",opacity);
    },
    function(){});
}