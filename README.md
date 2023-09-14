# Credit Card Validator
- Credit Card Number Validation using Luhn Algorithm.
- Luhn Algorithm 
     
    1. Starting from the end of the card number 
      double the value of every second digit
     
    2. Subtracting 9 from any digit that is greater than 9
      
    3. Taking sum of all the digits
     
    4. If the modulo of the sum equal to 0 then the number is valid.

# Installation
```
npm install cc-validation
```

# Usage

```js
var ccValidation = require("creditCardValidation");
var isValid = console.log(ccValidation.ccNumValidator("4111111111111111"));
```
