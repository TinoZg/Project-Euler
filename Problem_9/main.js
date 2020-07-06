let b = 2;
let notFinished = true;
while(notFinished) {
    for(let a = 1; a < b; a++) {
        let c = pythagorean(a, b);
        if (c > 0) {
            console.log(c);
            notFinished = false;
            break;
        }
    }
    b++;
}

function pythagorean(a, b) {
    let c =  a * a +  b * b;
    if (Math.floor(Math.sqrt(c)) == Math.sqrt(c) && a + b + Math.sqrt(c) == 1000) {
        return a * b * Math.sqrt(c); 
    }
    return 0;
}


