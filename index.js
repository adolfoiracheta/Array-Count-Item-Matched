//you are given an array items, where each items[i] = [typei, colori, namei] describes the 
//type, color, and name of the ith item. You are also given a rule represented by two strings, 
//ruleKey and ruleValue.

//the ith item is said to match the rule if one of the following is true:

//ruleKey == "type" and ruleValue == typei.
//ruleKey == "color" and ruleValue == colori.
//ruleKey == "name" and ruleValue == namei.
//return the number of items that match the given rule.


//given an array of items and they are describing the product type, color and name
//create a function that counts the matching types in the array by using ruleKey and rule ruleValue
//want my output to print the number of matches


//Example 1:

//input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
//output: 1
//explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

const items = [
    ["phone", "blue", "pixel"],
    ["computer", "silver", "lenovo"],
    ["phone", "gold", "iphone"]
  ],
  ruleKey = "color",
  ruleValue = "gold"
  
var countMatches = function(items, ruleKey, ruleValue) {

let counter = 0
for (let i = 0; i < items.length; i++) {
  if (ruleKey === 'type') {
    if (ruleValue === items[i][0]) {
    counter++    }
  }

  else if (ruleKey === 'color') {
    if (ruleValue === items[i][1]) {
    counter++
    }
  }
  else {
    if (ruleValue === items[i][2]) {
    counter++
    }
  }
}
return counter  
};

console.log(countMatches(items, ruleKey, ruleValue))





