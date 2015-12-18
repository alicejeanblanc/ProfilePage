$(document).ready(function(){

	$('body').on('click','a', function(event){
		
		event.preventDefault();
	
		var id = $(this).attr('href');
		
		$('.contenu').hide();

		if (id=="#modalbox"){

			$('#conteneur').show();

		}

		else{
			$(id).show();
		}
				
	});


	$('body').on('click', '#btn', function(){
			console.log('work !');
			$('#conteneur').remove();
	});



	$.getJSON('https://s.idsympa.com/u-20.json',function(data) {
		mytemplate(data);
	}); 

	var mytemplate = function (infos) {
 		var template = $('#template').html();
 		var rendered = Mustache.render(template,infos);
 		$('body').html(rendered);
	};



});