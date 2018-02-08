;(function($) {
	"use strict";
 var menuToggle = document.querySelector('.ba-menu-toggle'),
 		overlay= document.querySelector('.ba-overlay'),
        body = document.body;

    menuToggle.addEventListener('click', function(){
        body.classList.toggle('ba-menu-open');
    });
    overlay.addEventListener('click', function(){
        body.classList.toggle('ba-menu-open');
    });


    var worksGrid = $('.ba-works-grid');
window.onload = function () {
	$(worksGrid).isotope({
		// options
		itemSelector: '.ba-grid-item',
		percentPosition: true,
		masonry:{
			columnWidth: '.grid-sizer'
		}
		// layoutMode: 'fitRows'

	});
	$('.ba-works__menu').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		worksGrid.isotope({ filter: filterValue });
	});
};
})(jQuery);
