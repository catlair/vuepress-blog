# 整数拆分问题

**问题描述**

求将正整数n无序拆分成最大数为k的拆分方案个数,要求所有方案不重读

**问题求解**

![题目](/images/exam/整数拆分.png)

::: tip 原理
设置动态规划数组`dp`,`dp[n][k]`存放$f(n,k)$,对应程序如下

其中边界是`dp[1][j]`和`dp[j][1]`,因为此时结果为1
:::

## 程序

```cpp
void split(int n, int k)
{
	for (int i = 1; i <= n; i++)
	{
		for (int j = 1; j <= k; j++)
		{
			if (i == 1 || j == 1)
				dp[i][j] = 1;
			else if (i < j)
				dp[i][j] = dp[i][i];
			else if (i == j)
				dp[i][j] = dp[i][i - 1] + 1;
			else
				dp[i][j] = dp[i - j][j] + dp[i][j - 1];
		}
	}
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

const int MAXN = 500;
int dp[MAXN][MAXN] = { 0 };

void split(int n, int k)
{
	for (int i = 1; i <= n; i++)
	{
		for (int j = 1; j <= k; j++)
		{
			if (i == 1 || j == 1)
				dp[i][j] = 1;
			else if (i < j)
				dp[i][j] = dp[i][i];
			else if (i == j)
				dp[i][j] = dp[i][i - 1] + 1;
			else
				dp[i][j] = dp[i - j][j] + dp[i][j - 1];
		}
	}
}

int main()
{
	int n = 5, k = 2;
	split(n, k);
	cout << dp[n][k];
	return 0;
}
```
:::


## 结果

```
7
```