# 斐波那契

> PS: 无参考代码

::: tip 原理
1、1、2、3、5、8、13、21、34、……  
Fn = Fn-1 + fn-2
:::

## 程序

```cpp
int fibonacci(int n)
{
	if (n == 1 || n == 2)
		return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```

也可以
```cpp
int fibonacci(int n)
{
	if (n == 0)
		return 0;
	if (n == 1)
		return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}
```


::: details 点击查看全部代码
```cpp
#include<iostream>
using namespace std;

int fibonacci(int n)
{
	if (n == 0)
		return 0;
	if (n == 1)
		return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

int main()
{
	int n = 11;
	cout << fibonacci(n);
	return 0;
}
```
:::

## 参数

```cpp
f(n);
```

 - `n` 第几个值 

 ## 出口

 **`n == 1 || n == 2`时,斐波那契数列的值都是1,所以return 1**

