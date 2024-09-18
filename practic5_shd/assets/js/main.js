// 1 задание

zad1.onclick = function () {

    let a = +prompt('Введите число начала');
    let b = +prompt('Введите число окончания');

    for (a; a <= b; a++) {
        if (!(a % 2)) {
            alert(a);
        } else continue;
    }

}

// 2 задание

zad2.onclick = function () {

    let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;
    }
}

// 3 задание

zad3.onclick = function () {

    let a = 0;

    while (true) {
        a = +prompt('Введите число, больше 10');
        if (a < 10) break;
    }
}

// 4 задание

zad4.onclick = function () {

    function min(a, b) {
        if (a < b) return a;
        return b;
    }

    alert(min(+prompt('Введите число a'), +prompt('Введите число b')));
}

// 5 задание

zad5.onclick = function () {

    let ask = (question, yes, no) => {
        if (confirm(question)) yes()
        else no();
    }
    ask(
        "Вы согласны?",
        () => alert("Вы согласились."),
        () => alert("Вы отменили выполнение.")
    );

}

// 6 задание

zad6.onclick = function () {

    ageUser = +prompt('Введите ваш возраст');

    function checkAge(age) {
        return age > 18 || confirm('Родители разрешили?');
    }

    alert(checkAge(ageUser));

}