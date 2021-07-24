function check() {
    let country = document.getElementById('country').value;
    let points = document.getElementById('points').value;

    var count = 0;


    if (document.getElementById('fed2').checked) {
        count += 1;
    }

    if (document.getElementById('udar4').checked && document.getElementById('udar2').checked &&
        !document.getElementById('udar3').checked && !document.getElementById('udar1').checked) {
        count += 1;
    }

    if (country.toLowerCase() == "китай") {
        count += 1;
    }

    if (points == "11") {
        count += 1;
    }

    if (document.getElementById('players1').value == 1 && document.getElementById('players2').value == 1 &&
        document.getElementById('players3').value == 1) {
        count += 1;
    }
    var result= "";
    if (count <= 2) {
        result = "Сир, да вам дорога в шахматы.";
    }
    if (count == 3) {
        result = "Вы - среднячок!!!";
    }
    if (count == 4) {
        result = "Неплохо, неплохо, еще чуть-чуть и будете мастером спорта.";
    }
    if (count == 5) {
        result = "Вы - супер теннисист, Тимо Болл тихо курит в сторонке!";
    }

    document.getElementById('res').style.display = "block";
    document.getElementById('check').innerHTML = "Вы набрали: " + count + " баллов из 5. " + result;
}