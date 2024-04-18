function calculateCompoundInterest(principal, rate, time) {
    rate = rate / 100;

    var amount = principal * Math.pow(1 + rate, time);
    var compoundInterest = amount - principal;

    return compoundInterest;
}

var principal = 1000;
var rate = 5;
var time = 5;

var compoundInterest = calculateCompoundInterest(principal, rate, time);

console.log("Principal:", principal);
console.log("Rate:", rate);
console.log("Time (in years):", time);
console.log("Compound interest after 5 years:", compoundInterest);
