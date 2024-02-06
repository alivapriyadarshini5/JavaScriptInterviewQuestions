//Write the code to find the vowels

function vowels(str) {
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"];
    str.split("").map((x) => {
      if (vowel.includes(x)) {
        count += 1;
      }
    });
    return count;
  }
  console.log(vowels("hello"));