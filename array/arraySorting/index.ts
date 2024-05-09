function moveZerosType(array: any[]): any[] {
  array.sort((a, b) => {
    if (a === 0 && b !== 0) {
      return 1;
    } else if (a !== 0 && b === 0) {
      return -1;
    } else {
      return 0;
    }
  });

  return array;
}

let movedArray = moveZerosType([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
console.log(movedArray);
