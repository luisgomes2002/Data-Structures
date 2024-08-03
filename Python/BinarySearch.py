def binarySearch(list, item):
	low = 0
	high = len(list) - 1

	while low <= high:
		mid = (low + high) // 2
		answer = list[mid]
		if answer == item:
			return item
		if answer > item:
			high = mid -1
		elif answer < item:
			low = mid + 1
	return None

myList = [1, 3, 5,8,9,10,15,16,19,26,35]

binarySearch(myList, 15)