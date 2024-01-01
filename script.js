const num =['0','1','2','3','4','5','6','7','8','9']
const first = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
const second = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
const third = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const specialCharacters = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\',
    ';', ':', '\'', '\"', ',', '.', '<', '>', '/'
];
let flag='Encode';
function toggle(){

    
    if (flag === 'Encode') {
        
        encode();
    } else if (flag === 'Decode') {
        
        decode();
    }
}

function encode() {
    const button = document.getElementById('encrypt-button');
    const input = document.getElementById('input');
    const msg = input.value;
    let output = '';
    
    for (const char of msg) {
        if (num.includes(char)) {
            output += '0'+char +'.'      
        } 
        else if (first.includes(char)) {
            output += '1' + first.indexOf(char) + '.';
        } else if (second.includes(char)) {
            output += '2' + second.indexOf(char) + '.';
        } else if (third.includes(char)) {
            output += '3' + third.indexOf(char) + '.';
        } 
        else {
            if (char === ' ')
            {
                output += '41'
            }
            else if (char === '.'  ) 
            {
                output += '42';
            }
            else if (char === '\n')
            {
                output += '43'
            }
            else{
                output += char;
            }
            output += '.';
        }
    }

    button.textContent = 'Decode'
    flag='Decode';
    input.value = output;
}

function decode() {
    const button = document.getElementById('encrypt-button');
    const input = document.getElementById('input');
    const msg = input.value;
    
    let output = '';
    let lst = [];
    let temp = '';

    for (const char of msg) {
        if (char !== '.') 
        {
            temp += char;
        } 
        else {
            lst.push(temp);
            temp = '';
        }
    }

    for (const item of lst) {
        if (parseInt(item) < 10){
            output += num[item[1]];
        }
        else if (parseInt(item) < 20) {
            console.log(item + " (1): " + first[item[1]]);
            output += first[item[1]];
        } else if (parseInt(item) < 30) {
            console.log(item + " (2): " + second[item[1]]);
            output += second[item[1]];
        } else if (parseInt(item) < 40) {
            console.log(item + " (3): " + third[item[1]]);
            output += third[item[1]];
        }else if (parseInt(item) === 41) {
            output += ' ';

        }else if (parseInt(item) === 42){
            output += '.';
        }else if(parseInt(item) === 43)
        {
            output += '\n';
        }else if (specialCharacters.includes(item))
        {
            output += item;
        }
        

    }
    button.textContent='Encode';
    flag='Encode';

    input.value = output ;
}

function copyToClipboard() {
   
    const textarea = document.getElementById('input');
    textarea.select();

    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    
}