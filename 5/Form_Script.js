// function CheckForm(f) {
    // for (var i = 0; i < f.elements.length; i++)
        // if (null != f.elements[i].getAttribute("required"))
            // if (isEmpty(f.elements[i].value))
                // return false;
// }
function onChecked(divId, checkboxId) {
    if (document.getElementById(checkboxId).checked) {
        document.getElementById(divId).style.display = "block";
        return false;
    } else {
        document.getElementById(divId).style.display = "none";
    }
}

function onFontColorChanged() {
    document.getElementById("body").style.color = document.getElementById("fontcolor").value;
    document.getElementById("body").style.backgroundColor = document.getElementById("backgroundcolor").value;
    return false;
}

function thumbNumber() {
    document.getElementById("body").style.fontSize = document.getElementById("size").value + 'px';
    return false;
}

function CheckForm(f) {
	let surname = document.getElementById('surname').value;
	let name = document.getElementById('name').value;
    let patronymic = document.getElementById('patronymic').value;
    let birthday = document.getElementById('birthday').value;
    let email = document.getElementById('email').value;
    let home_page = document.getElementById('home_page').value;

    let dop = "";

     if (document.getElementById("checkbox1").checked) {
         dop += "Школьник: " + document.querySelector('input[class="klass"]:checked').value + "<br>";
    }
	
	 if (document.getElementById("checkbox2").checked) {
		var e = document.getElementById("sel");
		var strUser = e.options[e.selectedIndex].text;
		dop += "Студент " +document.getElementById('mesto').value +" "+strUser+ " курса"+"<br>";
	}
		 
	 if (document.getElementById("checkbox3").checked) {
		dop +=  document.querySelector('input[class="drugoe"]:checked').value + "<br>";
	}
		 

    document.getElementById('res').style.display = "block";
    document.getElementById('result').innerHTML = "Фамилия: " + surname + "<br>" +
		"Имя: " + name + "<br>" +"Отчество: " + patronymic + "<br>"+ "Дата рождения: " +
        birthday + "<br>" + "Почта: " + email + "<br>" + "Домашняя страница: " + home_page + "<br>" +dop;

    return false;
}
function test() {
    window.open('lab6.html');
}