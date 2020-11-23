# 活动安排问题

**问题描述**

假如有一个需要使用某一资源的n个活动所组成的集合$S,S = \{1 , ..., n\}$。
该资源任何时刻只能被一个活动所占用,活动i有一个开始时间$b_i$和结束时间$e_i$,其执行时间为$e_i-b_i$,
假设最早佛动执行时间为0。

一旦某一个活动开始执行,中间不能被打断,直到其执行完毕。若活动i和活动j有$b_i >= e_j$或$b_j >= e_i$,
则称两个活动兼容。

设计算法求一种最优活动安排方案,<span style="color:#008c8c;font-weight: 600;">使得所有安排的活动个数最多</span>。

![123](/images/exam/活动安排.png)

::: tip 原理
有个屁的
:::

## 程序

```cpp
#define MAX 51

//活动表示
struct Action
{
	int b;  //活动begin时间
	int e;	//活动end时间
};
#define N 4
Action A[] = { {0,0},{1,3},{2,5},{4,8},{6,10} };  //下标0不用

//结果表示
int x[MAX] = { 1,2,3,4 };  //临时解
int bestx[MAX]; //最优解
int laste = 0; //最大结束时间
int sum = 0; //兼容活动个数
int maxsum = 0; //最优解兼容活动个数

void dfs(int i)
{
	if (i > N)
	{
		if (sum > maxsum)
		{
			maxsum = sum;
			for (int k = 1; k <= N; k++)
				bestx[k] = x[k];
		}
		return;
	}
	for (int j = i; j <= N; j++)
	{
		swap(x[i], x[j]);
		int sum1 = sum;  //保存sum
		int laste1 = laste;
		if (A[x[j]].b >= laste)	//活动x[j]与前面兼容
		{
			sum++;
			laste = A[x[j]].e;
		}
		dfs(i + 1); //进入下一层
		swap(x[i], x[j]);
		sum = sum1;	//回溯
		laste = laste1;
	}
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;
#define MAX 51

//活动表示
struct Action
{
	int b;  //活动begin时间
	int e;	//活动end时间
};
#define N 4
Action A[] = { {0,0},{1,3},{2,5},{4,8},{6,10} };  //下标0不用

//结果表示
int x[MAX] = { 1,2,3,4 };  //临时解
int bestx[MAX]; //最优解
int laste = 0; //最大结束时间
int sum = 0; //兼容活动个数
int maxsum = 0; //最优解兼容活动个数

void swap(int &x,int &y)
{
	int temp = x;
	x = y;
	y = temp;
}

void dfs(int i)
{
	if (i > N)
	{
		if (sum > maxsum)
		{
			maxsum = sum;
			for (int k = 1; k <= N; k++)
				bestx[k] = x[k];
		}
		return;
	}
	for (int j = i; j <= N; j++)
	{
		swap(x[i], x[j]);
		int sum1 = sum;  //保存sum
		int laste1 = laste;
		if (A[x[j]].b >= laste)	//活动x[j]与前面兼容
		{
			sum++;
			laste = A[x[j]].e;
		}
		dfs(i + 1); //进入下一层
		swap(x[i], x[j]);
		sum = sum1;	//回溯
		laste = laste1;
	}
}

void output()
{
	cout << "最优方案" << endl;
	int laste = 0;
	for (int j = 1; j <= N; j++)
	{
		if (A[bestx[j]].b >= laste)
		{
			cout << "选取活动" << bestx[j] << ": (" << A[bestx[j]].b << ", " << A[bestx[j]].e << ")" << endl;
			laste = A[bestx[j]].e;
		}
	}
	cout << "安排活动的个数=" << maxsum;
}


int main()
{
	dfs(1);
	output();
	return 0;
}
```
:::

# 结果

本问题的最优解可能不止一个,这里只输出一个

```
最优方案
选取活动2: (2, 5)
选取活动4: (6, 10)
安排活动的个数=2
```