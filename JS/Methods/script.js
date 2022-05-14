
let foo = 4;
let bar = 4.46731;
let foobar = "4";

foobar = parseInt(foobar);
foo = foo.toString();
bar = bar.toFixed(1);

console.log(foobar + "\n" + foo + "\n" + bar); 
console.log(typeof foobar);
console.log(typeof foo);
console.log(typeof bar);


let sentence = "I am learning javascript in tg";
console.log(sentence.indexOf("tg"));
sentence += " the end";
sentence = sentence.slice(0, -3).trim();
sentence = sentence.split(" ");

console.log(sentence);


let trash = [1, "bag", "bottle", "paper", true];
trash.pop();
trash.push(true);

let filteredTrash = trash.filter(t => t==="bag"|| t==="bottle");
let filteredTrash2 = trash.slice(1,3);

console.log(filteredTrash);
console.log(filteredTrash2);

let totallyTrash = trash.concat(filteredTrash);
console.log(totallyTrash);

