#include <iostream>
#include <vector>

int main()
{
	int target = 50;
	std::vector<int> array(1000001);

	for (int i = 0; i <= 1000000; i++)
		array[i] = i;

	int *low = &array[0];
	int *high = &array[array.size() - 1];

	while (low <= high)
	{
		int *mid = low + (high - low) / 2;
		int anw = *mid;

		if (anw == target)
			return 0;
		if (anw > target)
			high = mid - 1;
		else
			low = mid + 1;
	}

	return -1;
}