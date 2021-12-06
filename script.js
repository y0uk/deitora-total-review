

// $(function() {
// 	$('#toggle').on("click",function(){
// 		$('#toggle-list').slideToggle();
// 		('#toggle-list').toggleClass("active");
// 	});
// });

// $(function() {
// 	//ボタンを非表示にする
// 	$('#topBtn').hide();
// 	//画面をスクロールしたとき
// 	$(window).scroll(function() {
// 			//1000pxより多くスクロールした場合
// 			if($(this).scrollTop() > 80) {
// 					//ボタンをフェードインさせる
// 					$('#topBtn').fadeIn(300);
// 			//それ以外の場合
// 			} else {
// 					//ボタンをフェードアウトさせる
// 					$('#topBtn').fadeOut(300);
// 			}
// 	});
// 	//id属性がtopBtnの要素をクリックすると
// 	$('#topBtn').click(function(){
// 	//画面の上から0pxの所まで500ミリ秒（0.5秒）かけてアニメーションしながらスクロールする
// 	$('html, body').animate({scrollTop: 0}, 500);
// 	});

// });

// $(function() {  
//   $('.course-item a').click(function(){
// 		var imgSrc = $(this).children().attr('src');
// 		$('.bigimg').children().attr('src',imgSrc);
// 		$('.modal').fadeIn();
// 		$('body,html').css('overflow-y','hidden');
// 		return false
// 	});

// 	$('.close-btn').click(function(){
// 		$('.modal').fadeOut();
// 		$('body,html').css('overflow-y','visible');
// 		return false
// 	});
  
// });


// ===================================================
// ★swiper
// ===================================================

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
});

// ===================================================
// ★wow
// ===================================================

new WOW().init();

// ===================================================
// ★drawer
// ===================================================


$(function() {  
  $('.drawer-icon').on('click',function(e){
    e.preventDefault();

    $('.drawer-icon').toggleClass('is-active');
    $('.drawer-content').toggleClass('is-active');
    $('.drawer-background').toggleClass('is-active');
    return false;

  })
  
});


// ===================================================
// ★スムーススクロール
// ===================================================

// #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  var speed = 500;
  // ヘッダーの高さを指定
  var header = jQuery('.header').innerHeight();
  // hrefで指定されたidを取得
  var id = jQuery(this).attr("href");
  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする 
  var target = jQuery("#" == id ? "html" : id);
  // ページのトップを基準にターゲットの位置を取得(- headerでヘッダー分も上乗せしている)
  var position = jQuery(target).offset().top - header;
  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position 
   },
    speed);
  return false;
});



// ===================================================
// ★Topへ戻るをふわっと消す
// ===================================================


// スクロール検知
jQuery(window).on("scroll", function() {

  console.log(jQuery(this).scrollTop());

  // トップから100px以上スクロールしたら
  if (100 < jQuery(this).scrollTop()) {
    // is-showクラスをつける
 jQuery('.to-top').addClass( 'is-show' );
  } else {
    // 100pxを下回ったらis-showクラスを削除
  jQuery('.to-top').removeClass( 'is-show' );
  }
});




// クリックした時のアクション
$(function() {
  $('.main-nav li a').on('click', function(){
    $('.main-nav li a').removeClass('is-active');
    $(this).addClass('is-active');
    return false;
  }) 
});

$(function () {

  // タイトルをクリックすると
  $(".accordion__item").on("click", function () {
    // クリックした次の要素を開閉
    $(this).next('.accordion__content').slideToggle(300);
    // タイトルにopenクラスを付け外しして矢印の向きを変更
    $(this).toggleClass("open", 300);
  });
});


$(function() {  
  $('.qa-box__q').on('click',function(){
    $(this).next().slideToggle();
    $(this).children('.qa-box__icon').toggleClass('is-open');
  })
});

$(function() {  
  $('.js-accordion-title').on('click',function(){
    $(this).next().slideToggle(500);
    $(this).toggleClass('open', 500);
  })
});


// $(function() {
//   $('.js-modal-open').click(function () {
//     $('#overlay, .modal').fadeIn();
//   });
//   $('.js-modal-close').click(function () {
//     $('#overlay, .modal').fadeOut();
//   });
// });

// モーダルを開く
// jQuery('.js-modal-open').click(function(e) {
//   e.preventDefault();
//   //.for-modalクラスがついてる要素に.is-showクラスを追加する
//   jQuery('.modal').addClass( 'is-show' );

//   return false;
// });

$(function() {  
  $('.js-close-button').on('click', function(e){
    // ↓aタグの場合無効化するの意味
    e.preventDefault();
    //data-以下が「target」になってる属性の値（target-modal）を取得
    var target = $(this).data('target');
    $(target).fadeOut();
    
  })

  $('.js-open-button').on('click', function(e){
    e.preventDefault();
    //data-(ハイフン)以下が「target」になってる属性の値（target-modal）を取得
    var target = $(this).data('target');
    $(target).fadeIn();
    
  })

});

// -------------🍔----------------

$(function() {
  $('.drawer').drawer()
})


// ========================
// google-formとcontact-formの紐付け
// ========================

$(function() { 
  let $form = $( '#js-form' ) 
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理
          $form.slideUp()
          $( '#js-error' ).slideDown() 
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on('change' , function(){
    if(
      $( '#js-form input[type="text"]' ).val() !== "" &&
      $( '#js-form input[type="email"]' ).val() !== "" &&
      $( '#js-form textarea[name="entry.938293701"]' ).val() !== "" &&
      $( '#js-form input[name="entry.236983487"]' ).prop( 'checked' ) === true
    ) {
      // 全て入力された時(クリックできる状態)
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      // 入力されていない時（クリックできる状態）
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
    }
  })


})



