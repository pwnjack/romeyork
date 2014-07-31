// MixItUp init and filters skills
$(function() {
	if (location.hash === "#clip") {
		$('#Container').mixItUp({
	    	load: {
	        	filter: '.clip'
	        }
	    });
	}
	else if (location.hash === "#adv") {
		$('#Container').mixItUp({
	    	load: {
	        	filter: '.adv'
	        }
	    });
	}
	else if (location.hash === "#live") {
		$('#Container').mixItUp({
	    	load: {
	        	filter: '.live'
	        }
	    });
	}
	else if (location.hash === "#other") {
		$('#Container').mixItUp({
	    	load: {
	        	filter: '.other'
	        }
	    });
	}
	else {
		$('#Container').mixItUp();
	}
});

// Magnific popup init
$(document).ready(function() {

	$('#Container').magnificPopup({
	  	delegate: 'a', // child items selector, by clicking on it popup will open
	  	type: 'iframe',

	  	gallery: {
		  enabled: true, // set to true to enable gallery
		}
	});

});

// Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#backtotop').fadeIn(200);        // Fade in the arrow
    } else {
        $('#backtotop').fadeOut(200);       // Else fade out the arrow
    }
});
$('#backtotop').click(function() {          // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// Black and White thumbs if not mobile
// Detect Device
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// If NOT Mobile then initilize Stellar
if( !isMobile.any() )
    $(function(){
        $('.item img').addClass('bw');
    });