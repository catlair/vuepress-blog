# 快速排序

::: tip 原理
从数组中任意选取一个元素(通常选择数组的第一个元素)作为基准,将改元素放入指定为之后,其始终大于左边的元素,始终小于右边的元素  
(1) **分解** 将原序列`a[s...t]`分解成`a[s...i-1]`和`a[i+1...t]`  
(2) **求解** 当子序列长度为0或者1时有序,直接返回,否则递归(1)  
(3) **合并** 由于整个数组在a中,排序就地进行,所以不用处理  
:::

## 程序

### 划分算法

```cpp
int partition(int a[],int s,int t)
{
	int i = s, j = t;
	int temp = a[s];	//将第一个元素作为基准
	while (i != j)	//从序列两端交替向中间扫描,直到i=j为止
	{
		//右边
		while (j > i && a[j] >= temp)
			j--;	//右->左,找到第一个小于temp的a[j]
		a[i] = a[j];
		//左边
		while (i < j && a[i] <= temp)
			i++;	//左->右,找到第一个大于temp的a[i]
		a[j] = a[i];
	}
	a[i] = temp;  //将基准移动到最终位置
	return i;
}
```

### 排序算法

```cpp
void quickSort(int a[], int s, int t)
{
	if (s < t) //存在两个及以上元素时
	{
		int i = partition(a, s, t);
		quickSort(a, s, i - 1);  //左序列递归排序
		quickSort(a, i + 1, t);  //右序列递归排序
	}
}
```

### 完整代码

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

//显示数组
void display(int a[], int n)
{
	for (int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}
	cout << endl;
}

int partition(int a[],int s,int t)
{
	int i = s, j = t;
	int temp = a[s];	//将第一个元素作为基准
	while (i != j)	//从序列两端交替向中间扫描,直到i=j为止
	{
		//右边
		while (j > i && a[j] >= temp)
			j--;	//右->左,找到第一个小于temp的a[j]
		a[i] = a[j];
		//左边
		while (i < j && a[i] <= temp)
			i++;	//左->右,找到第一个大于temp的a[i]
		a[j] = a[i];
	}
	a[i] = temp;  //将基准移动到最终位置
	return i;
}

void quickSort(int a[], int s, int t)
{
	if (s < t) //存在两个及以上元素时
	{
		int i = partition(a, s, t);
		quickSort(a, s, i - 1);  //左序列递归排序
		quickSort(a, i + 1, t);  //右序列递归排序
	}
}

int main()
{
	int a[] = { 4,6,5,3,2,1,8,7 };
	quickSort(a, 0, 7);
	display(a, 8);
	return 0;
}
```
:::

## 参数

```cpp
f(a, s, t);
```

 - `a` 数组
 - `s` 起始下标
 - `t` 结束下标

 ## 出口

 **不满足`s < t`时(即子序列长度为0或1时),不做任何事情,退出函数**
