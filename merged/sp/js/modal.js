

function modalOpen(){

  var str;
  var scrollTop;

//////////outline
//////////////////////////////////////////////////////////////////////////
$(".single_member").click(function(){ //modalopen クラス全体
  // event.preventDefault();
  arguments.callee.caller.arguments[0].preventDefault();

  str = $(this).parent().attr("id");
  console.log("id="+str);

  scrollTop = $(window).scrollTop();
  console.log("modal clicked. scrolltop:"+scrollTop);

  //$('html,body').addClass('noscroll').css('top', (-scrollTop) + 'px');
  $("#modal").fadeIn();
  $("#"+String(str)+"_info").css("display","block");

  // jQuery.each(sections,function(){
  //     $("#"+this+"_text").hide();
  //     if(debug) alert("#"+this+"_text->hide");
  // });

//    id = $(this).attr("id");
//    show = sections[id];
//    if(debug) alert("1 : modalopen: clicked id(key)="+id+" value:"+show);
//     $("#contents_container").show();
//     $("#close_button").fadeIn();
//     $("#modal_overlay").fadeIn();
//
// $("#" + show + "_text").fadeIn();
// if(debug) alert("3: #"+show+"_text -> show");
});
$('.single_member_wrapper').unbind().click(function() {　
    // event.stopPropagation();　
    //console.log("single-member-wrapper clicked");
    arguments.callee.caller.arguments[0].stopPropagation();
});

$("#close_button, #modal").unbind().click(function(){
    console.log("close-button clicked. scrollTop:"+scrollTop);
    //finish no scroll state
    //$('html,body').removeClass('noscroll').scrollTop(scrollTop);
    $("#modal").fadeOut();
    $("#"+String(str)+"_info").css("display","none");
});


}


$(function(){modalOpen()});

// $(document).ready(function(){
//   console.log("thankyou modal open");
//   $("#close_button").css("display","none");
//   $("#modal").fadeIn();
//   $("#thankyou").fadeIn();


//   $(".single_member_wrapper").unbind().click(function(){
//       console.log("close-button clicked.");
//       //finish no scroll state
//       //$('html,body').removeClass('noscroll').scrollTop(scrollTop);
//       $("#modal").fadeOut();
//       $("#thankyou").css("display","none");
//       $("#close_button").css("display","block");
//   });
// });
