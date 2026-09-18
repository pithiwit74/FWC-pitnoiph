$(document).ready(function () {
	$('#colorBtn').on('click', function () {
		const hex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
		$('body').css('background-color', hex);
	});
});
