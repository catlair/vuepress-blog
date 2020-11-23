# 柠檬水找零

> PS: 无参考代码

**问题描述**

在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。

你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

示例 1：  
输入：`[5,5,5,10,20]`  
输出：`true`  

示例 2：  
输入：`[10,10]`  
输出：`false`  

::: tip 原理
尽可能先给金额大的,不行再给5元的
:::

## 程序

```cpp
//n是bills长度
bool fun(int bills[],int n)
{
	int fiveCount = 0, tenCount = 0; //分别统计5元,10元的数量
	for (int i = 0; i < n; i++)
	{
		if (bills[i] == 5)	//顾客给的5元
		{
			fiveCount += 1;
		}
		else if (bills[i] == 10)	//顾客给10元
		{
			if (fiveCount > 0)		//没有零钱
			{
				fiveCount--;
				tenCount++;
			}
			else
				return false;
		}
		else   //顾客给20元
		{
			if (fiveCount > 0 && tenCount > 0)	//两种钱都有
			{
				fiveCount--;
				tenCount--;
			}
			else if (fiveCount > 2)	//尝试全部使用5元找零
			{
				fiveCount -= 3;
			}
			else  //零钱不够	
				return false;
		}
	}
	return true;
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

//n是bills长度
bool fun(int bills[],int n)
{
	int fiveCount = 0, tenCount = 0; //分别统计5元,10元的数量
	for (int i = 0; i < n; i++)
	{
		if (bills[i] == 5)	//顾客给的5元
		{
			fiveCount += 1;
		}
		else if (bills[i] == 10)	//顾客给10元
		{
			if (fiveCount > 0)		//没有零钱
			{
				fiveCount--;
				tenCount++;
			}
			else
				return false;
		}
		else   //顾客给20元
		{
			if (fiveCount > 0 && tenCount > 0)	//两种钱都有
			{
				fiveCount--;
				tenCount--;
			}
			else if (fiveCount > 2)	//尝试全部使用5元找零
			{
				fiveCount -= 3;
			}
			else  //零钱不够	
				return false;
		}
	}
	return true;
}

int main()
{
	int bills[] = { 5, 5, 5, 10, 20 };
	//boolalpha是将fun()的值输出为bool,而不是输出1,0
	cout << boolalpha << fun(bills,5) << endl;
	return 0;
}
```
:::

## 结果

示例 1：  
输入：`[5,5,5,10,20]`  
输出：`true`  

示例 2：  
输入：`[10,10]`  
输出：`false`  