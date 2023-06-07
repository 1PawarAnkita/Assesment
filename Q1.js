var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

function findDuplicates(arr1, arr2) {
  var duplicates = [];
  
  // Check each element in arr1
  for (var i = 0; i < arr1.length; i++) 
  {
    var word = arr1[i];
    
    // Check if the word exists in arr2
    if (arr2.includes(word)) {
      duplicates.push(word);
    }
  }
  
  return duplicates;
}

var duplicateValues = findDuplicates(fullWordList, wordsToRemove);
console.log('Duplicate values:', duplicateValues);
