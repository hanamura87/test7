	// 基本設定
var spflg = '';
$(document).ready(function() {
	if(!navigator.userAgent.match(/(iPhone|Android)/)){
		spflg = 1;
		$("a.tellink").each(function(){
			$(this).replaceWith("<span>" + $(this).html() + "</span>");
		});
	}
	if( $(window).width() > 650){
		var topBtn = $('#pagetop');
		topBtn.hide();
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100 && spflg == 1) {
				topBtn.fadeIn();
			} else {
				topBtn.fadeOut();
			}
		});
	}
	//スマホメニュー
	$("#headerbar-menu").click(function () {
		$("#fade").show();
		$(".sidebar_inner").show();
	});
	$("#sp_menu_close").click(function () {
		$(".sidebar_inner").hide();
		$("#fade").hide();
	});
	if( $(window).width() < 650){
		$(".sidebar_inner a").click(function () {
			$(".sidebar_inner").hide();
			$("#fade").hide();
		});
		//newsのカテゴリー、スマホで閉じる
		$("#news .categories h3").click(function (){
			$(this).toggleClass('open');
			$(this).siblings("ul").slideToggle();
		});
		//スマホのフッタメニュー
		var $elem = $("#sp_btmlink"), //表示の操作をするオブジェクト(フッター)
					$content = $("#footer"), //表示を変更する基準となるオブジェクト
					$win = $(window); //windowオブジェクト
		var contentTop = 0; //表示変更をする基準点

		$win
			.on('load',function (){
				updatePosition();
				update();
			})
			.resize(function(){
				updatePosition();
				update();
			})
			.scroll(function(){
				update();
			});

		// HTMLが動的に変わることを考えて、contentTopを最新の状態に更新します
		function updatePosition(){
			contentTop = $content.offset().top - $elem.outerHeight();
		}
		// スクロールのたびにチェック
		function update(){
			// 現在のスクロール位置 + 画面の高さで画面下の位置を求めます
			if( $win.scrollTop() + $win.height() > contentTop  ){
				$elem.addClass("static");
			}else if( $elem.hasClass("static") ){
				$elem.removeClass("static");
			}
		}
	}
});

$(window).load(function(){
});

// スクロール用処理
$(window).scroll(function(){
});

// ページリサイズ時の処理
$(window).resize(function() {
});

function equalBoxHeight(elm, num) {
	var elm = $(elm);
	elm.each(function (i) {
		var height;
		var $this = $(this);
		if (i === 0 || i % num === 0) {
			height = $this.height();
			for (var n = i + 1; n <= i + num - 1; n++) {
				if (height < elm.eq(n).height()) {
					height = elm.eq(n).height();
				}
			}
			for (var n = i; n <= i + num - 1; n++) {
				elm.eq(n).css("height", height + "px");
			}
		}
	});
}