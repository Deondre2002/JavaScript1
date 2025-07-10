let code1 = 7 + 3;
let code2 = (100 - 20) / 2;
let code3 = 40 - (10 % 3);

let message = "The vault has been secured. The combination is:";
let codeA = code1 + "-" + code2 + "-" + code3; // added extra "-" between code2 and code3
console.log(message, codeA);

// Outputs: The vault has been secured. The combination is: 10-40-39

let codeB = `${code1}-${code2}-${code3}`;
console.log(message);
console.log(codeA);
console.log(codeB);
