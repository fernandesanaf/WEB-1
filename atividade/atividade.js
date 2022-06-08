function vermaior() {
    var numMaior = 0
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    var num3 = document.getElementById('num3')

    if (num1.value > num2.value && num1.value > num3.value) {
        numMaior = n1.value
    } else if (num2.value > num1.value && num2.value > num3.value) {
        numMaior = num2.value
    } else {
        numMaior = num3.value
    }
    document.getElementById('maior').value = numMaior
}

function validacao() {
    var rua = document.getElementById('rua')
    var cidade = document.getElementById('cidade')
    var checkbox1 = document.getElementById('option1')
    var checkbox2 = document.getElementById('option2')
    var termos1 = document.getElementById('termos1')
    var termos2 = document.getElementById('termos2')

    if (rua.value == '') {
        rua.classList.add('danger')
    } else {
        rua.classList.add('success')
    }

    if (cidade.value == '') {
        cidade.classList.add('danger')
    } else {
        cidade.classList.add('success')
    }

    if (checkbox1.checked) {
        termos1.classList.add('successText')
    } else {
        termos1.classList.add('dangerText')
    }

    if (checkbox2.checked) {
        termos2.classList.add('successText')
    } else {
        termos2.classList.add('dangerText')
    }
}

function aleatorios() {
    var valor = []
    var tabela1 = document.getElementById('td1')
    var tabela2 = document.getElementById('td2')
    var tabela3 = document.getElementById('td3')
    var tabela4 = document.getElementById('td4')
    var tabela5 = document.getElementById('td5')
    var tabela6 = document.getElementById('td6')
    var tabela7 = document.getElementById('td7')
    var tabela8 = document.getElementById('td8')
    var tabela9 = document.getElementById('td9')

    for (var i = 0; i < 9; i++) {
        valor[i] = Math.floor(Math.random() * 10)
    }

    tabela1.innerText = valor[0]
    tabela2.innerText = valor[1]
    tabela3.innerText = valor[2]
    tabela4.innerText = valor[3]
    tabela5.innerText = valor[4]
    tabela6.innerText = valor[5]
    tabela7.innerText = valor[6]
    tabela8.innerText = valor[7]
    tabela9.innerText = valor[8]
}
