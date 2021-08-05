function gradYouGet(marks) {
    if (marks >= 80 && marks <= 100) {
        return ('Congratulation! Your Grad is A+.');
    } else if (marks >= 70 && marks <= 79) {
        return ('Your Grad is A.');
    } else if (marks >= 60 && marks <= 69) {
        return ('Your Grad is A-.');
    } else if (marks >= 50 && marks <= 59) {
        return ('Your Grad is B.');
    } else if (marks >= 40 && marks <= 49) {
        return ('Your Grad is C.');
    } else if (marks >= 33 && marks <= 39) {
        return ('Your Grad is D.');
    } else if (marks >= 0 && marks <= 32){
        return('Sorry! you are fail.');
    } else {
        return ('Please! enter only the number (0-100).');
    }
}

var result = gradYouGet(64);
console.log(result);