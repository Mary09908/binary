
$('.filter__item').click(function(event) {
		var i=$(this).data('filter');
	if (i==1) {
		$('.portfolio__columnn').show();
	}else{
		$('.portfolio__column').hide();
		$('.portfolio__column.f_'+i).show();
	}
	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;

});

