function isPositiveInteger(str) {
    return /^\d+$/.test(str.trim());
}

document.getElementById('btn').addEventListener('click', function () {
    const leftStr = document.getElementById('left').value;
    const rightStr = document.getElementById('right').value;
    const operator = document.getElementById('operator').value;

    if (!isPositiveInteger(leftStr) || !isPositiveInteger(rightStr)) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftStr, 10);
    const right = parseInt(rightStr, 10);

    if ((operator === '/' || operator === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
        case '%':
            result = left % right;
            break;
    }

    alert(result);
    console.log(result);
});

setInterval(function () {
    alert('Please, use me...');
}, 30000);
