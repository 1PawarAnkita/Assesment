const word = '00000111110101001111100001001';

function longestChain(word) 
{
  let currentChain = 0;
  let longestChain = 0;

  for (let i = 0; i < word.length; i++) 
  {
    if (word[i] === '1') 
    {
      currentChain++;
    } else 
    {
      if (currentChain > longestChain) 
      {
        longestChain = currentChain;
      }
      currentChain = 0;
    }
  }

  return longestChain;
}

console.log('Longest chain:', longestChain(word));
