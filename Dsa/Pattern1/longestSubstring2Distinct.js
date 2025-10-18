function longestSubstring2Distinct(s) {
  let left = 0,
    maxLen = 0;
  const seen = new Map();

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    seen.set(char, (seen.get(char) || 0) + 1);

    while (seen.size > 2) {
      const leftChar = s[left];
      seen.set(leftChar, seen.get(leftChar) - 1);
      if (seen.get(leftChar) === 0) {
        seen.delete(leftChar);
      }
      left++;
    }

    const windowLen = right - left + 1;
    if (windowLen > maxLen) {
      maxLen = windowLen;
      startIndex = left;
    }
  }

  const end = startIndex + maxLen;

  return s.substring(startIndex, end);
}

console.log("longestSubstring2Distinct", longestSubstring2Distinct("ecebbaa"));
