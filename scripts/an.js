'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );


$('.slider-giao-an .owl-carousel').owlCarousel({
    margin:0,
    loop:false,
    autoWidth:true,
    items:4

})
$('.md-banner-main .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    items:1,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 1000

})
$('.banner-header .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    items:1,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 1000

})
$('.smd-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    
    items:1,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 1000,
    responsive:{
        0:{
 			dots:false
        },
        768:{
            dots:true
        }
    },
     onInitialized: css_smd_slider,
    onResized: css_smd_slider,
    onTranslated: css_smd_slider
})


$('.slider-about-us  .slider-desktop').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    items:3,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 1000
})

$('.slider-about-us  .slider-mobile').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    items:3,
    autoplay:true,
    autoplayTimeout:6000,
    smartSpeed: 1000
})

// $(".du-an-noi-bat .list .intem-style").hover(function(){
// 	$(".du-an-noi-bat .list .intem-style").removeClass("item-active")
//   $(this).addClass('item-active');
//   }, function(){
  
// });
$('.smd-slider-stage-slick').slick({
  centerMode: true,
  centerPadding: '25%',
  slidesToShow: 1,
   dots: true,
  responsive: [
    {
      breakpoint: 768.1,
      settings: {
        dots: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
         centerPadding: '10%',
        slidesToShow: 1
      }
    }
    ] 
});
$('.blk-slider-show-prj-1 .slider').slick({
  centerMode: true,
  centerPadding: '33%',
  slidesToShow: 1,
  draggable: false,
   dots: true,
  responsive: [
    {
      breakpoint: 768.1,
      settings: {
        dots: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    }
    ] 
});
$('.blk-slider-show-prj-2 .slider').slick({
  centerMode: true,
  centerPadding: '33%',
  slidesToShow: 1,
  draggable: true,
   dots: true,
   loop:true,
  responsive: [
    {
      breakpoint: 768.1,
      settings: {
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '10%'
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '10%'
      }
    }
    ] 
});


$('.slider-ga .slider').slick({
  centerMode: true,
  centerPadding: '33%',
  slidesToShow: 1,
  draggable: true,
  navs:true,
   dots: true,
  responsive: [
    {
      breakpoint: 768.1,
      settings: {
        dots: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        centerPadding: '10%',
        slidesToShow: 1
      }
    }
    ] 
});
$(".smd-card-header").click(function(){
	
	if($(this).parents(".smd-card").hasClass("active")){
		$(this).parents(".smd-card").removeClass("active");
	}else{
		$(".smd-card").removeClass("active");
		$(this).parents(".smd-card").addClass("active");
	}
})
function css_slick_nav(){
	
	  var distance= $(".slider-ga .item .thumb").height()/1.5;
	  $(".slider-ga .slick-arrow").css("top",distance);
	  
}
css_slick_nav();


function css_slick_dots(){
	$( ".blk-slider" ).each(function() {
	  var distance= $(this).find(".slick-dots").offset().left -$(window).width()/7;
	  $(this).find(".slick-next").css("right", distance);
	  $(this).find(".slick-prev").css("left", distance);
	});
}
function css_slick_dots_blk_slider_show_prj_1(){
	if($(window).width()<768){
		var distance= $(".blk-slider-show-prj-1 .slick-dots").offset().left -$(window).width()/7;
		$(".blk-slider-show-prj-1").find(".slick-next").css("right", distance);
		$(".blk-slider-show-prj-1").find(".slick-prev").css("left", distance);
	}
	
}
function css_slick_dots_blk_slider_show_prj_2(){
	if($(window).width()<768){
		var distance= $(".blk-slider-show-prj-1 .slick-dots").offset().left -$(window).width()/7;
		$(".blk-slider-show-prj-2").find(".slick-next").css("right", distance);
		$(".blk-slider-show-prj-2").find(".slick-prev").css("left", distance);
	}
	
}

css_slick_dots();
css_slick_dots_blk_slider_show_prj_1();
css_slick_dots_blk_slider_show_prj_2();

function css_smd_slider(){
	var height_title=$(".smd-slider .info .title").outerHeight()/2;
	$(".smd-slider .info .title").css("margin-top",-height_title);
	var height_img=$(".smd-slider .img img").outerHeight()/2;
	$(".smd-slider .owl-carousel .owl-nav").css("top",height_img);
}
css_smd_slider();
$(window).scroll(function() {
	if($(".page-main").hasClass("page-home")){
		var height_banner=$(".banner-header").height() + 200;
		
		if ($(window).scrollTop() > height_banner){
		  $(".page-header").addClass('sticky');
		}
		if ($(window).scrollTop() < height_banner +2){
		  $(".page-header").removeClass('sticky');
		}
	}else{
		var height_banner=$(".page-header").height() + 200;
		
		if ($(window).scrollTop() > height_banner){
		  $(".page-header").addClass('sticky');
		}
		if ($(window).scrollTop() < height_banner +2){
		  $(".page-header").removeClass('sticky');
		}
	}
	
  
});
$(".nav-bar ul.ul-main li.li-main").click(function(){
	
	if($(this).children(".ul-sub").hasClass("active-sub-menu")){
		$(".ul-sub").removeClass("active-sub-menu");
	}else{
		$(this).children(".ul-sub").addClass("active-sub-menu");
	}
	
})
$(".s-menu .icon").click(function(){
	$(".nav-bar").removeClass("active-navbar-mb");
})
$(".icon-menu-mb .icon").click(function(){
	$(".nav-bar").addClass("active-navbar-mb");
})

function set_max_height_ul_main(){
	var max_height_ul_main=$(window).height()-$(".s-menu").height() -$(".nav-bar .smd-social").outerHeight();
	$(".ul-main").css("max-height", max_height_ul_main);
}
set_max_height_ul_main();
jQuery(document).on("ready",function () {
	css_smd_slider();
	css_slick_dots();
	css_slick_dots_blk_slider_show_prj_1();
	css_slick_dots_blk_slider_show_prj_2();
	css_slick_nav();
});
window.onload = function(){ 
    css_smd_slider();
    css_slick_dots();
    css_slick_dots_blk_slider_show_prj_1();
    css_slick_dots_blk_slider_show_prj_2();
    css_slick_nav();
}
 window.onresize = function() {
 	set_max_height_ul_main();
 	css_smd_slider();
 	css_slick_dots();
 	css_slick_dots_blk_slider_show_prj_1();
 	css_slick_dots_blk_slider_show_prj_2();
 	css_slick_nav();

}
window.addEventListener("resize", function(event) {
 	set_max_height_ul_main();
 	css_smd_slider();
 	css_slick_dots();
 	css_slick_dots_blk_slider_show_prj_1();
 	css_slick_dots_blk_slider_show_prj_2();
 	css_slick_nav();
})
