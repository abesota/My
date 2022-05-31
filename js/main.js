'use strict';

{
  const ham = $('#js-hamburger');
  const nav = $('#js-nav');
  ham.on('click', function () { 
    ham.toggleClass('active'); 
    nav.toggleClass('active');
  });

  $(window).on('scroll load', function(){        
    var scroll = $(this).scrollTop();        
    var windowHeight = $(window).height();      
    $('.fadeIn').each(function(){              
      var cntPos = $(this).offset().top;     
      if(scroll > cntPos - windowHeight + windowHeight / 3){  
        $(this).addClass('active');             
      }
    });
  });

  // ためし

  $(function(){
  
    //カーソル要素の指定
    var cursor=$("#cursor");
    //ちょっと遅れてついてくるストーカー要素の指定  
    var stalker=$("#stalker");
    
    //mousemoveイベントでカーソル要素を移動させる
    $(document).on("mousemove",function(e){
      //カーソルの座標位置を取得
      var x=e.clientX;
      var y=e.clientY;
      //カーソル要素のcssを書き換える用
      cursor.css({
        "opacity":"0.9",
        "top":y+"px",
        "left":x+"px"
      });
      //ストーカー要素のcssを書き換える用    
      setTimeout(function(){
        stalker.css({
          "opacity":"0.4",
          "top":y+"px",
          "left":x+"px"
        });
      },140);//カーソルより遅れる時間を指定
    });
    //aタグホバー
    $(".img_text, .sk_lang").on({
      "mouseenter": function() {
        //activeクラス付与
        cursor.addClass("active");
        stalker.addClass("active");
      },
      "mouseleave": function() {
        cursor.removeClass("active");
        stalker.removeClass("active");
        
      }
    });
  });

  // ためし

  const shows = document.querySelectorAll('.sk_lang');

  shows.forEach(show => {
    show.addEventListener('click', () => {
      show.parentNode.classList.toggle('appear');

      shows.forEach(el => {
        if (show !== el) {
          el.parentNode.classList.remove('appear');
        }
      });
    });
  });
}


