// on ready
$(function() {

	var RandomImage = function() {

		this.getImage = function( imgClass, api ) {

			$.getJSON(api, function( data ) {

				$(`#${imgClass}`).attr('src', data.message);

			});
		};

	};		

	$.getJSON('https://dog.ceo/api/breeds/list/all', function( data ) {
		$.each(data.message, function(dogBreed, dogSubBreed) {
			if(dogBreed.length > 0) {

				var newDog = new RandomImage();
				var getRandomImage = newDog.getImage(dogBreed, `https://dog.ceo/api/breed/${dogBreed}/images/random`);

				$('.body-container').append(
						`<div class="col-md-4 ">
	              <div class="card mb-4 box-shadow">
	                <img class="card-img-top" src="" alt="${dogBreed}" id="${dogBreed}">
	                <div class="card-body">
	                  <p class="card-text">${dogBreed}</p>
	                  <div class="d-flex justify-content-between align-items-center">
	                    <div class="btn-group">
	                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
	                    </div>
	                    <small class="text-muted">${dogBreed.length} sub breeds </small>
	                  </div>
	                </div>
	              </div>
	            </div>`);
			}

		});

	}); // end for getJSON



}); // end for ready