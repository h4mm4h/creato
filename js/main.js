;(function() {
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


})();
