// Function with missing semicolon and undefined parameters
function test(a, b) {
    return a * b // Missing semicolon
}
console.log('testing', test(a, b)) // 'a' and 'b' are undefined here

// A correct function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function with an intentional error: variable 'a' is misspelled as 'aa'
function multiplyNumbers(a, b) {
    // Intentional error: 'aa' is not defined, should be 'a'
    return aa * b; 
}

// Additional lint error examples:

// Missing semicolon, inconsistent spacing, and unnecessary console usage
function calculateSum(a, b) {
    var sum = a + b // Missing semicolon
    console.log("The sum is: " + sum) // Console statement might be flagged in production
    return sum
}
calculateSum(5, 10)

// Using == instead of ===, which can lead to unexpected behavior
function badComparison(x, y) {
    if (x == y) {  // Use strict equality (===) instead
        return true;
    }
    return false;
}
badComparison(5, '5');

// Unused variable 'c'
function unusedVariableExample() {
    let a = 10;
    let b = 20;
    let c = a + b; // 'c' is defined but never used
}
unusedVariableExample();

// Duplicate declaration of variable 'x'
function duplicateDeclaration() {
    let x = 5;
    let x = 10; // Duplicate declaration error
    return x;
}
duplicateDeclaration();

// Inconsistent indentation and spacing
function inconsistentIndentation(){
   if(true){
     console.log("Inconsistent indentation");
   }
}
