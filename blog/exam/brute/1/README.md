# 选择排序

::: tip 原理
简单选择排序使用简单比较方法在无序区中选择最小的元素放置于开头处(`a[i]`)
:::

## 程序

```cpp
void selectSort(int a[], int n)
{
	for (int i = 0; i < n; i++)
	{
		int k = i; //存放当前最小值的下标
		for (int j = i + 1; j < n; j++)
		{
			if (a[j] < a[k] )
				k = j;
		}
		if (k != i)  //需要交换
			swap(a[i], a[k]);
	}
}
```

::: details 点击查看全部代码
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
void selectSort(int a[], int n)
{
	for (int i = 0; i < n; i++)
	{
		int k = i; //存放当前最小值的下标
		for (int j = i + 1; j < n; j++)
		{
			if (a[j] < a[k] )
				k = j;
		}
		if (k != i)
			swap(a[i], a[k]);
	}
}

int main()
{
	int a[] = { 4,6,5,3,2,1,8,7 };
	selectSort(a, 8);
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

## 结果

```
1 2 3 4 5 6 7 8
```

