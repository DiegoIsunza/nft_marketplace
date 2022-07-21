export const makeId = (length) => {
  let result = '';

  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // All available characters
  const charactLength = characters.length;

  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactLength));
  }

  return result;
};

// 0x8ab asdsasdasdsasfhsfjsj 6ghj
// 0x8ab ... 6ghj
