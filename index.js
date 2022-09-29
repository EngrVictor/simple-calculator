let result = document.getElementById('result');
let reset = document.getElementById('reset');
let equal = document.getElementById('equal');
let del = document.getElementById('del');
let keys = document.querySelectorAll('button')
let syms = document.querySelectorAll('.sym');
let char, res;

syms.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        
        if (char.length > 15) {
            return char;
        } else {
            char.push(` ${e.target.innerHTML} `)
            console.log(char)
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
            console.log('special')
        } else if (char.length > 15) {
            return char;
        } else {
            char.push(e.target.innerHTML)
            console.log(char)
            res = char.join('')
            sendRes(res)
            console.log(e.target.className)
        }
    })
})

function sendRes(res) {
    result.innerHTML = res;
}

reset.addEventListener(('click'), () => {
    char = []
    result.innerHTML = '0';
    console.log('cleared!')
})

del.addEventListener(('click'), () => {

    if (char.length < 2) {
        result.innerHTML = '0';
        char.pop()
        console.log('out of data')
    } else {
        char.pop()
        let res = char.join('')
        sendRes(res)
        console.log(char)
        console.log('deleted!')
    }
})

equal.addEventListener(('click'), () => {
    char = []
    result.innerHTML = `<span class='ans'>Ans</span><span>${120}</span>`;
    console.log('woow!')
})

