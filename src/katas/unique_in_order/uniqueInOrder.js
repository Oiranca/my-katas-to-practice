export const uniqueInOrder = (n) => {
  let newArray = [];
  let b = "";
  for (const x of [...n]) {
    if (x !== b) {
      newArray.push(x);
      b = x;
    }
  }
  return newArray;
};
