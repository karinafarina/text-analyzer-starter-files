
$(document).ready(function() { 
	$('.js-form').submit(function(event) {
	event.preventDefault();
	var words = $('#user-text').val().split(' ');
	console.log(words.length);
	$(".js-numWords").text(words.length);
	var unique = [];
	for(var i=0;i<words.length;i++) {
		if(unique.indexOf(words[i]) === -1) {
		  unique.push(words[i]);
		  console.log(unique.length);
		}
	}
	$(".js-unique").text(unique.length);
	var runningTotal = 0;
	for(var i=0;i<words.length;i++) {
		runningTotal = words[i].length + runningTotal;
	}
	$('.js-average').text(runningTotal/words.length);
	$(".text-report").removeClass("hidden");
	});
});

		
