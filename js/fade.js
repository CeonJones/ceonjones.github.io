/* global $ */
$(document).ready(function() {
  // Animate elements based on their data-animation-duration and data-animation-delay attributes
  $('.fade-in-animation').each(function() {
	const animationDuration = $(this).data('animation-duration');
	const animationDelay = $(this).data('animation-delay');
	$(this).css({
	  'animation-duration': animationDuration,
	  'animation-delay': animationDelay,
	  'animation-play-state': 'running'
	});
  });
});