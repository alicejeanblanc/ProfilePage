$(document).ready(function(){

/*	$.getJSON('http://vps227573.ovh.net/u-20.json',function(data){
		var var1="{{first_name}} {{occupation}}";
		var var2=Mustache.to_html(var1, data)
		$('h1').html(var2);
	};
*/

	$.getJSON('https://s.idsympa.com/u-20.json',function(data) {
		mytemplate(data);
	}); 

	var mytemplate = function (infos) {
 		var template = $('#template').html();
 		var rendered = Mustache.render(template,infos);
 		$('body').html(rendered);
	};



});