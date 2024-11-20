function checkCount() {
    var count = document.getElementById("Count").value;
    var regex = /^\d+$/;

    if (regex.test(count)) {
        document.getElementById("count_Check").style.color = "yellow";
        document.getElementById("count_Check").innerHTML = "Input correct";
        return true;
    }
    else {
        document.getElementById("count_Check").style.color = "pink";
        document.getElementById("count_Check").innerHTML = "Пожалуйста, введите неотрицательное число";
        return false;
    }
}

function checkAddress() {
    var addr = document.getElementById("Addr").value;
    var regex = /^([a-zA-Zа-яА-Я\s].{2,50}),([a-zA-Zа-яА-Я\s].{2,50}),([a-zA-Zа-яА-Я\s].{2,50})$/;

    if (regex.test(addr)) {
        document.getElementById("addr_Check").style.color = "yellow";
        document.getElementById("addr_Check").innerHTML = "Input correct";
        return true;
    }
    else {
        document.getElementById("addr_Check").style.color = "pink";
        document.getElementById("addr_Check").innerHTML = "Пожалуйста, введите верные данные";
        return false;
    }
}

function checkData() {
    var paym = document.getElementById("Paym").value;
    var card_name = document.querySelector("#Card_name")
    var cvv = document.querySelector("#cvv");
    var user = document.querySelector("#User");

    switch (paym){
        case "Баланс сайта":
            card_name.value = '0000 0000 0000 0000';
            cvv.value = '000';
            user.value = 'User Name';
            card_name.disabled = true;
            cvv.disabled = true;
            user.disabled = true;
            break;
        case "Карта 1":
            card_name.value = '1252 0125 1353 4262';
            cvv.value = '347';
            user.value = 'Ivai Petriv';
            card_name.disabled = true;
            cvv.disabled = true;
            user.disabled = true;
            break;
        case "Карта 2":
            card_name.value = '1225 0475 6453 5822';
            cvv.value = '957';
            user.value = 'Avaa Uvava';
            card_name.disabled = true;
            cvv.disabled = true;
            user.disabled = true;
            break;
        default:
            card_name.value = '';
            cvv.value = '';
            user.value = '';
            card_name.disabled = false;
            cvv.disabled = false;
            user.disabled = false;
            break;
    }
}

function checkCard() {
    var card_name = document.getElementById("Card_name").value;
    var regex = /^(\d{4})\s(\d{4})\s(\d{4})\s(\d{4})$/;

    if (regex.test(card_name)) {
        document.getElementById("card_Check").style.color = "yellow";
        document.getElementById("card_Check").innerHTML = "Input correct";
        return true;
    }
    else {
        document.getElementById("card_Check").style.color = "pink";
        document.getElementById("card_Check").innerHTML = "Input is incorrect!";
        return false;
    }
}

function checkCvv() {
    var cvv_name = document.getElementById("cvv").value;
    var regex = /^\d{3}$/;

    if (regex.test(cvv_name)) {
        document.getElementById("cvv_Check").style.color = "yellow";
        document.getElementById("cvv_Check").innerHTML = "Input correct";
        return true;
    }
    else {
        document.getElementById("cvv_Check").style.color = "pink";
        document.getElementById("cvv_Check").innerHTML = "Input is incorrect!";
        return false;
    }
}

function checkUser() {
    var user = document.getElementById("User").value;
    var regex = /^[a-zA-Z\s]{2,20}\s[a-zA-Z\s]{2,30}$/;

    if (regex.test(user)) {
        document.getElementById("user_Check").style.color = "yellow";
        document.getElementById("user_Check").innerHTML = "Input correct";
        return true;
    }
    else {
        document.getElementById("user_Check").style.color = "pink";
        document.getElementById("user_Check").innerHTML = "Input is incorrect!";
        return false;
    }
}

function outputData() {
    var product = document.getElementById("Product").value;
    var count = document.getElementById("Count").value;
    var addr = document.getElementById("Addr").value;
    var paym = document.getElementById("Paym").value;
    var card_name = document.getElementById("Card_name").value;
    var cvv = document.getElementById("cvv").value;
    var user = document.getElementById("User").value;

    if (product != "" && count != "" && addr != "" && paym != "" && card_name != "" && cvv != "" && user != "") {
        document.getElementById("summary").style.color = "yellow";
        document.getElementById("summary").innerHTML = "Заказ " + product + " в количестве " + count + " успешно оформлен! ";
        document.getElementById("summary").innerHTML += "Заказ будет доставлен по адресу " + addr + " в ближайшее время.";
    }
    else {
        document.getElementById("summary").style.color="pink";
        document.getElementById("summary").innerHTML = "Пожалуйста, заполните все поля";
    }
}

function buttonColor() {
    var product = document.getElementById("Product").value;
    var count = document.getElementById("Count").value;
    var addr = document.getElementById("Addr").value;
    var paym = document.getElementById("Paym").value;
    var card_name = document.getElementById("Card_name").value;
    var cvv = document.getElementById("cvv").value;
    var user = document.getElementById("User").value;
    if (product != "" && count != "" && addr != "" && paym != "" && card_name != "" && cvv != "" && user != ""){
        document.getElementById('sendOrder').style.backgroundColor = 'blue';
    }
    else {
        document.getElementById('sendOrder').style.backgroundColor = 'purple';
    }
}

function buttonText() {
    for (var i = 0; i < 5; i++)
    {
        document.getElementsByClassName("text-input")[i].style = 'width: 270px; height: 40px;';
    }
    document.getElementById("summary").style = 'font-size: 26px;';
}
    

