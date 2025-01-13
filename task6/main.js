//Q1
//let num=prompt("Enter the number: ")
// console.log(num);


//Q2
//let num=prompt("Enter the number: ")
// if(num%3==0 && num %4==0)
//     console.log("yes");
// else
//     console.log("No");


//Q3
// let num3 = parseInt(prompt("Enter first number:"));
// let num4 = parseInt(prompt("Enter second number:"));
// if(num3>num4)
//     console.log(num3);
// else
//     console.log(num4);


//Q4
// let num5 = parseInt(prompt("Enter a number:"));
// if (num5 < 0) {
//     console.log(" negative");
// } else {
//     console.log(" positive");
// }


//Q5
// let a = parseInt(prompt("Enter first number:"));
// let b = parseInt(prompt("Enter second number:"));
// let c = parseInt(prompt("Enter third number:"));
// let max, min;
// if (a >= b && a >= c) {
//     max = a;
// } else if (b >= a && b >= c) {
//     max = b;
// } else {
//     max = c;
// }
// console.log("max element =",max);
// if (a <= b && a <= c) {
//     min = a;
// } else if (b <= a && b <= c) {
//     min = b;
// } else {
//     min = c;
// }
// console.log("min element =",min);


//Q6
// let num6 = parseInt(prompt("Enter a number:"));
// if (num6 % 2 === 0) {
//     console.log(" even");
// } else {
//     console.log(" odd");
// }


//Q7
// let char = prompt("Enter a character:").toLowerCase();
// if ("aeiou".includes(char)) {
//     console.log(" vowel");
// } else {
//     console.log(" consonant");
// }


//Q8
// let num7 = parseInt(prompt("Enter a number:"));
// for (let i = 1; i <= num7; i++) {
//     console.log(i);
// }


//Q9
// let num8 = parseInt(prompt("Enter a number:"));
// for (let i = 1; i <= 12; i++) {
//     console.log( num8 * i);
// }


//Q10
// let num9 = parseInt(prompt("Enter a number:"));
// for (let i = 2; i <= num9; i += 2) {
//     console.log(i);
// }


//Q11
// let base = parseInt(prompt("Enter the base:"));
// let exponent = parseInt(prompt("Enter the exponent:"));
// let result = 1;
// for (let i = 0; i <exponent; i++) {
//     result*=base;
// }
// console.log( result);


//Q12
// let marks = [];
// let total=0;
// for (let i = 0; i < 5; i++) {
//     marks.push(parseInt(prompt(`Enter marks for subject ${i + 1}:`)));
//     total+=marks[i];
// } 
// let average = total / 5;
// let percentage = (total / 500) * 100;
// console.log("Total marks =", total);
// console.log("Average marks =", average);
// console.log("Percentage =", percentage);


//Q13
// let month = parseInt(prompt("Enter month number:"));
// if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
//     console.log("Days in Month: 31");
// } else if ([4, 6, 9, 11].includes(month)) {
//     console.log("Days in Month: 30");
// } else if (month === 2) {
//     console.log("Days in Month: 28 or 29 (leap year)");
// } else {
//     console.log("Invalid month number");
// }


//Q14
// let subject = ["Physics", "Chemistry", "Biology", "Mathematics", "Computer"];
// let grades = [];
// let totalMarks=0;
// for (let i = 0; i < 5; i++) {
//     totalMarks+=parseInt(prompt(`Enter marks for ${subject[i]}:`))
// }
// let percent = (totalMarks / 500) * 100;
// console.log("Percentage =", percent);
// if (percent >= 90) console.log("Grade A");
// else if (percent >= 80) console.log("Grade B");
// else if (percent >= 70) console.log("Grade C");
// else if (percent >= 60) console.log("Grade D");
// else if (percent >= 40) console.log("Grade E");
// else console.log("Grade F");


//Q15
// let monthNumber = parseInt(prompt("Enter month number:"));
// switch (monthNumber) {
//     case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//         console.log("Days in Month: 31");
//         break;
//     case 4: case 6: case 9: case 11:
//         console.log("Days in Month: 30");
//         break;
//     case 2:
//         console.log("Days in Month: 28 or 29 (leap year)");
//         break;
//     default:
//         console.log("Invalid month number");
// }


//Q16
// let alphabet = prompt("Enter a character:").toLowerCase();
// switch (alphabet) {
//     case 'a': case 'e': case 'i': case 'o': case 'u':
//         console.log(" vowel");
//         break;
//     default:
//         console.log(" consonant");
// }


//Q17
// let number1 = parseInt(prompt("Enter first number:"));
// let number2 = parseInt(prompt("Enter second number:"));
// switch (true) {
//     case number1 > number2:
//         console.log("Maximum number is:", number1);
//         break;
//     case number2 > number1:
//         console.log("Maximum number is:", number2);
//         break;
//     default:
//         console.log("Both numbers are equal");
// }


//Q18
// let numberToCheck = parseInt(prompt("Enter a number:"));
// switch (numberToCheck % 2) {
//     case 0:
//         console.log(" even");
//         break;
//     default:
//         console.log(" odd");
// }


//Q19
// let numberToEvaluate = parseInt(prompt("Enter a number:"));
// switch (true) {
//     case numberToEvaluate > 0:
//         console.log(" positive");
//         break;
//     case numberToEvaluate < 0:
//         console.log(" negative");
//         break;
//     default:
//         console.log(" zero");
// }


//Q20
// let num1 = parseFloat(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = parseFloat(prompt("Enter second number:"));
// switch (operator) {
//     case '+':
//         console.log("Result:", num1 + num2);
//         break;
//     case '-':
//         console.log("Result:", num1 - num2);
//         break;
//     case '*':
//         console.log("Result:", num1 * num2);
//         break;
//     case '/':
//         if (num2 !== 0) {
//             console.log("Result:", num1 / num2);
//         } else {
//             console.log("Error: Division by zero");
//         }
//         break;
//     default:
//         console.log("Invalid operator");
// }







