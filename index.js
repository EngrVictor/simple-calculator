let result = document.getElementById('result');
let reset = document.getElementById('reset');
let equal = document.getElementById('equal');
let del = document.getElementById('del');
let keys = document.querySelectorAll('button')
let syms = document.querySelectorAll('.sym');
let special = document.querySelectorAll('.special');
let main = document.querySelector('.main');
let char, res;

let colors = {
    // body result main hover button
    light: ['#bccbde', '#431c5d', '#c2dde6', '#cdd422', '#FFFFFF'],
    medium: ['#A3BCB6','#3C403D','#39603D','#92ab6f', '#FFFFFF'],
    dark: ['#203647', '#12232E', '#007CC7', '#4DA8DA', '#EEFBFB']
}

function changeStyle(colors) {
    document.body.style.backgroundColor = colors[0];
    result.style.backgroundColor = colors[1];
    main.style.backgroundColor = colors[2];
    keys.forEach((btn) => {
        btn.style.backgroundColor = colors[4];
    })
    special.forEach((btn) => {
        btn.style.backgroundColor = colors[3];
    })
    equal.style.backgroundColor = colors[1];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `button:hover {background-color: ${colors[3]} !important; transition: .2s ease-in-out;}
    #equal:hover {background-color: ${colors[1]} !important;}`;
    document.getElementsByTagName("head")[0].appendChild( style );
}

changeStyle(colors.light)

syms.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        
        if (char.length > 15) {
            equalRes()
        } else if (char[char.length - 1] == ' + '|char[char.length - 1] == ' - '|char[char.length - 1] == ' / '|char[char.length - 1] == ' x ') {
            return;
        } else {
            char.push(` ${e.target.innerHTML} `)
            res = char.join('')
            sendRes(res)
        }
    })
})

keys.forEach((btn) => {
    char = []
    // btn.style.color = 'red';
    btn.addEventListener(('click'), (e) => {

        if (e.target.className == 'special' || e.target.className == 'sym') {
        } else if (char.length > 15) {
            equalRes()
        } else {
            char.push(e.target.innerHTML)
            res = char.join('')
            sendRes(res)
        }
    })
})

function sendRes(res) {
    result.innerHTML = res;
}

function equalRes() {
    char = []
    res = `<span class='ans'>Ans</span><span>${120}</span>`;
    sendRes(res)
}

reset.addEventListener(('click'), () => {
    char = []
    result.innerHTML = '0';
})

del.addEventListener(('click'), () => {

    if (char.length < 2) {
        result.innerHTML = '0';
        char.pop()
    } else {
        char.pop()
        let res = char.join('')
        sendRes(res)
        console.log(char)
    }
})

equal.addEventListener(('click'), () => {
    equalRes()
})