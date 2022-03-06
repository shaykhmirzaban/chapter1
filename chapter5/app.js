// CHAPTER 5
// *********
// MATH EXPRESSIONS
// ****************
// 1
// *
let n1 = + prompt("Enter first number");
let n2 = + prompt("Enter second number");
let sum = n1 + n2;
document.write("Sum of " + n1 + " and " + n2 + " is " + sum + "<br> <br>");
// 2
// *
// subtraction
// ***********
let s1 = + prompt("Enter first number");
let s2 = + prompt("Enter second number");
let sum1 = s1 - s2;
document.write("subtraction of " + s1 + " and " + s2 + " is " + sum1 + "<br> <br>");
// multiplication
// **************
let m1 = + prompt("Enter first number");
let m2 = + prompt("Enter second number");
let sum2 = m1 * m2;
document.write("multiplication of " + m1 + " and " + m2 + " is " + sum2 + "<br> <br>");
// division
// **************
let d1 = + prompt("Enter first number");
let d2 = + prompt("Enter second number");
let sum3 = d1 / d2;
document.write("division of " + d1 + " and " + d2 + " is " + sum3 + "<br> <br>");
// modulus
// **************
let o1 = + prompt("Enter first number");
let o2 = + prompt("Enter second number");
let sum4 = o1 % o2;
document.write("modulus of " + o1 + " and " + o2 + " is " + sum4 + "<br> <br>");

// 3
// *
let a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a += 7;
document.write("Value after addition is: " + a + "<br>");
--a;
document.write("Value after decrement is: " + a + "<br>");
a = a % 2;
document.write("The remainder is: " + a + "<br> <br>");

// 4
// *
let Cost = 600;
let quantity = 5;
let cal = Cost * quantity;
document.write("Total cost to buy " + quantity + " tickets to a movie is " + cal + "PKR" + "<br> <br>");

// 5
// *
document.write("Table of 4" + "<br>");
let table = 4;
let multi = "X";
let equalToSign = "=";
document.write(table + multi + "1" + equalToSign + 4 + "<br>");
document.write(table + multi + "2" + equalToSign + 8 + "<br>");
document.write(table + multi + "3" + equalToSign + 12 + "<br>");
document.write(table + multi + "4" + equalToSign + 16 + "<br>");
document.write(table + multi + "5" + equalToSign + 20 + "<br>");
document.write(table + multi + "6" + equalToSign + 24 + "<br>");
document.write(table + multi + "7" + equalToSign + 28 + "<br>");
document.write(table + multi + "8" + equalToSign + 32 + "<br>");
document.write(table + multi + "9" + equalToSign + 36 + "<br>");
document.write(table + multi + "10" + equalToSign + 40 + "<br>");
document.write("<br><br>")
// 6
// *
let Celsius = 20;
let findFahrenheit = (Celsius * 9 / 5) + 32;
document.write(Celsius + "C is " + findFahrenheit + "F" + "<br>");
let Fahrenheit = 68;
let findCelsius = (Fahrenheit - 32)* 5 / 9;
document.write(Fahrenheit + "F is " + findCelsius + "C" + "<br>");