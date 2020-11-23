# 应找零钱

顾客在超市购买物品一共消费 x 元【任意输入 x 的值，x 的值在 1 到 100 之间，并且是整数】。

支付的纸币为 100 元，计算超市收银员应找回顾客多少钱？【告知前提所有的纸币数量充足下，纸币包含面额是 100 元、50 元、20 元、5 元、1 元】

::: tip 原理
优先找大的金额,先把面额逆序`[50, 20, 5, 1]`
:::

## 程序

```cpp
#define N 4		//零钱的面额种类

int m[N] = { 50, 20, 5, 1 };		//纸币(不包括100的零钱)金额倒序
int n[N] = { 0 };	//记录每种钱的说找数量

void fun(int price)
{
	int money = 100 - price;	//应找零钱
	cout << "应找零钱" << money << endl;
	for (int j = 0; j < N; j++)		//4种面额优先大的
		while (money >= m[j])	//该面额不满足条件时换取小一点的
		{
			money -= m[j];	//需找零钱变小
			n[j] += 1;	//该零钱找零+1
		}
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

#define N 4		//零钱的面额种类

int m[N] = { 50, 20, 5, 1 };		//纸币(不包括100的零钱)金额倒序
int n[N] = { 0 };	//记录每种钱的说找数量

void fun(int price)
{
	int money = 100 - price;	//应找零钱
	cout << "应找零钱" << money << endl;
	for (int j = 0; j < N; j++)		//4种面额优先大的
		while (money >= m[j])	//该面额不满足条件时换取小一点的
		{
			money -= m[j];	//需找零钱变小
			n[j] += 1;	//该零钱找零+1
		}
}

void output()
{
	cout << "找零如下:" << endl;
	for (int i = 0; i < N; i++)
		if (n[i] > 0)
			cout << "\t" << m[i] << "元" << n[i] << "张\n";
}

int main()
{
	int p;
	cout << "请输消费额【1-100】之间" << endl;
	cin >> p;
	fun(p);
	output();
	return 0;
}
```
:::
