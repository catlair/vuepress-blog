# 01背包(蛮力法)

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
进行$2^N$次迭代求出所有结果
将背包是否选择物品与二进制对应,0不选,1选择,$1-2^N$所有的二进制就是所有的结果
:::

## 程序

```cpp
const int N = 5;	//物品数
const int MAX_W = 10;	//背包容量

int v[N] = { 6,3,5,4,6 };	//价值
int w[N] = { 2,2,6,5,4 };	//重量

int maxv = 0;	//最大价值


void fun()
{
	//迭代所有的可能,一共2的N次个(1 << N);
	for (int i = 0; i < (1 << N); i++)
	{
		int k = i;
		int tempv = 0;  //临时价值和
		int tempw = 0;	//临时重量和
		//背包中每一项的选择
		for (int j = 0; j < N; j++)
		{
			if (k % 2 == 1)
			{
				tempv += v[j];
				tempw += w[j];
			}
			k /= 2;
		}
		if (tempw <= MAX_W && tempv > maxv)
			maxv = tempv;
	}
}
```

**下面是需要输出选取物品的代码**

::: details 点击查看
```cpp
const int N = 5;	//物品数
const int MAX_W = 10;	//背包容量

int v[N] = { 6,3,5,4,6 };	//价值
int w[N] = { 2,2,6,5,4 };	//重量

int maxv = 0;	//最大价值
int result[N] = { 0 };	//记录选取的物品

//输出选中的商品
void fun2()
{
	cout << "选中的物品: ";
	for (int i = 0; i < N; i++)
	{
		if (result[i] == 1)
		{
			cout << i + 1 << " ";
		}
	}
	cout << endl;
}

void fun()
{
	int tempr[N] = { 0 };  //临时存放选取的物品
	//迭代所有的可能,一共2的N次个(1 << N);
	for (int i = 0; i < (1 << N); i++)
	{
		int k = i;
		int tempv = 0;  //临时价值和
		int tempw = 0;	//临时重量和
		//背包中每一项的选择
		for (int j = 0; j < N; j++)
		{
			tempr[j] = 0;
			if (k % 2 == 1)
			{
				tempr[j] = 1;
				tempv += v[j];
				tempw += w[j];
			}
			k /= 2;
		}
		if (tempw <= MAX_W && tempv > maxv)
		{
			maxv = tempv;
			//保存当前最大值时所选的物品
			for (int i = 0; i < N; i++)
				result[i] = tempr[i];
		}
	}
}
```
:::

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

const int N = 5;	//物品数
const int MAX_W = 10;	//背包容量

int v[N] = { 6,3,5,4,6 };	//价值
int w[N] = { 2,2,6,5,4 };	//重量

int maxv = 0;	//最大价值
int result[N] = { 0 };	//记录选取的物品

//输出选中的商品
void fun2()
{
	cout << "选中的物品: ";
	for (int i = 0; i < N; i++)
	{
		if (result[i] == 1)
		{
			cout << i + 1 << " ";
		}
	}
	cout << endl;
}

void fun()
{
	int tempr[N] = { 0 };  //临时存放选取的物品
	//迭代所有的可能,一共2的N次个(1 << N);
	for (int i = 0; i < (1 << N); i++)
	{
		int k = i;
		int tempv = 0;  //临时价值和
		int tempw = 0;	//临时重量和
		//背包中每一项的选择
		for (int j = 0; j < N; j++)
		{
			tempr[j] = 0;
			if (k % 2 == 1)
			{
				tempr[j] = 1;
				tempv += v[j];
				tempw += w[j];
			}
			k /= 2;
		}
		if (tempw <= MAX_W && tempv > maxv)
		{
			maxv = tempv;
			//保存当前最大值时所选的物品
			for (int i = 0; i < N; i++)
				result[i] = tempr[i];
		}
	}
}


int main()
{
	fun();
	cout << "总价值" << maxv << endl;
	fun2();
	return 0;
}
```
:::

## 结果

```
总价值15
选中的物品: 1 2 5
```