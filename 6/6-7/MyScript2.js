function result() {
    let otryad = document.getElementById('otryad').value;
    let record = document.getElementById('record').value;

    var count = 0;
    var mark = "Неудовлетворительно";

    if (document.getElementById('radio-2').checked) {
        count += 1;
    }

    if (document.getElementById('checkbox-1').checked && document.getElementById('checkbox-2').checked &&
        document.getElementById('checkbox-3').checked && !document.getElementById('checkbox-4').checked) {
        count += 1;
    }

    if (otryad.toLowerCase() == "хищных") {
        count += 1;
    }

    if (record == "38") {
        count += 1;
    }

    if (document.getElementById('select-1').value == 1 && document.getElementById('select-2').value == 1 &&
        document.getElementById('select-3').value == 1) {
        count += 1;
    }

    if (count <= 2) {
        mark = "неудовлетворительно";
    }
    if (count == 3) {
        mark = "удовлетворительно";
    }
    if (count == 4) {
        mark = "хорошо";
    }
    if (count == 5) {
        mark = "отлично";
    }

    document.getElementById('res').style.display = "block";
    document.getElementById('result').innerHTML = "Ваш результат: " + count + "/5 баллов. Оценка: " + mark;
}