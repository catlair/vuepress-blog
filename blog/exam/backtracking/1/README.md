# 求出符合结果为100的方案

设计一个算法在 1，2，……9(顺序不变)【P172】  
数值之间插入+或者-或者什么都不插入，  
使得计算结果总是 100 的程序。  
例如 1+2+34-5+67-8+9=100。  
输出所有的答案。  

::: tip 原理
a存放了1...9的9个数,op存放了插入的运算符,`op[i]`表示`a[i]`之前插入的运算符  
这里的例子中直接从下标1开始,所以操作的位置和a的下标是一一对应的  
:::

## 程序

```cpp
void fun(char op[],int sum,int prevadd,int a[],int i)
{
	if (i >= N) //遍历完所有数时退出
	{
		if (sum == 100) //找到解了打印出来
		{
			cout << 1;
			for (int j = 1; j < N; j++)	//j应该从1开始,因为0是被忽略掉的
			{
				if (op[j] != ' ')
					cout << op[j];	//打印符号
				cout << a[j];	//打印数字
			}
			cout << "=100" << endl;
		}
		return;
	}
	
	op[i] = '+';
	sum += a[i];
	fun(op, sum, a[i], a, i + 1); //处理下一个
	sum -= a[i];	//回溯
	
	op[i] = '-';
	sum -= a[i];
	fun(op, sum, -a[i], a, i + 1);	//处理下一个
	sum += a[i];	//回溯
	
	op[i] = ' ';
	sum -= prevadd;	//减去前一个元素(例如1+2变成1+23时要先把2减了)
	int temp;
	if (prevadd > 0)
		temp = prevadd * 10 + a[i];
	else
		temp = prevadd * 10 - a[i];
	sum += temp;
	fun(op, sum, temp, a, i + 1);
}
```

![回溯求100](/images/exam/回溯求100.png)

::: details 点击查看完整代码
```cpp
#include<iostream>
using  namespace std;

const int N = 9;

void fun(char op[],int sum,int prevadd,int a[],int i)
{
	if (i >= N) //遍历完所有数时退出
	{
		if (sum == 100) //找到解了打印出来
		{
			cout << 1;
			for (int j = 1; j < N; j++)	//j应该从1开始,因为0是被忽略掉的
			{
				if (op[j] != ' ')
					cout << op[j];	//打印符号
				cout << a[j];	//打印数字
			}
			cout << "=100" << endl;
		}
		return;
	}
	
	op[i] = '+';
	sum += a[i];
	fun(op, sum, a[i], a, i + 1); //处理下一个
	sum -= a[i];	//回溯
	
	op[i] = '-';
	sum -= a[i];
	fun(op, sum, -a[i], a, i + 1);	//处理下一个
	sum += a[i];	//回溯
	
	op[i] = ' ';
	sum -= prevadd;	//减去前一个元素(例如1+2变成1+23时要先把2减了)
	int temp;
	if (prevadd > 0)
		temp = prevadd * 10 + a[i];
	else
		temp = prevadd * 10 - a[i];
	sum += temp;
	fun(op, sum, temp, a, i + 1);
}

int main()
{
	int a[] = { 1,2,3,4,5,6,7,8,9 };
	char op[N];
	fun(op, a[0], a[0], a, 1);
	return 0;
}
```
:::

## 参数

```cpp
fun( op, sum, prevadd, a, i);
```

 - `op` 字符数组
 - `sum` 计算结果
 - `prevadd` 前一个元素
 - `a` 数组{1,2,3,4,5,6,7,8,9}
 - `i` 开始位置
 
 ## 结果
 
 ```
1+2+3-4+5+6+78+9=100
1+2+34-5+67-8+9=100
1+23-4+5+6+78-9=100
1+23-4+56+7+8+9=100
12+3+4+5-6-7+89=100
12+3-4+5+67+8+9=100
12-3-4+5-6+7+89=100
123+4-5+67-89=100
123+45-67+8-9=100
123-4-5-6-7+8-9=100
123-45-67+89=100
```