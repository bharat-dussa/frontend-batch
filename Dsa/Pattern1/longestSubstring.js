function longestSubstring(s) {
  let left = 0,
    maxLen = 0;
  const seen = new Map();
  let startIndex = 0;
  let result = [];
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (seen.has(char) && seen.get(char) >= left) {
      left = seen.get(char) + 1;
      result.push(char);
    }

    seen.set(char, right);
    // Why we are using maxLen?
    // Because we want to store the longest substring length
    const windowSize = right - left + 1;
    maxLen = Math.max(maxLen, windowSize);
    if (windowSize > maxLen) {
      console.log("left", left, "right", right);
      startIndex = left;
    }

    // console.log("maxLen", maxLen,'diff', right - left + 1 ,'right', right,'left', left, 'seen', seen,);
  }
  console.log("startIndex", startIndex, maxLen);
  return s.substring(startIndex, startIndex + maxLen);
}


function longestUniqueSubstring1(s) {
    let left = 0, maxLen = 0;
    const seen = new Map();
    
    for (let right = 0; right < s.length; right++) {
      if (seen.has(s[right]) && seen.get(s[right]) >= left)
        left = seen.get(s[right]) + 1;
      seen.set(s[right], right);
      maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
  }

  
console.log("longestSubstring", longestUniqueSubstring1("dabcabcbbde"));
