#include <iostream>

using namespace std;

template <typename T>
class Stack
{
private:
	T *data;
	int top;
	int capacity;

public:
	Stack(int size)
	{
		capacity = size;
		data = new T[capacity];
		top = -1;
	}

	~Stack()
	{
		delete[] data;
	}

	bool isEmpty()
	{
		return top == -1;
	}

	bool isFull()
	{
		return top == capacity - 1;
	}

	void push(const T &element)
	{
		if (isFull())
		{
			std::cout << "Is Full";
			return;
		}
		data[++top] = element;
	}

	T pop()
	{
		if (isEmpty())
		{
			std::cout << "Is Empty";
			return -1;
		}
		return data[top--];
	}

	T peek()
	{
		if (isEmpty())
		{
			std::cout << "Is Empty";
			return -1;
		}
		return data[top];
	}
};

int main()
{
	Stack<int> stack(5);

	stack.push(10);
	stack.push(20);
	stack.push(30);

	cout << stack.pop() << " popped from stack\n";

	cout << "Top element is " << stack.peek() << endl;

	return 0;
}