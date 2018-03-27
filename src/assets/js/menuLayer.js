var myExtObject = (function() {
  return {
    closeLayer: function() {
      var overlayNav = $('.cd-overlay-nav'),
		overlayContent = $('.cd-overlay-content'),
		navigation = $('.cd-primary-nav'),
		toggleNav = $('.cd-nav-trigger');
		
		if(!toggleNav.hasClass('close-nav')) {
			navigation.addClass('fade-in')
			// //it means navigation is not visible yet - open it and animate navigation layer
			toggleNav.addClass('close-nav');
            toggleNav.children("div").addClass("open");
			
			// overlayNav.children('span').velocity({
			// 	translateZ: 0,
			// 	scaleX: 1,
			// 	scaleY: 1,
			// }, 500, 'easeInCubic', function(){
			// 	navigation.addClass('fade-in');
			// });
			
		} else {
			//navigation is open - close it and remove navigation layer
			
			toggleNav.removeClass('close-nav');
            toggleNav.children("div").removeClass("open")
            navigation.removeClass('fade-in');
            
			// overlayContent.children('span').velocity({
			// 	translateZ: 0,
			// 	scaleX: 1,
			// 	scaleY: 1,
			// }, 500, 'easeInCubic', function(){
			// 	navigation.removeClass('fade-in');
				
			// 	overlayNav.children('span').velocity({
			// 		translateZ: 0,
			// 		scaleX: 0,
			// 		scaleY: 0,
			// 	}, 0);
				
			// 	overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
			// 		overlayContent.children('span').velocity({
			// 			translateZ: 0,
			// 			scaleX: 0,
			// 			scaleY: 0,
			// 		}, 0, function(){overlayContent.removeClass('is-hidden')});
			// 	});
			// 	if($('html').hasClass('no-csstransitions')) {
			// 		overlayContent.children('span').velocity({
			// 			translateZ: 0,
			// 			scaleX: 0,
			// 			scaleY: 0,
			// 		}, 0, function(){overlayContent.removeClass('is-hidden')});
			// 	}
			// });
		}
    }
  }

})(myExtObject||{})