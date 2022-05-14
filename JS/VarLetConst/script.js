// const statuses = [
//   { code: "OK", response: "Request successful" },
//   { code: "FAILED", response: "There was an error with your request" },
//   { code: "PENDING", response: "Your reqeust is still pending" },
// ];

// let message = "";
// const currentCode = "OK";

// for (let i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//     console.log(message);
//   }
// }

// let device_id = 25;
// let guid = 654321;
// const data = "{device_id : " + device_id + " , " + "guid:" + guid + "}";
// const data2 = `{device_id : ${device_id} , guid:${guid}}`;

// console.log(data + "\n" + data2);

// const getExamples = () => {
//   return fetch("https://example.com/")
//     .then((response) => response.json())
//     .then((response) => response.data)
//     .then((data) => console.log(data));
// };



function join(initalColors, exoticColor) {
  return initalColors.concat(exoticColor);
}

function join2(initalColors, exoticColor) {
  return [...initalColors, ...exoticColor];
}



join3 = (initalColors, exoticColor) => [...initalColors, ...exoticColor];



const initalColors = ["white", "black", "gray"];
const exoticColor = ["purple", "orange", "green"];
console.log(join(initalColors, exoticColor));
console.log(join2(initalColors, exoticColor));
console.log(join3(initalColors, exoticColor));


function average(...nums) {
    let sum = 0;
    nums.forEach(num => sum += num);
   //  for(let i = 0; i < nums.length; i++) sum += nums[i];
    return sum / nums.length;
}

function average2() {
   let sum = 0;
   for(let i = 0; i < arguments.length; i++) sum += arguments[i];
   return sum / arguments.length;
}
console.log(average(1, 2, 3, 4, 5));
console.log(average2(1, 2, 3, 4, 5));