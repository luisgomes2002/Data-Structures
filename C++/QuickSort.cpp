#include <iostream>
#include <vector>

int *partition(std::vector<int> &array, int *start, int *end);
void quickSort(std::vector<int> &array, int *start, int *end);

void quickSort(std::vector<int> &array, int *start, int *end)
{
	if (end <= start)
		return;

	int *pivot = partition(array, start, end);
	quickSort(array, start, pivot - 1);
	quickSort(array, pivot + 1, end);
}

int *partition(std::vector<int> &array, int *start, int *end)
{
	int pivot = *end;
	int *i = start - 1;

	for (int *j = start; j < end; j++)
	{
		if (*j < pivot)
		{
			i++;
			int temp = *i;
			*i = *j;
			*j = temp;
		}
	}
	i++;
	int temp = *i;
	*i = *end;
	*end = temp;

	return i;
}

int main()
{
	std::vector<int> array = {8, 2, 4, 7, 1, 3, 9, 6, 5};
	quickSort(array, &array[0], &array[array.size() - 1]);

	for (int num : array)
		std::cout << num << ", ";

	return 0;
}