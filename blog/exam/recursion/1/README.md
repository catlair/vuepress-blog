# 选择排序

::: tip 原理
简单选择排序使用简单比较方法在无序区中选择最小的元素放置于开头处
:::

## 程序

```cpp
void selectSort(int a[], int n, int i)
{
	int k = i; //存放当前最小值的下标
	if (i == n - 1) return;
	//i前面的内容已经序列化,所以从i + 1开始
	for (int j = i + 1; j < n; j++) 
	{
		if (a[j] < a[k])
		{
			k = j;
		}
	}

	if (k != i)
	{
		swap(a[i], a[k]);
	}

	selectSort(a, n, ++i);
	
}
```

::: details 点击查看全部代码
```cpp
#include<iostream>
using namespace std;

//用于交换两个数
void swap(int &x,int &y)
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
void selectSort(int a[], int n, int i)
{
	int k = i; //存放当前最小值的下标
	if (i == n - 1) return;
	//i前面的内容已经序列化,所以从i + 1开始
	for (int j = i + 1; j < n; j++) 
	{
		if (a[j] < a[k])
		{
			k = j;
		}
	}

	if (k != i)
	{
		swap(a[i], a[k]);
	}

	selectSort(a, n, ++i);
	
}

int main()
{
	int a[] = { 4,6,5,3,2,1,8,7 };
	selectSort(a, 8, 0);
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
