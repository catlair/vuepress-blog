# 查找最大值和次大值

::: tip 原理
对于无序序列`a[low...high]`  
(1) 若只有一个元素或只有两个元素,直接可判断出最大值和次大值  
(2) 大于两个值求出中间值`mid = (low + high) / 2`,将序列分成两个序列,分别求出左右序列的最大值和次大值,然后对4个值进行合并求出最大值和次大值
:::

## 程序

```cpp
void solve(int a[], int low, int high,int &max1,int &max2)
{
	if (low == high) //只有一个元素
	{
		max1 = a[low];
		max2 = a[low];
	}
	else if (low == high - 1) //有两个元素
	{
		max1 = max(a[low], a[high]);
		max2 = min(a[low], a[high]);
	}
	else
	{
		int mid = (high + low) / 2;
		//左区间最大值和次大值
		int lmax1, lmax2;
		solve(a, low, mid, lmax1, lmax2);
		//右区间最大值和次大值
		int rmax1, rmax2;
		solve(a, mid + 1, high, rmax1, rmax2);
		//合并最大值和次大值
		if (lmax1 > rmax1)
		{
			max1 = lmax1;
			max2 = max(lmax2, rmax1);  //剩下的中求次大值
		}
		else
		{
			max1 = rmax1;
			max2 = max(rmax2, lmax1);
		}
	}
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

int max(int x,int y)
{
	return x > y ? x : y;
}

int min(int x,int y)
{
	return x < y ? x : y;
}

void solve(int a[], int low, int high,int &max1,int &max2)
{
	if (low == high) //只有一个元素
	{
		max1 = a[low];
		max2 = a[low];
	}
	else if (low == high - 1) //有两个元素
	{
		max1 = max(a[low], a[high]);
		max2 = min(a[low], a[high]);
	}
	else
	{
		int mid = (high + low) / 2;
		//左区间最大值和次大值
		int lmax1, lmax2;
		solve(a, low, mid, lmax1, lmax2);
		//右区间最大值和次大值
		int rmax1, rmax2;
		solve(a, mid + 1, high, rmax1, rmax2);
		//合并最大值和次大值
		if (lmax1 > rmax1)
		{
			max1 = lmax1;
			max2 = max(lmax2, rmax1);  //剩下的中求次大值
		}
		else
		{
			max1 = rmax1;
			max2 = max(rmax2, lmax1);
		}
	}
}

int main()
{
	int max1 = 0;
	int max2 = 0;
	int a[] = { 1,54,13,657,2,34,67,89 };
	solve(a, 0, 7, max1, max2);
	cout << "最大值" << max1 << endl;
	cout << "次大值" << max2 << endl;
	return 0;
}
```
:::

## 参数

```cpp
f(a, low, high, max1, max2)
```

 - `a` 数组
 - `low` 左范围
 - `high` 右范围
 - `max1` 最大值的引用
 - `max2` 次大值的引用

 ## 出口

**只有一个元素或者两个元素时可以直接判定最大值和次大值**
