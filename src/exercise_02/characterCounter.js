export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  if (string === null || string === undefined) {
    return 0;
  }
  if (prediction === undefined) {
    return string.length;
  }
  let length = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (prediction(string[i])) {
      length += 1;
    }
  }
  return length;
}
