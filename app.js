
$(document).ready(function() { 
	$('form').submit(function(event) {
		console.log("Hello");
	event.preventDefault();
	var wordCount = $('#user-text').val().split(' ');
	alert(wordCount.length);
	$("#numWords").text(wordCount.length);
	})
});








