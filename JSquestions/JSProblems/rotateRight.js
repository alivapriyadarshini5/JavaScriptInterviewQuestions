//Implement a function that returns an updated array with r right rotations on an array of integers a.
function rotateArrayRight(a, r) {
    const n = a.length;
    const rotations = r % n;
    const rotatedArray = [
      ...a.slice(n - rotations),
      ...a.slice(0, n - rotations),
    ];
    return rotatedArray;
  }
  console.log(rotateArrayRight([1, 2, 3, 4, 5, 6], 2));