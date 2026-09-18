const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new_btn');

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const parts = cookies[i].split('=');
        if (parts[0] === name) {
            return decodeURIComponent(parts[1]);
        }
    }
    return null;
}

function saveTodos() {
    const todos = [];
    const items = ftList.querySelectorAll('div');
    items.forEach(item => {
        todos.push(item.textContent);
    });
    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=31536000";
}

function createTodoElement(text) {
    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function () {
        if (confirm('Do you really want to delete this TO DO?')) {
            div.remove();
            saveTodos();
        }
    });

    ftList.prepend(div);
}

function loadTodos() {
    const saved = getCookie('todos');
    if (saved) {
        try {
            const todos = JSON.parse(saved);
            for (let i = todos.length - 1; i >= 0; i--) {
                createTodoElement(todos[i]);
            }
        } catch (e) {
            console.error('Failed to parse cookie', e);
        }
    }
}

newBtn.addEventListener('click', function () {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        createTodoElement(text.trim());
        saveTodos();
    }
});

loadTodos();
