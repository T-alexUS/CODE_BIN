let hum = function(number) {
    let strNumber = String(number);
    let arrayFromStrNumber = strNumber.split('')

    let string = '';
    
    //кейс для чисел <10
    if (arrayFromStrNumber.length === 1) {
        if(arrayFromStrNumber[0] === '0') {
            string += "zero"
        } else {
            // string += transition(arrayFromStrNumber[i]);
            switch(arrayFromStrNumber[0]) {
                case '1': {
                    string += 'one';
                    break;
                }
                case '2': {
                    string += 'two';
                    break;
                }
                case '3': {
                    string += 'three';
                    break;
                }
                case '4': {
                    string += 'four';
                    break;
                }
                case '5': {
                    string += 'five';
                    break;
                }
                case '6': {
                    string += 'six';
                    break;
                }
                case '7': {
                    string += 'seven';
                    break;
                }
                case '8': {
                    string += 'eight';
                    break;
                }
                case '9': {
                    string += 'nine';
                    break;
                }
            }
        }

    }


    //кейс для чисел >=10 но <100
    if (arrayFromStrNumber.length === 2) {
        for (let i = 0; i < 2; i++) {
            if(i === 0) {
                if(arrayFromStrNumber[i] === '0') {
                    string += ""
                } else if (arrayFromStrNumber[i] === '1') {
                    switch(arrayFromStrNumber[i+1]) {
                        case '0': {
                            string += 'ten';
                            break;
                        }
                        case '1': {
                            string += 'eleven';
                            break;
                        }
                        case '2': {
                            string += 'twelve'
                            break;
                        }
                        case '3': {
                            string += 'thirteen'
                            break;
                        }
                        case '4': {
                            string += 'fourteen'
                            break;
                        }
                        case '5': {
                            string += 'fifteen'
                            break;
                        }
                        case '6': {
                            string += 'sixteen'
                            break;
                        }
                        case '7': {
                            string += 'seventeen'
                            break;
                        }
                        case '8': {
                            string += 'eighteen'
                            break;
                        }
                        case '9': {
                            string += 'nineteen'
                            break;
                        }
                    }
                    return string;
                } else {
                    switch (arrayFromStrNumber[i]) {
                        case '2': {
                            string += 'twenty'
                            break;
                        }
                        case '3': {
                            string += 'thirty'
                            break;
                        }
                        case '4': {
                            string += 'forty'
                            break;
                        }
                        case '5': {
                            string += 'fifty'
                            break;
                        }
                        case '6': {
                            string += 'sixty'
                            break;
                        }
                        case '7': {
                            string += 'seventy'
                            break;
                        }
                        case '8': {
                            string += 'eighty'
                            break;
                        }
                        case '9': {
                            string += 'ninety'
                            break;
                        }
                    }
                }           
            }
            //обработка разряда единиц
            if (i === 1) {
                if(arrayFromStrNumber[i] === '0') {
                    string += ""
                } else {
                    // string += transition(arrayFromStrNumber[i]);
                    switch(arrayFromStrNumber[i]) {
                        case '1': {
                            string += ' one';
                            break;
                        }
                        case '2': {
                            string += ' two';
                            break;
                        }
                        case '3': {
                            string += ' three';
                            break;
                        }
                        case '4': {
                            string += ' four';
                            break;
                        }
                        case '5': {
                            string += ' five';
                            break;
                        }
                        case '6': {
                            string += ' six';
                            break;
                        }
                        case '7': {
                            string += ' seven';
                            break;
                        }
                        case '8': {
                            string += ' eight';
                            break;
                        }
                        case '9': {
                            string += ' nine';
                            break;
                        }
                    }
                }

            }
        }
    }

    //кейс для чисел >=100
    if (arrayFromStrNumber.length === 3) {
        for (let i = 0; i < 3; i++) {
            //обработка разряда сотых
            if(i === 0) {
                string += transition(arrayFromStrNumber[i]);
                string += ' hundred'
            } 
            //обработка разряда десятков
            if(i === 1) {
                if(arrayFromStrNumber[i] === '0') {
                    string += ""
                } else if (arrayFromStrNumber[i] === '1') {
                    switch(arrayFromStrNumber[i+1]) {
                        case '0': {
                            string += ' ten';
                            break;
                        }
                        case '1': {
                            string += ' eleven';
                            break;
                        }
                        case '2': {
                            string += ' twelve'
                            break;
                        }
                        case '3': {
                            string += ' thirteen'
                            break;
                        }
                        case '4': {
                            string += ' fourteen'
                            break;
                        }
                        case '5': {
                            string += ' fifteen'
                            break;
                        }
                        case '6': {
                            string += ' sixteen'
                            break;
                        }
                        case '7': {
                            string += ' seventeen'
                            break;
                        }
                        case '8': {
                            string += ' eighteen'
                            break;
                        }
                        case '9': {
                            string += ' nineteen'
                            break;
                        }
                    }
                    return string;
                } else {
                    switch (arrayFromStrNumber[i]) {
                        case '2': {
                            string += ' twenty'
                            break;
                        }
                        case '3': {
                            string += ' thirty'
                            break;
                        }
                        case '4': {
                            string += ' forty'
                            break;
                        }
                        case '5': {
                            string += ' fifty'
                            break;
                        }
                        case '6': {
                            string += ' sixty'
                            break;
                        }
                        case '7': {
                            string += ' seventy'
                            break;
                        }
                        case '8': {
                            string += ' eighty'
                            break;
                        }
                        case '9': {
                            string += ' ninety'
                            break;
                        }
                    }
                }           
            }
            //обработка разряда единиц
            if (i === 2) {
                if(arrayFromStrNumber[i] === '0') {
                    string += ""
                } else {
                    // string += transition(arrayFromStrNumber[i]);
                    switch(arrayFromStrNumber[i]) {
                        case '1': {
                            string += ' one';
                            break;
                        }
                        case '2': {
                            string += ' two';
                            break;
                        }
                        case '3': {
                            string += ' three';
                            break;
                        }
                        case '4': {
                            string += ' four';
                            break;
                        }
                        case '5': {
                            string += ' five';
                            break;
                        }
                        case '6': {
                            string += ' six';
                            break;
                        }
                        case '7': {
                            string += ' seven';
                            break;
                        }
                        case '8': {
                            string += ' eight';
                            break;
                        }
                        case '9': {
                            string += ' nine';
                            break;
                        }
                    }
                }

            }
        }
    }
    return string
}

function transition(num) {
    switch(num) {
        case '1': {
            return 'one';
        }
        case '2': {
            return 'two';
        }
        case '3': {
            return 'three';
        }
        case '4': {
            return 'four';
        }
        case '5': {
            return 'five';
        }
        case '6': {
            return 'six';
        }
        case '7': {
            return 'seven';
        }
        case '8': {
            return 'eight';
        }
        case '9': {
            return 'nine';
        }
    }
}
