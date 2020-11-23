# 冒泡排序

::: tip 原理
冒泡排序采用交换位置的方式将无序区的最小元素放到最前面
:::

## 程序

```cpp
void bubbleSort(int a[], int n, int i)
{
	if (i == n - 1) return;  //出口
	int isSwap = 0; //判断是否发生位置交换
	for (int j = i; j < n - 1; j++)
	{
		if (a[j] > a[j + 1])
		{
			swap(a[j], a[j + 1]);
			isSwap = 1;
		}
	}
	//如果没有发生交换说明序列不需要再进行交换了
	if (isSwap)
		bubbleSort(a, n, ++i);
}
```

当然在忽略算法复杂度只做题的前提下下面代码中的判断可以去掉,不管什么情况都让他进递归  
```cpp
void bubbleSort(int a[], int n, int i)
{
	if (i == n - 1) return;  //出口
	for (int j = i; j < n - 1; j++)
	{
		if (a[j] > a[j + 1])
		{
			swap(a[j], a[j + 1]);
		}
	}
	bubbleSort(a, n, ++i);
}
```


::: details 点击查看全部代码
```cpp
#include<iostream>
using namespace std;

void swap(int &x,int &y)
{
	int temp = x;
	x = y;
	y = temp;
}

void display(int a[],int n)
{
	for (int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}
	cout << endl;
}

void bubbleSort(int a[], int n, int i)
{
	if (i == n - 1) return;  //出口
	int isSwap = 0; //判断是否发生位置交换
	for (int j = i; j < n - 1; j++)
	{
		if (a[j] > a[j + 1])
		{
			swap(a[j], a[j + 1]);
			isSwap = 1;
		}
	}
	//如果没有发生交换说明序列不需要再进行交换了
	if (isSwap)
		bubbleSort(a, n, ++i);
}

int main()
{
	int a[] = { 1,2,3,4,5,6,7,8};
	bubbleSort(a, 8, 0);
	display(a, 8);
	return 0;
}
```
:::



## 参数

```cpp
f(a, n, i);
```

 - `a` 数组
 - `n` 数组长度
 - `i` 当前遍历到的位置(遍历次数)

 ## 出口

 **`i = n - 1`时,不做任何事情,退出函数**
