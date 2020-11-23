# 女排对阵表(循环日程安排表)

<style lang="scss">
.indent{
    text-indent: 2em;
}
</style>

<div class="indent">
<p>
2019 年女排世界杯，一共 12 个队伍进行比赛，比赛形式是：单循环赛制。也就是每个队伍之间进行有且仅有一场比赛，编写程序，输入k个队伍，输出对应的对阵表
</p>
<p>例如 k 等于 4，表示 4 个队伍。单循环赛的赛程如下。</p>
</div>

| 队伍 | 第一天对手   | 第2天对手  | 第三天对手  |
| :-------: |:------:| :-----:|:-------:|
| 1    | 2 | 3 | 4|
| 2      | 1      |   4 |   3|
| 3 | 4     |    1 |    2|
| 4 | 3      |    2 |   1|

**注:** 无法满足题目的条件输入k获取赛程表,因为该算法的参赛人数必须$2^n(n > 1)$这样人数,不能随便输入k,按照书中参考题的解法与此处问题描述不符  
如果k值满足要求,也可以求sqrt(k)然后传入函数(这样得到的就是k个选手了)

::: tip 原理
划分问题：将$n=2^k$个运动员划分为两组$n=2^{k−1}$个运动员。  
迭代求解：迭代填充$n=2^{k−1}$个运动员的日程表，填充方式见下面。  
合并问题：填充数组操作不需要合并。  
:::

<img src="https://pic4.zhimg.com/80/v2-d62630c236c42c30507720e7f6be42cb_720w.jpg" title="原理" alt="原理">

## 程序

**对程序的中的变量解释**

- `n` 参赛人数`n = 1 << k`或者说$n = 2^k$
- `k` $2^k$就是参赛选手数n
- `temp` 临时变量,随每次迭代而变化,代表$2^{k-1}$(也就是参赛选手的一半)

```cpp
void plan(int k)
{
	int n, temp;
	n = 2;	//n从2个选手开始
	//只有两个选手时的日程安排
	a[1][1] = 1; a[1][2] = 2;
	a[2][1] = 2; a[2][2] = 1;
	//依次处理到2**k个选手
	for (int t = 1; t < k; t++)
	{
		temp = n; //2,4,8...以此类推(2的t次方)
		n = n * 2; //4,8,16...以此类推(2的t+1次方)

		//求左下角
		for (int i = temp + 1; i <= n; i++)
			for (int j = 1; j <= temp; j++)
				a[i][j] = a[i - temp][j] + temp;

		//求右上角
		for (int i = 1; i <= temp; i++)
			for (int j = temp + 1; j <= n; j++)
				a[i][j] = a[i + temp][(j + temp) % n];   //j除了(j+temp) % n 也可以写成j - temp;

		//求右下角
		for (int i = temp + 1; i <= n; i++)
			for (int j = temp + 1; j <= n; j++)
				a[i][j] = a[i - temp][j - temp];
	}		
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;
const int MAX = 100;

//求解结果二维数组
int a[MAX][MAX];

void plan(int k)
{
	int n, temp;
	n = 2;	//n从2个选手开始
	//只有两个选手时的日程安排
	a[1][1] = 1; a[1][2] = 2;
	a[2][1] = 2; a[2][2] = 1;
	//依次处理到2**k个选手
	for (int t = 1; t < k; t++)
	{
		temp = n; //2,4,8...以此类推(2的t次方)
		n = n * 2; //4,8,16...以此类推(2的t+1次方)

		//求左下角
		for (int i = temp + 1; i <= n; i++)
			for (int j = 1; j <= temp; j++)
				a[i][j] = a[i - temp][j] + temp;

		//求右上角
		for (int i = 1; i <= temp; i++)
			for (int j = temp + 1; j <= n; j++)
				a[i][j] = a[i + temp][(j + temp) % n];      //j除了(j+temp) % n 也可以写成j - temp;

		//求右下角
		for (int i = temp + 1; i <= n; i++)
			for (int j = temp + 1; j <= n; j++)
				a[i][j] = a[i - temp][j - temp];
	}		
}

int main()
{
	int k = 3;
	int n = 1 << k;
	plan(k);
	for (int i = 1; i <= n; i++)
	{
		for (int j = 1; j <= n; j++)
		{
			cout << a[i][j] << "\t";
		}
		cout << endl;
	}
	return 0;
}
```
:::

## 参数

```cpp
f(k);
```

 - `k` $2^k$代表选手数

## 结果

**参数**: `k = 2`

```
1  2  3  4
2  1  4  3
3  4  1  2
4  3  2  1
```