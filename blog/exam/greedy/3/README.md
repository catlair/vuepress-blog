# 简单背包问题

**问题描述**

设有编号为$1,2,3,...,n$的$n$个物品,他们的重量分别为$w_1,w_
2,w_3,...,w_n$,价值分别是$v_1,v_2,v_3,...,v_n$,其中$w_i,v_i (1 <= i <= n)$均为正数.
有一个背包可以携带的最大重量不能超过$W$.

求解目标不超过最大重量的前提下,实现价值最大化.

这里简单背包与0/1背包的区别是,0/1背包只能选择或者不选择某一物品,而简单背包可以只选取物品的一部分(例如:只选取$1/2$).

::: tip 原理
使用的贪婪策略是: 选择单位重量下价值最大的物品  
单位价值$p = v / w$  
**解题步骤:**  
物品按照价值降序排列  
设背包剩余空间为$weight$  
依次判断物品是否能装入背包,并改变$weight$  
当无法放入时,将该物品的一部分放入,装入比例 = $weight$ / 当前物品价值
:::

## 程序

```cpp
#define MAXN 51
#define N 5		//物品数

double W = 100; //限重

struct NodeType
{
	double w;
	double v;
	double p;	//p = v/w
	//重写 < 符号用于比较p的大小
	bool operator < (const NodeType &s) const
	{
		return p > s.p;
	}
};

NodeType A[] = { {0,0},{10,20},{20,30},{30,66},{40,40},{50,60} };

double V = 0; //最大价值
double x[MAXN] = {0};

void knap()
{
	//求得p
	for (int i = 1; i <= N; i++)
	{
		A[i].p = A[i].v / A[i].w;
	}
	//排序(使用algorithm库)
	sort(A + 1, A + N + 1);
	double weight = W;	//剩余重量
	int i = 1;
	while (A[i].w < weight)
	{
		x[i] = 1;
		weight -= A[i].w;
		V += A[i].v;
		i++;
	}
	if (weight > 0)		//余下重量大于0
	{
		x[i] = weight / A[i].w;	//x[i]不为1,而是部分(小数)
		V += x[i] * A[i].v;		//累计重量
	}
}
```

::: details 点击查看完整代码
```cpp
#include <algorithm>
#include<iostream>
using namespace std;

#define MAXN 51
#define N 5		//物品数

double W = 100; //限重

struct NodeType
{
	double w;
	double v;
	double p;	//p = v/w
	//重写 < 符号用于比较p的大小
	bool operator < (const NodeType &s) const
	{
		return p > s.p;
	}
};

NodeType A[] = { {0,0},{10,20},{20,30},{30,66},{40,40},{50,60} };

double V = 0; //最大价值
double x[MAXN] = {0};

void knap()
{
	//求得p
	for (int i = 1; i <= N; i++)
	{
		A[i].p = A[i].v / A[i].w;
	}
	//排序(使用algorithm库)
	sort(A + 1, A + N + 1);
	double weight = W;	//剩余重量
	int i = 1;
	while (A[i].w < weight)
	{
		x[i] = 1;
		weight -= A[i].w;
		V += A[i].v;
		i++;
	}
	if (weight > 0)		//余下重量大于0
	{
		x[i] = weight / A[i].w;	//x[i]不为1,而是部分(小数)
		V += x[i] * A[i].v;		//累计重量
	}
}

int main()
{
	knap();
	cout << "x: [";
	for (int i = 1; i < N; i++)
	{
		cout << x[i] << ", ";
	}
	cout << x[N] << "]" << endl;
	cout << "总价值:" <<  V;
	return 0;
}
```
:::

## 结果

```
x: [1, 1, 1, 0.8, 0]
总价值:164
```