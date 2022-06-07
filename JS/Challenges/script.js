function findLargestBinaryGap(num){
  let maxGap = 0;
  let arr = num.toString(2).split('1');
  for(let i = 1;  i < arr.length - 1; i++){
    if(arr[i].length > maxGap) maxGap = arr[i].length;
  }
  return maxGap;
}

function findLargestBinaryGap2(num){
  let maxGap = 0;
  let numsString = num.toString(2);

  for(let i = 0; i < numsString.length; i++){
    if(numsString.charAt(i) === '1'){
      let currentMax = 0;
      for(let j = i + 1; j < numsString.length; j++){
        
        if(numsString.charAt(j) === '1'){
          i = j;
          break;
        } 
        currentMax++;
      }
      
      if(currentMax > maxGap) maxGap = currentMax;

    }
  }

  return maxGap;
}

function removeDuplicates(nums){
  let numsDup = [];
  for (const num of nums) {
    if(!numsDup.includes(num)) numsDup.push(num)
  }
  return numsDup;
}

removeDuplicates2 = (nums) => [...new Set(nums)];

removeDuplicates3 = (nums) => nums.filter((char, index) =>  char.indexOf(c) === index)

isPangram = (sentence) => [...new Set(sentence.toLowerCase().replace(/[^a-z]/g, "").split(""))].length === 26;



console.log(findLargestBinaryGap(529));
console.log(findLargestBinaryGap2(529));
console.log(removeDuplicates([1,2,3,4,4,5]));
console.log(removeDuplicates2([1,2,3,4,4,5]));
console.log([1,2,2,3,3,3,4].indexOf(3,5));
console.log(isPangram("Five hexing wizard bots jump quickly"));