# 归并排序(自顶向下的二路归并排序)

::: tip 原理
(1) 分解: 将序列`a[low...high]`从中间分开,即计算`mid = (low + high) / 2`,分解成`a[low...mid]`和`a[mid+1...high]`

(2) 子问题求解: 递归让序列成为`1`或者`0`即可

(3) 合并: 将已经排序的子序列合并成最终的有序序列

注意: 找基准位置时从后面(右边开始)
:::

## 程序

## 自顶向下的二路归并算法

```cpp
void mergeSort(int a[],int low,int high)
{
	if (low < high)	//子序列两个以上元素
	{
		int mid = (low + high) / 2; //求中间下标
		mergeSort(a, low, mid);	//左边序列排序
		mergeSort(a, mid + 1, high); //右边序列排序
		merge(a, low, mid, high); //子序列合并
	}
}
```

## 合并算法

```cpp
void merge(int a[],int low,int mid,int high)
{
	//i代表左边子序列下标,j代表右边子序列下标,k是临时数组下标
	int i = low, j = mid + 1, k = 0;
	int* temp = new int[high - low + 1];
	while (i <= mid && j <= high) //两个表都没有扫描完时
		if (a[i] <= a[j]) //将第一个序列的放入temp
			temp[k++] = a[i++];
		else  //将第二个序列的放入temp
			temp[k++] = a[j++];
	while (i <= mid)	//将第一个序列剩下的放入
		temp[k++] = a[i++];
	while (j <= high)	//将第二个序列剩下的放入
		temp[k++] = a[j++];
	//将temp复制回a数组
	for (k = 0, i = low; i <= high; k++, i++)
		a[i] = temp[k];
	delete[] temp; //删除临时数组
}
```

## 完整代码

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

void display(int a[], int n)
{
	for (int i = 0; i < n; i++)
	{
		cout << a[i] << " ";
	}
	cout << endl;
}

void merge(int a[],int low,int mid,int high)
{
	//i代表左边子序列下标,j代表右边子序列下标,k是临时数组下标
	int i = low, j = mid + 1, k = 0;
	int* temp = new int[high - low + 1];
	while (i <= mid && j <= high) //两个表都没有扫描完时
		if (a[i] <= a[j]) //将第一个序列的放入temp
			temp[k++] = a[i++];
		else  //将第二个序列的放入temp
			temp[k++] = a[j++];
	while (i <= mid)	//将第一个序列剩下的放入
		temp[k++] = a[i++];
	while (j <= high)	//将第二个序列剩下的放入
		temp[k++] = a[j++];
	//将temp复制回a数组
	for (k = 0, i = low; i <= high; k++, i++)
		a[i] = temp[k];
	delete[] temp; //删除临时数组
}

void mergeSort(int a[],int low,int high)
{
	if (low < high)	//子序列两个以上元素
	{
		int mid = (low + high) / 2; //求中间下标
		mergeSort(a, low, mid);	//左边序列排序
		mergeSort(a, mid + 1, high); //右边序列排序
		merge(a, low, mid, high); //子序列合并
	}
}

int main()
{
	int a[] = { 2,5,1,7,10,6,9,4,3,8 };
	mergeSort(a, 0, 9);
	display(a,10);
	return 0;
}
```
:::
