export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  const list = {
    value: array[0],
    next: null,
  };
  let current = list;
  for (let i = 1; i < array.length; i += 1) {
    current.next = {};
    current = current.next;
    current.value = array[i];
    current.next = null;
  }
  return list;
}
