# 最大连续子序列值

> 求出序列中最大连续的子序列  
> 例如 { -2, 11, -4, 13, -5, -2 }  
> 解为 20 ,序列为 { 11, -4, 13}  
> 值小于0时按0算

## 程序

```cpp
int maxSubSum(int a[], int n)
{
    int maxSum = 0;
    int thisMax = 0;
    for(int j = 0; j < n; j++)
    {
        thisMax += a[j];
        if(thisMax < 0)
            thisMax = 0;
        if(thisMax > maxSum)
            maxSum = thisMax;
    }
    return maxSum;
}
```

::: details 点击查看全部代码
```cpp
#include<iostream>
using namespace std;

int maxSubSum(int a[], int n)
{
    int maxSum = 0;
    int thisMax = 0;
    for(int j = 0; j < n; j++)
    {
        thisMax += a[j];
        if(thisMax < 0)
            thisMax = 0;
        if(thisMax > maxSum)
            maxSum = thisMax;
    }
    return maxSum;
}

int main()
{
	int a[] = { -2, 11, -4, 13, -5, -2 };
	cout << maxSubSum(a, 6) << endl;
	int b[] = { -6, 2, 4, -7, 5, 3, 2, -1, 6, -9, 10, -2 };
	cout << maxSubSum(b, 12) << endl;
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

## 结果

```
{ -2, 11, -4, 13, -5, -2 } => 20
{ -6, 2, 4, -7, 5, 3, 2, -1, 6, -9, 10, -2 } => 16
```

