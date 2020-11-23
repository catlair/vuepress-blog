# 全排列

::: tip 介绍
下面程序是求M个数中取N个数进行排列有多少种可能,当M=N时称之为全排列(也就是这个题目的解)  
实际这个是1,2,3,4...这样的数列进行排列,不是实际的对一个数列进行求解,但是老师给的代码就这样,为了考试,就记住这个代码吧  
:::

## 程序

```cpp
void fun(int pos)
{
	if (pos > N)
	{
		output(); //输出一组解
		num++;
		return;
	}
	for (int i = 1; i <= M; i++)
		if (!isIn(i,pos-1)) //不重复才取下一个
		{
			result[pos] = i;
			fun(pos + 1); //下一个
		}
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

//M个数中取N个,这里M=N
const int M = 3;
const int N = 3;

int result[N + 1] = { 0 }; //解:保存时从下标1开始
int num = 0; //解的个数

//输出当前数列
void output()
{
	for (int i = 1; i <= N; i++)
		cout << result[i];
	cout << endl;
}

//判断x是否在数组result[1...pos]中
bool isIn(int x,int pos)
{
	for (int i = 1; i <= pos; i++)
		if (result[i] == x)
			return true;
	return false;
}

void fun(int pos)
{
	if (pos > N)
	{
		output(); //输出一组解
		num++;
		return;
	}
	for (int i = 1; i <= M; i++)
		if (!isIn(i,pos-1)) //不重复才取下一个
		{
			result[pos] = i;
			fun(pos + 1); //下一个
		}
}

int main()
{
	fun(1); //从第一个开始
	cout << num;
	return 0;
}
```
:::


## 参数

```cpp
f(pos);
```

 - `pos` 从M中取出的第几个

## 结果

```
123
132
213
231
312
321
6
```

