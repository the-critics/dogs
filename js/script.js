// on ready
$(function() {

	$.getJSON('https://dog.ceo/api/breeds/list/all', function( data ) {

		$.each(data, function(key, value) {
			console.log(key, value);

		});
		
	});

});