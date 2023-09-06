class roclandSwiperBase extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{selectors:{carousel:`.${elementorFrontend.config.swiperClass}`,slideContent:".swiper-slide"}}}getDefaultElements(){var e=this.getSettings("selectors");const s={$swiperContainer:this.$element.find(e.carousel)};return s.$slides=s.$swiperContainer.find(e.slideContent),s}getSwiperSettings(){const t=this.getElementSettings(),e=t.slides_to_show||3,s=1===e,i=elementorFrontend.config.responsive.activeBreakpoints,n={mobile:1,tablet:s?1:2},a={slidesPerView:e,loop:"yes"===t.infinite,speed:t.speed,handleElementorBreakpoints:!0,watchSlidesVisibility:!0,breakpoints:{}};let r=e,o=0;t.spaceBetween&&(a.spaceBetween=t.spaceBetween.size,o=t.spaceBetween.size||0),Object.keys(i).reverse().forEach(e=>{var s=n[e]||r;a.breakpoints[i[e].value]={slidesPerView:+t["slides_to_show_"+e]||s,slidesPerGroup:+t["slides_to_scroll_"+e]||1},r=+t["slides_to_show_"+e]||s,void 0!==t["spaceBetween_"+e]&&(a.breakpoints[i[e].value].spaceBetween=+t["spaceBetween_"+e].size||o,o=+t["spaceBetween_"+e].size||0)}),"yes"===t.autoplay&&(a.autoplay={delay:t.autoplay_speed,disableOnInteraction:"yes"===t.pause_on_interaction}),"yes"===t.mousewheel&&(a.mousewheel=!0),"yes"===t.autoheight?a.autoHeight=!0:a.autoHeight=!1,"yes"===t.lazyload&&(a.lazy=!0),s?(a.effect=t.effect,"fade"===t.effect&&(a.fadeEffect={crossFade:!0})):a.slidesPerGroup=+t.slides_to_scroll||1;var l="arrows"===t.navigation||"both"===t.navigation,p="dots"===t.navigation||"both"===t.navigation||"custom"===t.navigation;return l&&(a.navigation={prevEl:this.$element.find(".elementor-swiper-button-prev").get(0),nextEl:this.$element.find(".elementor-swiper-button-next").get(0)}),p&&(a.pagination={el:this.$element.find(".swiper-pagination").get(0),type:"bullets",clickable:!0}),void 0!==t.enable_scrollbar&&"yes"===t.enable_scrollbar&&(a.scrollbar={el:this.$element.find(".swiper-scrollbar").get(0),hide:!1,draggable:!0},a.loop=!1),"vertical"===t.direction&&(a.direction="vertical",a.slidesPerView=1,a.breakpoints={},a.loop=!1,a.on={init:function(e){var s=e.slides[e.activeIndex].children[0];jQuery(e.$el).css({height:s.clientHeight})},slideChange:function(e){var s=e.slides[e.activeIndex].children[0];jQuery(e.$el).css({height:s.clientHeight})}}),a}updateSwiperOption(e){const s=this.getElementSettings(),t=s[e],i=this.swiper.params;switch(e){case"image_spacing_custom":i.spaceBetween=t.size||0;break;case"autoplay_speed":i.autoplay.delay=t;break;case"speed":i.speed=t}this.swiper.update()}getChangeableProperties(){return{pause_on_hover:"pauseOnHover",autoplay_speed:"delay",speed:"speed",image_spacing_custom:"spaceBetween"}}onElementChange(e){var s;this.getChangeableProperties()[e]&&("pause_on_hover"===e?(s=this.getElementSettings("pause_on_hover"),this.togglePauseOnHover("yes"===s)):this.updateSwiperOption(e))}onEditSettingsChange(e){"activeItemIndex"===e&&this.swiper.slideToLoop(this.getEditSettings("activeItemIndex")-1)}async bindEvents(){var e=this.getElementSettings();if(this.elements.$swiperContainer.length&&!(this.elements.$slides.length<2)){const s=elementorFrontend.utils.swiper;this.swiper=await new s(this.elements.$swiperContainer,this.getSwiperSettings()),this.elements.$swiperContainer.data("swiper",this.swiper),"yes"===e.pause_on_hover&&this.togglePauseOnHover(!0),this.animate()}}animate(){var e=this.swiper.$wrapperEl.find(".swiper-slide");jQuery(e).filter(".swiper-slide-active").addClass("animated"),this.swiper.on("slideChange",()=>{this.swiper.$wrapperEl.find(".elementor-widget-rocland-image-lookbook").trigger("slideChange")}),this.swiper.on("slideChangeTransitionEnd",()=>{var e=this.swiper.$wrapperEl.find(".swiper-slide"),s=jQuery(e).filter(".swiper-slide-active");s.addClass("animated"),e.removeClass("swiper-ken-burn-active"),s.addClass("swiper-ken-burn-active")}),this.swiper.on("slideChangeTransitionStart",()=>{this.swiper.$wrapperEl.find(".swiper-slide").removeClass("animated")})}togglePauseOnHover(e){e?this.elements.$swiperContainer.on({mouseenter:()=>{this.swiper.autoplay.stop()},mouseleave:()=>{this.swiper.autoplay.start()}}):this.elements.$swiperContainer.off("mouseenter mouseleave")}}