# 最长公共子序列

::: tip 原理
见书上
:::

## 程序

```cpp
//结果
int dp[MAX][MAX] = { 0 };	//填表
int subs[MAX];	//选中情况

void lcs(string a,string b, int m, int n)
{
	for (int i = 1; i <= m; i++)
		for (int j = 1; j <= n; j++)
		{
			if (a[i - 1] == b[j - 1])
				dp[i][j] = dp[i - 1][j - 1] + 1;
			else
				dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);
		}
}
```

根据需求确定是否倒推子序列

```cpp
//判断b字符串被选中的情况
void getSubs(int m,int n)
{
	if (m <= 0 || n <= 0)
		return;
	if (dp[m][n] > dp[m][n - 1])
	{
		subs[n - 1] = 1;
		m--; n--;
	}
	else
		n--;
	getSubs(m, n);
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
#include<string>
using namespace std;
#define max(x ,y) (x > y ? x : y)
#define MAX 51

//结果
int dp[MAX][MAX] = { 0 };	//填表
int subs[MAX];	//选中情况

void lcs(string a,string b, int m, int n)
{
	for (int i = 1; i <= m; i++)
		for (int j = 1; j <= n; j++)
		{
			if (a[i - 1] == b[j - 1])
				dp[i][j] = dp[i - 1][j - 1] + 1;
			else
				dp[i][j] = max(dp[i][j - 1], dp[i - 1][j]);
		}
}

//判断b字符串被选中的情况
void getSubs(int m,int n)
{
	if (m <= 0 || n <= 0)
		return;
	if (dp[m][n] > dp[m][n - 1])
	{
		subs[n - 1] = 1;
		m--; n--;
	}
	else
		n--;
	getSubs(m, n);
}

int main()
{
	int m, n;
	string a, b;
	a = "abcbdb";
	b = "acbbabdbb";
	m = a.length();
	n = b.length();
	lcs(a, b, m, n);
	getSubs(m, n);
	cout << "a: " << a <<endl;
	cout << "b: " << b <<endl;
	cout << "最长子序列: ";
	for (int i = 0; i < n; i++)
		if (subs[i] == 1)
			cout << b[i];
	cout << endl;
	cout << "长度: ";
	cout << dp[m][n] << endl;
	return 0;
}
```
:::

## 结果

```
a: abcbdb
b: acbbabdbb
最长子序列: acbdb
长度: 5
```