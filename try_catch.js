//Complete the isPositive function below. It has one integer parameter, . If the value of  is positive, it must return the string YES. 
//Otherwise, it must throw an Error according to the following rules:

//If  is , throw an Error with  Zero Error.
//If  is negative, throw an Error with  Negative Error.
function isPositive(a) {
    try {
        if (a < 0) return "Negative Error";
        if (a == 0) return "Zero Error";
        if (a > 0) return "YES";
    }
    //Better solution:
    // function isPositive(a) {
    //     if (a == 0)
    //         throw Error('Zero Error');
    //     if (a < 0)
    //         throw Error('Negative Error');

    //     return 'YES';
    // }