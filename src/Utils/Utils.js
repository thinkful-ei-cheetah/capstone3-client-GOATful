function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

export function shuffle(arr) {
  let random;

  for (let i=0; i<arr.length; i++) {
    random = Math.floor(Math.random() * arr.length);
    swap(arr, i, random);
  }
  return arr;
}

export function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}