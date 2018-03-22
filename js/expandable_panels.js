/*  JavaScript Document  */

$(document).ready(function(){
	inject_markup();
});

function inject_markup(){
	$('.expanding_panel').each(function(){
		var link_text = $(this).attr('data-link-text');

		$(this).append('<div class="expanding_panel_trigger">'+link_text+'</div>');
	});
}