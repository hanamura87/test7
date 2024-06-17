  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47474392-3', 'auto',{'allowLinker': true});
  ga('require', 'linker');
  ga('linker:autoLink', ['reserve.489ban.net']);
  ga('send', 'pageview');
  $(window).on("load", function(){
      setTimeout(function(){
          $('a[href^="tel:"]').on("click", function(){
              ga('send', 'event',  'tel', 'click', window.location.href, '1');
              //console.log(1);
          });
          $('.search-btn').on("click", function(){
              ga('send', 'event',  'link', 'click', window.location.href + '_yoyakuban-search', '1');
          });
          $('a[href="http://www1.489ban.net/v4/client/plan/list/customer/yunomoto"]').on("click", function(){
              ga('send', 'event',  'link', 'click', window.location.href + '_yoyakuban-planlist', '1');
          });
		  $('.yoyakuban_en').on("click", function(){
              ga('send', 'event',  'link', 'click', window.location.href, '1');
          });
		  $('.yoyakuban_cn').on("click", function(){
              ga('send', 'event',  'link', 'click', window.location.href, '1');
          });
		  $('.yoyakuban_tw').on("click", function(){
              ga('send', 'event',  'link', 'click', window.location.href, '1');
          });
          $('.faq_ai').on("click", function(){
              ga('send', 'event',  'faq_ai', 'click', window.location.href, '1');
          });
          $('.faq_ai_top').on("click", function(){
              ga('send', 'event',  'faq_ai_top', 'click', window.location.href, '1');
          });

      }, 1000);
  });
