jQuery(document).ready(function($) {
	$(".booble").hover(function() {
		$(this).addClass('animated jello');
	}, function() {
		$(this).removeClass('animated jello');
	});
	$("#ex2").slider({
		tooltip: 'always',
		ticks_labels: ['0','100','200','300','400','500','600','700','800','900','1000'],
		ticks_tooltip: ['0','100','200','300']
	});
});