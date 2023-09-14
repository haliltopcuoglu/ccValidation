module.exports = (function ccNumValidator(ccNum) {
    // Reversing the card number
    let ccNumReversed = ccNum.split("").reverse().join("");

    let sumOfDigits = 0;
    let doubleUpDigit = false;

    for(let i = 0; i < ccNum.length; i++){
        let digit = ccNumReversed[i];

        // For every second digit from rightmost
        if(doubleUpDigit) {
            digit *=2;

            //if it is two digit, obtaining single digit
            if(digit > 9)
                digit -= 9;
        }
 
    }
    const isValid = (sumOfDigits % 10 == 0);
    return isValid;
    
  });

  
