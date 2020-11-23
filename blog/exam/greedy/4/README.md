# 活动安排

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
#define N 4			//活动数量

struct Action
{
	int b;	//开始时间
	int e;	//结束时间
	//重写<符号,用于排序
	bool operator < (const Action &s) const
	{
		return e <= s.e;
	}
};

Action A[] = { {0,0},{1,3},{2,5},{4,8},{6,10} };  //下标0不用

int flag[MAX] = { 0 };	//标记选择的活动
int num = 0;	//选取兼容活动的个数

void solve()
{
	//使用算法库排序
	sort(A + 1, A + N + 1);		//结束时间递增排序
	int preend = 0;		//前一个活动的结束时间
	for (int i = 1; i <= N; i++)
	{
		if (A[i].b >= preend)	//满足兼容条件
		{
			flag[i] = 1;
			preend = A[i].e;
		}
	}
}
```

::: details 点击查看完整代码
```cpp
#include <algorithm>
#include<iostream>
using namespace std;

#define MAX 51
#define N 4			//活动数量

struct Action
{
	int b;	//开始时间
	int e;	//结束时间
	//重写<符号,用于排序
	bool operator < (const Action &s) const
	{
		return e <= s.e;
	}
};

Action A[] = { {0,0},{1,3},{2,5},{4,8},{6,10} };  //下标0不用

int flag[MAX] = { 0 };	//标记选择的活动
int num = 0;	//选取兼容活动的个数

void solve()
{
	//使用算法库排序
	sort(A + 1, A + N + 1);		//结束时间递增排序
	int preend = 0;		//前一个活动的结束时间
	for (int i = 1; i <= N; i++)
	{
		if (A[i].b >= preend)	//满足兼容条件
		{
			flag[i] = 1;
			preend = A[i].e;
		}
	}
}

void output()
{
	cout << "最优方案" << endl;
	for (int j = 1; j <= N; j++)
	{
		if (flag[j] == 1)
		{
			cout << "选取活动" << j << ": [" << A[j].b << ", " << A[j].e << ")" << endl;
			num++;
		}
	}
	cout << "安排活动的个数=" << num;
}

int main()
{
	solve();
	output();
	return 0;
}
```
:::

## 结果

```
最优方案
选取活动1: [1, 3)
选取活动3: [4, 8)
安排活动的个数=2
```