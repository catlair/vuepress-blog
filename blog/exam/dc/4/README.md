# 折半查找

::: tip 原理
折半查找又名二分查找,查找的数列需要有序,为了简单假设他是递增的有序序列  
**基本思路:** 假设查找区间是`a[low...high]`,先确定中间位置`mid = (low + high) / 2`; ;然后比较待查找值`k`和`a[mid].key`  
(1) 若等于直接返回下标  
(2) 若小于则说明需要查找的值在`mid`左边  
(3) 若大于则说明需要查找的值在`mid`右边  
:::

## 程序

```cpp
int binSearch(int a[], int low, int high, int k)
{
	if (low <= high)
	{
		int mid = (low + high) / 2;
		if (a[mid] == k)  //相等时返回坐标
			return mid;
		if (a[mid] > k)
		{
			//搜索左边
			binSearch(a, low, mid - 1, k);
		}
		else
		{
			//搜索右边
			binSearch(a, mid + 1, high, k);
		}
	}
	else return -1; //没找到
}
```

::: details 点击查看全部代码
```cpp
#include<iostream>
using namespace std;

int binSearch(int a[], int low, int high, int k)
{
	if (low <= high)
	{
		int mid = (low + high) / 2;
		if (a[mid] == k)  //相等时返回坐标
			return mid;
		if (a[mid] > k)
		{
			//搜索左边
			binSearch(a, low, mid - 1, k);
		}
		else
		{
			//搜索右边
			binSearch(a, mid + 1, high, k);
		}
	}
	else return -1; //没找到
}

int main()
{
	int a[] = { 4,6,8,12,17,25,38,49,51 };
	cout << binSearch(a, 0, 8, 49);
	return 0;
}
```
:::

## 参数

```cpp
f(a, low, high, k);
```

 - `a` 数组
 - `low` 左范围
 - `high` 右范围
 - `k` 需要查找的元素


