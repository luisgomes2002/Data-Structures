#include <iostream>

class Node
{
public:
	Node *Preview;
	int Value;
	Node *Next;

	Node(int Value) : Preview(nullptr), Value(Value), Next(nullptr) {}
};

class LinkedList
{
public:
	Node *head;
	int size;

	LinkedList()
	{
		head = nullptr;
		size = 0;
	}

	void printList();
	void printOneNode(int index);
	void addNode(int value);
	void insertAt(Node *node, int value);
	void removeNode();
	int getSize();
	bool isEmpty();
};

void LinkedList::printOneNode(int index)
{
	if (index < 0 || index >= size || head == nullptr)
	{
		std::cout << "Error" << std::endl;
		return;
	}

	int count = 0;
	Node *current = head;

	while (count < index)
	{
		current = current->Next;
		count++;
	}

	if (current->Preview == nullptr)
		std::cout << "NULL <- ";
	else
		std::cout << current->Preview->Value << " <- ";

	std::cout << current->Value << " -> ";

	if (current->Next == nullptr)
		std::cout << "NULL\n";
	else
		std::cout << current->Next->Value << '\n';
}

void LinkedList::printList()
{
	Node *node = head;
	std::cout << "LinkedList: ";
	while (node != NULL)
	{
		std::cout << node->Value << " -> ";
		node = node->Next;
	}
	std::cout << "NULL";
}

void LinkedList::addNode(int value)
{
	Node *newNode = new Node(value);
	if (head == nullptr)
	{
		head = newNode;
	}
	else
	{
		Node *current = head;
		while (current->Next != nullptr)
		{
			current = current->Next;
		}
		current->Next = newNode;
		newNode->Preview = current;
	}
	size++;
}

void LinkedList::insertAt(Node *node, int value)
{
	Node *newNode = new Node(value);
	if (head == nullptr)
	{
		head = newNode;
	}
	else
	{
	}
	size++;
}

void LinkedList::removeNode() {}

int LinkedList::getSize()
{
	return 0;
}

bool LinkedList::isEmpty()
{
	return true;
}

int main()
{
	LinkedList linkedList;

	linkedList.addNode(2);
	linkedList.addNode(4);
	linkedList.addNode(6);
	linkedList.addNode(8);

	linkedList.printOneNode(2);

	linkedList.printList();

	return 0;
}