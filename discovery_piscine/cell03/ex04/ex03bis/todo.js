$(document).ready(function () {
	function getCookie(name) {
		const cookies = document.cookie ? document.cookie.split('; ') : [];
		for (let i = 0; i < cookies.length; i++) {
			const parts = cookies[i].split('=');
			if (decodeURIComponent(parts[0]) === name) {
				return decodeURIComponent(parts.slice(1).join('='));
			}
		}
		return null;
	}

	function saveTodos() {
		const todos = [];
		$('#ft_list .todo-item').each(function () {
			todos.push($(this).text());
		});
		const d = new Date();
		d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
		document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";expires=" + d.toUTCString() + ";path=/;SameSite=Lax";
	}

	function addTodo(text) {
		const $item = $('<div></div>').addClass('todo-item').text(text);
		$item.on('click', function () {
			if (confirm('Do you really want to remove this TO DO?')) {
				$(this).remove();
				saveTodos();
			}
		});
		$('#ft_list').prepend($item);
	}

	function loadTodos() {
		const raw = getCookie('todos');
		if (raw) {
			try {
				const todos = JSON.parse(raw);
				for (let i = todos.length - 1; i >= 0; i--) {
					addTodo(todos[i]);
				}
			} catch (e) {
				console.error('Failed to parse cookies:', e);
			}
		}
	}

	$('#new').on('click', function () {
		const text = prompt('Enter a new TO DO:');
		if (text && text.trim() !== '') {
			addTodo(text.trim());
			saveTodos();
		}
	});

	loadTodos();
});
