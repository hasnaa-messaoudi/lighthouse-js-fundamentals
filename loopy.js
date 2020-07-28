var x = 100;
let temp = "";

while (x <= 200) {
    // check divisibility
    //If the number is not divisible by 3 or 5, print the number
    if (x % 3 === 0 && x % 5 === 0) {
        temp = "LoopyLighthouse";
    }
    else if (x % 3 === 0) {
        temp = "Loopy";
    }
    else if (x % 4 === 0) {
        temp = "Lighthouse";
    }
    else {
        temp = x;
    }
    
    x = x + 1;
    
    
    console.log(temp);
}
