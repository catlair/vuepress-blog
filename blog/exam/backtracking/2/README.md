# 背包问题(回溯法)

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

:::

## 程序

```cpp
// i 物品下标
void dfs(int i,int tv,int tw)
{
	if (i >= N)
	{
		if (tw <= MAXW && tv > maxv)
		{
			maxv = tv;
			for (int i = 0; i < N; i++)
				bestresult[i] = result[i];  //保存最优解
		}
		return;
	}
	result[i] = 1; //放
	dfs(i + 1, tv + v[i], tw + w[i]);

	result[i] = 0; //不放
	dfs(i + 1,tv,tw);
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

const int N = 5;	//物品数
const int MAXW = 10;	//背包容量

int v[] = { 6,3,5,4,6 };	//价值
int w[] = { 2,2,6,5,4 };	//重量

int result[N] = { 0 };//临时解
int bestresult[N] = { 0 };//最优解


int maxv = 0;	//最大价值

void output(int result[])
{
	for (int i = 0; i < N; i++)
	{
		cout << result[i] << " ";
	}
	cout << endl;
}

//i 物品下标
void dfs(int i,int tv,int tw)
{
	if (i >= N)
	{
		if (tw <= MAXW && tv > maxv)
		{
			maxv = tv;
			for (int i = 0; i < N; i++)
				bestresult[i] = result[i];  //保存最优解
		}
		return;
	}
	result[i] = 1;	//放
	dfs(i + 1, tv + v[i], tw + w[i]);

	result[i] = 0;	//不放
	dfs(i + 1,tv,tw);
}

int main()
{
	dfs(0,0,0);
	output(bestresult);
	cout << maxv;
	return 0;
}
```
:::

**另一种思路**

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

const int N = 5;	//物品数
const int MAXW = 10;	//背包容量

int v[] = { 6,3,5,4,6 };	//价值
int w[] = { 2,2,6,5,4 };	//重量

int result[N] = { 0 };//临时解
int bestresult[N] = { 0 };//最优解


int maxv = 0;	//最大价值

void output(int result[])
{
	for (int i = 0; i < N; i++)
	{
		cout << result[i] << " ";
	}
	cout << endl;
}

int getWeight(int result[])
{
	int totalWeight = 0;
	for (int i = 0; i < N; i++)
	{
		totalWeight += result[i] * w[i];
	}
	return totalWeight;
}


int getValue(int result[])
{
	int totalValue = 0;
	for (int i = 0; i < N; i++)
	{
		totalValue += result[i] * v[i];
	}
	return totalValue;
}

void saveResult(int result[],int bestresult[])
{
	for (int i = 0; i < N; i++)
	{
		bestresult[i] = result[i];
	}
}

//i 物品下标
void dfs(int i)
{
	if (i >= N)
	{
		if (getWeight(result) <= MAXW)
		{
			if (getValue(result) > getValue(bestresult))
			{
				saveResult(result, bestresult);
			}
		}
		return;
	}
	result[i] = 1; //不放
	dfs(i + 1);

	result[i] = 0; //放
	dfs(i + 1);
}

int main()
{
	dfs(0);
	output(bestresult);
	return 0;
}
```
:::

 
 ## 结果

```
总价值15
选中的物品: 1 2 5
```