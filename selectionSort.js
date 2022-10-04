let start = performance.now();

function selection_sort(arr) {
    let counter = 0;
    while (counter < arr.length) { 
        shortest = arr[counter]
        position = counter
        for (let i = counter; i < arr.length; i++) { 
            if (arr[i] < shortest) {
                position = i;
                shortest = arr[i];
            }
        }
        let temp = arr[counter]
        arr[counter] = arr[position];
        arr[position] = temp;
        counter++;
    }
    return arr;
}

let end = performance.now();

console.log(`${selection_sort([33, 12, 2, 32, 0, 33, 39, 34, 12, 26])}, ${end - start} seconds`)