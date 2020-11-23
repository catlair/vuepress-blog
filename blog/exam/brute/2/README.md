# 冒泡排序

::: tip 原理
冒泡排序采用交换位置的方式将无序区的最小元素放到最前面
:::

## 程序

```cpp
void bubbleSort(int a[], int n)
{
	for (int i = 0; i < n; i++)  //多轮冒泡
		for (int j = 0; j < n - 1 - i; j++) //一轮冒泡
			if (a[j] > a[j + 1])
				swap(a[j], a[j + 1]);
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

//用于交换两个数
void swap(int& x, int& y)
{
	int temp = x;
	x = y;
	y = temp;
}

//显示数组
void display(int a[], int n)
{
	for (int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}
	cout << endl;
}

//排序函数
void bubbleSort(int a[], int n)
{
	for (int i = 0; i < n; i++)  //多轮冒泡
		for (int j = 0; j < n - 1 - i; j++) //一轮冒泡
			if (a[j] > a[j + 1])
				swap(a[j], a[j + 1]);
}

int main()
{
	int a[] = { 4,6,5,3,2,1,8,7 };
	bubbleSort(a, 8);
	display(a, 8);
	return 0;
}
```
:::

## 参数

```cpp
f(a, n);
```

 - `a` 数组
 - `n` 数组长度