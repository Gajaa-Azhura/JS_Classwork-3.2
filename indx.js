function performOperations() {
    let string1 = document.getElementById("string1").value;
    let string2 = document.getElementById("string2").value;

    
    let concatenated = string1 + string2;
    document.getElementById("concatenated").textContent = "Concatenated String: " + concatenated;

    
    let len1 = string1.length;
    let len2 = string2.length;
    document.getElementById("length1").textContent = "Length of String 1: " + len1;
    document.getElementById("length2").textContent = "Length of String 2: " + len2;

    
    let upper = string1.toUpperCase();
    document.getElementById("uppercase").textContent = "Uppercase String 1: " + upper;

    
    let lower = string2.toLowerCase();
    document.getElementById("lowercase").textContent = "Lowercase String 2: " + lower;
}