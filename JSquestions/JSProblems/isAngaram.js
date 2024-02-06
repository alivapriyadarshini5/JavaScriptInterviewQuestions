//Write the code given If two strings are anagrams of one another, then return true.
//Otherwise, return false.
function areAnagrams(string1, string2) {
    // Convert both strings to lowercase and remove any non-alphanumeric characters
    const cleanString1 = string1
      .toLowerCase()
      .split("")
      .filter((char) => char !== " ")
      .join("");
    const cleanString2 = string2
      .toLowerCase()
      .split("")
      .filter((char) => char !== " ")
      .join("");
  
    // Sort the characters in both strings
    const sortedString1 = cleanString1.split("").sort().join("");
    const sortedString2 = cleanString2.split("").sort().join("");
  
    // Compare the sorted strings
    return sortedString1 === sortedString2;
  }
  console.log(areAnagrams("li sten", "silent"));