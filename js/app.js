$(document).ready(function(){
	
	$('a').on('click',function(event){
		event.preventDefault();
		var val = $(this).attr('href');
		$('#cible').load(val);
	});
});


	$.getJSON('http://vps227573.ovh.net/u-20.json',function(data) {
		var result=$('[elt]');
		for (var i=0; i < result.length; i++){ 
			var attribut =$(result[i]).attr('elt'); 
			var valeur = data[attribut];
		$(result[i]).html(valeur);
	};               
	
});

