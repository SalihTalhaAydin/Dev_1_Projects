
function printRecipe(title, servings, ingredients){
    console.log(title);
    console.log("Serves: " + servings);
    console.log("Ingredients:");
    for(var ingredient of ingredients){
        console.log(ingredient);
    }
}

function printBook(book){
  console.log(book[0] +  " by " + book[1]);
  console.log(book[2] 
    ? "\'You already read the \"" + book[0] + "\" by " + book[1] + "\'"
    : "\'You still need to read the \"" + book[0] + "\" by " + book[1] + "\'");
}

function printChoices(choices){
    for(var i = 1; i <= choices.length;i++){
       if(i % 10 == 1) console.log("My 1st choice is " + choices[i - 1]);
       else if(i % 10 == 2) console.log("My 2nd choice is " + choices[i - 1]);
       else if(i % 10 == 3) console.log("My 3rd choice is " + choices[i-1]);
       else console.log("My " + i + "th choice is " + choices[i-1]);
    }
}

//practicing this version of creating a function
var getBiggerNum = function(num1, num2){
    return Math.max(num1, num2);
}

var helloWorld  = function(langCode){
    switch(langCode){
        case "en": return "Hello world";
        case "de": return "Hallo Welt";
        case "tr": return "Merhaba dünya";
        case "es": return "Hola Mundo";
        case "ja": return "こんにちは世界 (Kon'nichiwa sekai)";
        default: throw 'Parameter is not a language code!!!';
    }
}

function assignGrade(score){
    if(score <= 100 && score >= 0){
        if( score <= 100 && score >= 80) return "A+";
        else if(score >= 70) return "A";
        else if(score >= 60) return "A-";
        else if(score >= 50) return "B";
        else if(score >= 40) return "C";
        else if(score >= 33) return "D";
        return "F";
    }
    throw "Invalid score!"
}

function pluralizeThat(noun, amount){

    if (amount > 0 && typeof noun === "string"){
        if (amount === 1) return amount + " " + noun;
        switch(noun.toLowerCase().trim() && amount > 1){
            case "goose": return amount + " geese";
            case "sheep": return amount + " sheep";
            case "leaf": return amount + " leaves";
            case "life": return amount + " lives";
            case "knife": return amount + " knives";
            default: return  amount + " "  + noun + "s";
        }
    }
    throw "This noun has an exception or the amount is not correct!!!";
}

var tellFortune  = function(numberOfChildren, partnerName, geographicLocation, jobTitle){
    console.log("You will be a " + jobTitle + " in " + geographicLocation + ", and married to " + partnerName + " with " + numberOfChildren + " kids.");
}

function calculateDogAge(){
}


console.log("");
console.log("Task 1");
printRecipe("Mole", 2, ["cinnamon", "cumin", "cocoa"]);

console.log("");
console.log("Task 2");
//creating array just for practicing
var book = new Array("The Hobbit", "J.R.R. Tolkien", true);
printBook(book);

console.log("");
console.log("Task 3");
printChoices(["blue", "chicken", "potato", "java script", "hola"]);

console.log("");
console.log("Task 4");
var num1 = 11, num2 = 10;
console.log("The greater number of "+num1+" and "+num2+" is "+getBiggerNum(num1, num2)+".")

console.log("");
console.log("Task 5");
console.log(helloWorld("ja"));
console.log(helloWorld("en"));
console.log(helloWorld("de"));
//console.log(helloWorld("")); throws an exception

console.log("");
console.log("Task 6");
console.log(assignGrade(100));
console.log(assignGrade(79));
console.log(assignGrade(69));
console.log(assignGrade(59));
console.log(assignGrade(49));
console.log(assignGrade(33));
console.log(assignGrade(20));

console.log("");
console.log("Task 7");
console.log(pluralizeThat("cat", 1));
console.log(pluralizeThat("cat", 5));
console.log(pluralizeThat("goose", 1));
console.log(pluralizeThat("goose", 4));

console.log("");
console.log("Task 8");
tellFortune(82, "round chicken", "mars", "hair collector");

console.log("");
console.log("Task 9");