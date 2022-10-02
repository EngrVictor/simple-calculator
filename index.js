// getting all element **************************************************************
let result = document.getElementById('result');
let reset = document.getElementById('reset');
let equal = document.getElementById('equal');
let del = document.getElementById('del');
let keys = document.querySelectorAll('button')
let syms = document.querySelectorAll('.sym');
let special = document.querySelectorAll('.special');
let main = document.querySelector('.main');
let char, res;

// colors used from light to dark ***************************************************
let colors = {
    // body result main hover button    *order*
    light: ['#bccbde', '#431c5d', '#c2dde6', '#cdd422', '#FFFFFF'],
    medium: ['#A3BCB6','#3C403D','#39603D','#92ab6f', '#FFFFFF'],
    dark: ['#203647', '#12232E', '#007CC7', '#4DA8DA', '#EEFBFB']
}

// funtion to toggle colors *********************************************************
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
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `button:hover {background-color: ${colors[3]} !important; transition: .2s ease-in-out;}
    #equal:hover {background-color: ${colors[1]} !important;}
    .sym:focus {background-color: ${colors[0]} !important; color: ${colors[4]} !important;}`;
    document.getElementsByTagName("head")[0].appendChild( style );
}

// applying default color ***********************************************************
changeStyle(colors.light)

// checking symbols, converting and storing in variable for use *********************
syms.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {

        if (char.length > 15) {
            equalRes()
        } else if (char[char.length - 1] == ' + '|char[char.length - 1] == ' - '|char[char.length - 1] == ' / '|char[char.length - 1] == ' x ') {
            return;
        } else {
            num = parseInt(res)
            char = [];
            sign = e.target.innerHTML;
        }
    })
})

// getting all keys triggered storing in array and seperating from symbols *****************
keys.forEach((btn) => {
    char = []
    btn.addEventListener(('click'), (e) => {

        if (e.target.className == 'special' || e.target.className == 'sym') {
        } else if (char.length > 15) {
            equalRes()
        } else {
            char.push(parseInt(e.target.innerHTML))
            res = char.join('')
            sendRes(res)
        }
    })
})

// basic calculating function *******************************************************
function evaluate(param1, param2) {
    switch(sign) {
        case "+":
            return param1 + param2;
            
        case "-":
            return param1 - param2;
            
        case "x":
            return param1 * param2;
            
        case "/":
            return param1 / param2;
            
    }
}

// send result to user **************************************************************
function sendRes(res) {
    result.innerHTML = res;
}

// triggers calculation function ****************************************************
function equalRes() {
    let result = evaluate(num, parseInt(res));
    char = []
    res = `<span class='ans'>Ans</span><span>${result}</span>`;
    sendRes(res)
}

// resets all input bith screen and array *******************************************
reset.addEventListener(('click'), () => {
    char = []
    result.innerHTML = '0';
})

// deletes last entered value  ******************************************************
del.addEventListener(('click'), () => {

    if (char.length < 2) {
        result.innerHTML = '0';
        char.pop()
    } else {
        char.pop()
        let res = char.join('')
        sendRes(res)
    }
})

// equal triggered by result request ************************************************
equal.addEventListener(('click'), () => {
    equalRes()
})