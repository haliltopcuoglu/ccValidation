  /**
     * Credit Card Number Validation using Luhn Algorithm.
     * 
     * *-*-*-*-*-* Luhn Algorithm *-*-*-*-*-*
     * 
     * 1. Starting from the end of the card number 
     *  double the value of every second digit
     * 
     * 2. Subtracting 9 from any digit that is greater than 9
     * 
     * 3. Taking sum of all the digits
     * 
     * 4. If the modulo of the sum equal to 0 then the number is valid.

    */

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

  