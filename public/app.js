$(function() {


	$('#story').hide();
	$('#play').hide();
	//event handler
	$('#btn-click').click(function(e) {
		console.log('clicked?')
		$('.greeting').empty().append($('input.greeting').val());
		$('.adj').empty().append($('input.adjective').val());
		$('.morning').empty().append($('input.morning').val());
		$('.noun').empty().append($('input.noun').val());
		$('.verb').empty().append($('input.verb').val());
		$('.place').empty().append($('input.place').val());
		$('.verb2').empty().append($('input.verb-two').val());
		$('.noun2').empty().append($('input.noun-two').val());
		$('.number').empty().append($('input.number').val());
		$('.adj2').empty().append($('input.adj-two').val());
		$('.verb3').empty().append($('input.verb-three').val());
		$('.adj3').empty().append($('input.adj-three').val());
		$('.verb4').empty().append($('input.verb-four').val());
		$('.noun3').empty().append($('input.noun-three').val());

		$('#story').show();

		$('input').val('');

		$('#questions').hide();

		$('#play').show();

	})

	$('#play').click(function(e) {
		$('#story').hide();
		$('#questions').show();
		$('#play').hide();
	})

})