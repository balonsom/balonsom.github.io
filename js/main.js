$(document).ready(function(){
	new jBox('Tooltip', {
		id: 'jBoxT1',
		attach: $('.image-content a'),
		content: 'Mostrar Información',
		theme: 'TooltipDark',
		onOpen: function(){
			$('#jBoxT1').addClass('animated fadeInUp');
		},
		onClose: function(){
			$('#jBoxT1').removeClass('animated fadeInUp');
		}
	});
	new jBox('Tooltip', {
		id: 'jBoxT2',
		attach: $('.trailer a'),
		content: 'Trailer',
		theme: 'TooltipDark',
		onOpen: function(){
			$('#jBoxT2').addClass('animated fadeInUp');
		},
		onClose: function(){
			$('#jBoxT2').removeClass('animated fadeInUp');
		}
	});
	new jBox('Tooltip', {
		id: 'jBoxT3',
		attach: $('#expand-section'),
		content: 'Expandir Cartelera',
		theme: 'TooltipDark',
		onOpen: function(){
			$('#jBoxT2').addClass('animated fadeInUp');
		},
		onClose: function(){
			$('#jBoxT2').removeClass('animated fadeInUp');
		}
	});
	if($('.submenu').hasClass('active')){ $('nav ul ul').css({'visibility':'visible','opacity': '1'}); }
	/*$('.submenu').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$('nav ul ul').css({'visibility':'hidden','opacity': '0'});
		} else {
			$(this).addClass('active');
			$('nav ul ul').css({'visibility':'visible','opacity': '1'});
		}
	}); */
	$('html').niceScroll({ cursorwidth: "4px", cursorborder: '1px solid rgba(255, 255, 255, 0.2)', railpadding: { top: 0, right: 2, left: 0, bottom: 0 }, zindex: 150, scrollspeed: 150 });
});
var windowWidth = $(window).width();
var documentWidth = $(document).width();
if (windowWidth > 1200) {
	$(document).ready(function() {
		// Show or hide the sticky footer button
		$(window).scroll(function() {
			if ($(this).scrollTop() > 399) {
				$('#gotop').fadeIn(0);
				$('.fa-bg').fadeIn(0);
			} else {
				$('#gotop').fadeOut(0);
				$('.fa-bg').fadeOut(0);
			}
		});
		// Animate the scroll to top
		$('#gotop').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, 600);
		})
	});
}
$(document).on('click', '#media a, nav a', function(event){
	event.preventDefault();
	var elementID = $.attr(this, 'href');
	if(elementID == '#01' || elementID == '#02' || elementID == '#03' || elementID == '#04' || elementID == '#05' || elementID == '#06' || elementID == '#07' || elementID == '#08'){
		if($('.visible')[0]){
			$('.visible').fadeOut(600, function(){
				$('html, body').animate({
					scrollTop: $('#media').offset().top
				}, 800);
			});
			$('.visible').removeClass('visible');
			$(elementID).fadeIn(600, function(){
				$('html, body').animate({
					scrollTop: $(elementID).offset().top
				}, 800);
			});
			$(elementID).addClass('visible');
		} else {
			$('#media h2').css({'display': 'none'});
			$('#expand-section').addClass('animated fadeInUp delay-1s');
			$('#expand-section').fadeIn(600);
			$('#wrapper').slideToggle(600);
			$(elementID).fadeIn(600, function(){
				$('html, body').animate({
					scrollTop: $(elementID).offset().top
				}, 800);
			});
			$(elementID).addClass('visible');
		}
	} else {
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 800);
	}
});
$('#expand-section').click(function(){
	$('#expand-section').removeClass('animated fadeInUp delay-1s');
	$(this).fadeOut(0);
	$('#wrapper').slideToggle(600);
	$('#media h2').css({'display': 'block'});
	$('.visible').fadeOut(600, function(){
		$('html, body').animate({
			scrollTop: $('#media').offset().top
		}, 800);
	});
	$('.visible').removeClass('visible');
});
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubePlayerAPIReady() {
	player = new YT.Player('video', {
	height: '500',
	width: '1000',
	playerVars: { 'rel': 0, 'autohide': 0, 'enablejsapi': 1 },
	events: {	'onStateChange': onPlayerStateChange }
	});
}
function onPlayerStateChange(event) {
	if (event.data == 0) { $("#player").fadeOut("slow"); }
}
$('.trailer a').click(function(){
	$('#player').fadeIn(500);
	player.setVolume(50);
	player.playVideo();
});
$(document).mouseup(function(e){
	var container = $('#container');
	if(!container.is(e.target) && container.has(e.target).length === 0) { $('#player').fadeOut(500); player.pauseVideo(); }
});