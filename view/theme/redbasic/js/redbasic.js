/**
 * redbasic theme specific JavaScript
 */
$(document).ready(function() {

	// CSS3 calc() fallback (for unsupported browsers)
	$('body').append('<div id="css3-calc" style="width: 10px; width: calc(10px + 10px); display: none;"></div>');
	if( $('#css3-calc').width() == 10) {
		$(window).resize(function() {
			if($(window).width() < 767) {
				$('main').css('width', $(window).width() + $('aside').outerWidth() );
			} else {
				$('main').css('width', '100%' );
			}
		});
	}

	$('#css3-calc').remove(); // Remove the test element

	$('#left_aside_wrapper').stick_in_parent({
		offset_top: $('nav').outerHeight(true)
	});

	$('#expand-aside').on('click', toggleAside);

	$('section').on('click', function() {
		if($('main').hasClass('region_1-on')){
			toggleAside();
		}
	});

	$(window).on('scroll', function() {
		if($('main').hasClass('region_1-on') && $(window).scrollLeft() > 5){
			$(window).scrollLeft(0);
			toggleAside();
		}
	});

	if($('aside').length && $('aside').html().length === 0) {
		$('#expand-aside').hide();
	}

	$('#expand-tabs').click(function() {
		if(!$('#tabs-collapse-1').hasClass('in')){
			$('html, body').animate({ scrollTop: 0 }, 'slow');
		}
		$('#expand-tabs-icon').toggleClass('fa-arrow-circle-down').toggleClass('fa-arrow-circle-up');
	});

	$('.usermenu-head').click(function() {
		if($('#navbar-collapse-1').hasClass('in')){
			$('#navbar-collapse-1').removeClass('in');
		}
	});
	
	if($('#tabs-collapse-1').length === 0) {
		$('#expand-tabs').hide();
	}

	$("input[data-role=cat-tagsinput]").tagsinput({
		tagClass: 'label label-primary'
	});

	var doctitle = document.title;
	function checkNotify() {
		var notifyUpdateElem = document.getElementById('notify-update');
		if(notifyUpdateElem !== null) { 
			if(notifyUpdateElem.innerHTML !== "")
				document.title = "(" + notifyUpdateElem.innerHTML + ") " + doctitle;
			else
				document.title = doctitle;
		}
	}
	setInterval(function () {checkNotify();}, 10 * 1000);
});

function makeFullScreen(full) {
	if(typeof full=='undefined' || full == true) {
		$('main').css({'transition': 'none'}).addClass('fullscreen');
		$('header, nav, aside, #fullscreen-btn').hide();
		$('#tabs-collapse-1').css({'visibility': 'hidden'});
		$('#inline-btn').show();
	}
	else {
		$('main').removeClass('fullscreen');
		$('header, nav, aside, #fullscreen-btn').show();
		$('#tabs-collapse-1').css({'visibility': ''});
		$('#inline-btn').hide();
		$('main').css({'transition': ''});
		$(document.body).trigger("sticky_kit:recalc");
	}
}

function toggleAside() {
	$(window).scroll();
	$('#expand-aside-icon').toggleClass('fa-arrow-circle-right').toggleClass('fa-arrow-circle-left');
	$('main').toggleClass('region_1-on');
}
