$(document).ready(function () {
	setInterval(function () {
		alert('Please, use me...');
	}, 30000);

	function isPositiveInteger(val) {
		return /^\d+$/.test(val.trim());
	}

	$('#calcForm').on('submit', function (e) {
		e.preventDefault();

		const leftStr = $('#left').val();
		const rightStr = $('#right').val();
		const op = $('#operator').val();

		if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
			alert('Error :(');
			return;
		}

		const a = parseInt(leftStr, 10);
		const b = parseInt(rightStr, 10);

		if ((op === '/' || op === '%') && b === 0) {
			alert("It's over 9000!");
			console.log("It's over 9000!");
			return;
		}

		let result = 0;
		if (op === '+') result = a + b;
		else if (op === '-') result = a - b;
		else if (op === '*') result = a * b;
		else if (op === '/') result = a / b;
		else if (op === '%') result = a % b;

		alert(result);
		console.log(result);
	});
});
