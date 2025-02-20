function passwordValidator(password) {
    let digitCounter = 0
    let isSymbol = false;

    let passArr = password.split('');
    for (const char of passArr) {
        let charNum = char.charCodeAt();

        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isCapitalLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitCounter++
        }
        if (!isDigit && !isSmallLetter && !isCapitalLetter) {
            isSymbol = true;
        }
    }
    if (passArr.length < 6 || passArr.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    }
    if (digitCounter >= 2 && !isSymbol && (passArr.length >= 6 && passArr.length <= 10)) {
        console.log('Password is valid');
    }
}
passwordValidator('logIn');
console.log('--------------------------------');
passwordValidator('MyPass123');
console.log('--------------------------------');
passwordValidator('Pa$s$s');