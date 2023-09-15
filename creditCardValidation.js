module.exports = (function ccNumValidator(ccNum) {
    // Reversing the card number
    let ccNumReversed = ccNum.split("").reverse().join("");

    let sumOfDigits = 0;
    let doubleUpDigit = false;

    if (ccNumReversed.length !== 16) {
        return false;
    }
    for(const element of ccNumReversed){
        let digit = parseInt(element);

        // For every second digit from rightmost
        if(doubleUpDigit) {
            digit *=2;

            //if it is two digit, obtaining single digit
            if(digit > 9)
                digit -= 9;
        }
        sumOfDigits += digit;
        doubleUpDigit = !doubleUpDigit;
    }
    const moduloOfSum = sumOfDigits % 10 === 0;
    const isValid = moduloOfSum;
    
    return isValid;
  });

  
