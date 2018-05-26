// on ready
$(function() {

	var RandomImage = function() {

		this.getImage = function( api ) {

			$.getJSON(api, function( data ) {
							this.imageLink = data.message;
							this.getLink(this.imageLink);
			});

		};

		this.getLink = function([]) {

		};


		
	};		
		

	$.getJSON('https://dog.ceo/api/breeds/list/all', function( data ) {
		$.each(data.message, function(dogBreed, dogSubBreed) {

			if(dogBreed.length > 0) {

				var newDog = new RandomImage();

				var getRandomImage = newDog.getImage(`https://dog.ceo/api/breed/${dogBreed}/images/random`);
				// console.log(newDog.getLink);

				$('.body-container').append(
						`<div class="col-md-4 ">
	              <div class="card mb-4 box-shadow">
	                <img class="card-img-top" src="" alt="${dogBreed}">
	                <div class="card-body">
	                  <p class="card-text">${dogBreed}</p>
	                  <div class="d-flex justify-content-between align-items-center">
	                    <div class="btn-group">
	                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
	                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
	                    </div>
	                    <small class="text-muted">9 mins</small>
	                  </div>
	                </div>
	              </div>
	            </div>`);

			}

		});

	}); // end for getJSON



}); // end for ready