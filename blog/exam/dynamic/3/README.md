# 背包问题(动态规划)

有 $n$ 个重量分别是 $w_1,w_2....,w_n$ 的物品（物品编号为 $1-n$）

它们的价值分别为 $v_1,v_2,...,v_n$

给定一个容量为 $W$ 的背包。设计从这些物品中选取一部分放入该背包的方案。

每个物品要么选中要么不选中【其实每个物品只有 1 件】，

要求选中的物品不仅能够放在背包中，而且具有最大的价值。

并对如下所展示的 5 个物品求出 $W=10$ 时的最佳解。

| 物品编号 | 重量 | 价值 |
|:------:|:-----:|:---:|
| 1   | 2 |6|
| 2 | 2 | 3|
|  3 | 6  | 5  |
|  4 |  5 | 4  |
|  5 | 4  | 6  |


::: tip 原理
???
:::

## 程序

```cpp
void knap()
{
	int i, j;
	for ( i = 0; i <= N; i++) //容量为0
		dp[i][0] = 0;
	for ( j = 0; j <= MAX_W; j++)	//物品为0
		dp[0][j] = 0;
	for (i = 0; i <= N; i++) //物品
		for (j = 0; j <= MAX_W; j++)	//容量
			if (w[i] > j)
				dp[i][j] = dp[i - 1][j];
			else
				dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
}
```

**倒推**

```cpp
int S[N] = { 0 };

//倒推
void getSelected(int c,int n)
{
	if (n <= 0 || c <= 0)
		return;
	if (dp[n][c] > dp[n-1][c]) //被选中
	{
		S[n - 1] = 1;	//选中
		c -= w[n - 1]; //容量变小
	}
	getSelected(c, --n); //前一个物品
}
```

::: details 点击查看完整代码
```cpp
#include <algorithm>
#include<iostream>
using namespace std;

const int N = 5;	//物品数
const int MAX_W = 10;	//背包容量

int v[N + 1] = { 0, 6,3,5,4,6 };	//价值
int w[N + 1] = { 0, 2,2,6,5,4 };	//重量

int dp[N + 1][MAX_W + 1] = { 0 }; //价值数组

int maxv = 0;

void knap()
{
	int i, j;
	for ( i = 0; i <= N; i++) //容量为0
		dp[i][0] = 0;
	for ( j = 0; j <= MAX_W; j++)	//物品为0
		dp[0][j] = 0;
	for (i = 0; i <= N; i++) //物品
		for (j = 0; j <= MAX_W; j++)	//容量
			if (w[i] > j)
				dp[i][j] = dp[i - 1][j];
			else
				dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
}

int S[N] = { 0 };

//倒推
void getSelected(int c,int n)
{
	if (n <= 0 || c <= 0)
		return;
	if (dp[n][c] > dp[n-1][c]) //被选中
	{
		S[n - 1] = 1;	//选中
		c -= w[n - 1]; //容量变小
	}
	getSelected(c, --n); //前一个物品
}

int main()
{
	knap();
	for (int i = 0; i < N+1; i++)
	{
		for (int j = 0; j < MAX_W+1; j++)
		{
			cout << dp[i][j] << "\t";
		}
		cout << endl;
	}
	getSelected(MAX_W, N);
	cout << "选中物品: ";
	for (int i = 0; i < N; i++)
		if (S[i] == 1)
		{
			cout << i + 1 << " ";
			maxv += v[i + 1];
		}
	cout << endl;
	cout << "总价值 = " << maxv;
	return 0;
}
```
:::

 
 ## 结果

```
0       0       0       0       0       0       0       0       0       0       0
0       0       6       6       6       6       6       6       6       6       6
0       0       6       6       9       9       9       9       9       9       9
0       0       6       6       9       9       9       9       11      11      14
0       0       6       6       9       9       9       10      11      13      14
0       0       6       6       9       9       12      12      15      15      15
选中物品: 1 2 5
总价值 = 15
```