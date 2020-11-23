# 斐波那契数列

::: tip 原理
递归算法会出现重复算某一位的情况,将斐波那契存放在数组中可以避免重复
:::

## 程序

```cpp
int db[100];

int fibonacci(int n)
{
    //忽略dp[0],这样下标和n能够进行对应
    //(当然0开始也行,只是需要返回dp[n-1])
	dp[1] = 1;	//第一项
	dp[2] = 1;	//第二项
    //需要取到n
	for (int i = 3; i <= n; i++)
	{
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

int dp[100];

int fibonacci(int n)
{
    //忽略dp[0],这样下标和n能够进行对应
	dp[1] = 1;	//第一项
	dp[2] = 1;	//第二项
    //需要取到n
	for (int i = 3; i <= n; i++)
	{
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n];  //下标0开始,所以-1
}

int main()
{
	cout << fibonacci(11);
	return 0;
}
```
:::

## 参数

```cpp
f(n);
```

 - `n` 第几个数