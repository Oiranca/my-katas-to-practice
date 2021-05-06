export const countTheDuplicates = (text) => {
  const order = [...text.toLowerCase()].sort();
  const characterRepeated = [];
  order.forEach((character, index) => {
    if (
      !characterRepeated.includes(character) &&
      character === order[index + 1]
    ) {
      characterRepeated.push(character);
    }
  });
  return characterRepeated.length;
};
