!function(c){"use strict";function t(){var t=0,e=c("#wpadminbar");0<e.length&&(t+=e.height()),window.innerWidth<992?c("#secondary").trigger("sticky_kit:detach"):c("#secondary").stick_in_parent({offset_top:t})}var e,n,i,r,o,s;c(".site-header .primary-navigation .menu-item-has-children").hover(function(t){var e,n,i,r,o=c(t.currentTarget);n=(e=o).children(".sub-menu"),i=e.offset(),r=e.outerWidth(),t=c(window).width(),o=n.outerWidth(),0<i.left+r+o-t?e.parents(".menu-item-has-children").length?n.css({left:"auto",right:"100%"}):n.css({left:"auto",right:"0"}):n.css({left:"",right:""})}),e=c("body"),n=c(window).outerHeight(),i=c("header.header-1").outerHeight(),r=c("footer.site-footer").outerHeight(),0<(o=c("#wpadminbar")).length&&(i+=o.height()),e.find("header.header-1").length&&c(".site-content").css({"min-height":n-i-r}),s=document.querySelector("body"),window.innerWidth>s.clientWidth+5?(s.classList.add("has-scrollbar"),s.setAttribute("style","--scroll-bar: "+(window.innerWidth-s.clientWidth)+"px")):s.classList.remove("has-scrollbar"),c(".site-header-account").mouseenter(function(){c(".account-dropdown",this).has(".account-wrap").length||c(".account-dropdown",this).append(c(".account-wrap"))}),c(window).scroll(function(){50<c(this).scrollTop()?c(".scrollup").addClass("activate"):c(".scrollup").removeClass("activate")}),c(".scrollup").on("click",function(){return c("html, body").animate({scrollTop:0},600),!1}),c(document).ready(function(){0<c("#secondary").length&&(t(),c(window).resize(function(){setTimeout(function(){t()},100)}))})}(jQuery);