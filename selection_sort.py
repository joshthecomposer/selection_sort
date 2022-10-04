import time

start = time.time()
def selection_sort(arr):
    count = 0
    while count < len(arr):
        shortest = arr[count]
        position = count
        for i in range(count, len(arr)):
            if arr[i] < shortest:
                shortest = arr[i]
                position = i
        arr[count], arr[position] = arr[position], arr[count]
        count += 1
    return arr

print(selection_sort([33, 12, 2, 32, 0, 33, 39, 34, 12, 26]))

end = time.time()

total_time = end - start

print(f"Time to calculate was: {str(total_time)}")