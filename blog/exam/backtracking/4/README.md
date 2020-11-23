# 迷宫问题

有一个8*8的迷宫如下

```
O	X	X	X	X	X	X	X
O	O	O	O	O	X	X	X
X	O	X	X	O	O	O	X
X	O	X	X	O	X	X	O
X	O	X	X	X	X	X	X
X	O	X	X	O	O	O	X
X	O	O	O	O	X	O	O
X	X	X	X	X	X	X	O
```

其中，O表示通路方块，X表示障碍方块。  
假设入口位置是$（0,0）$，出口位置为右下角方块位置是$（7,7）$。  
设计一个程序求指定入口到出口的一条迷宫路径。  

::: tip 原理
有个屁的
:::

## 程序

```cpp
void visit(int i,int j)
{
	if (i < 0 || j < 0)
		return;
	if (i == mx2 && j == my2)
	{
		m[mx2][my2] = 1;
		output();
	}
	int temp = m[i][j]; //保存当前值

	m[i][j] = 1;  //1表示走过
	if (m[i][j + 1] == 0)   //右边可通过
		visit(i, j + 1);
	if (m[i][j - 1] == 0)   //左边可通过
		visit(i, j - 1);
	if (m[i + 1][j] == 0)   //下面可通过
		visit(i + 1, j);
	if (m[i - 1][j] == 0)   //上面可通过
		visit(i - 1, j);
	   
	m[i][j] = temp; //回溯
}
```

::: details 点击查看完整代码
```cpp
#include<iostream>
using namespace std;

#define ROW 8
#define COL 8

int m[ROW][COL] = {
	{0,2,2,2,2,2,2,2},
	{0,0,0,0,0,2,2,2},
	{2,0,2,2,0,0,0,2},
	{2,0,2,2,0,2,2,0},
	{2,0,2,2,2,2,2,2},
	{2,0,2,2,0,0,0,2},
	{2,0,0,0,0,2,0,0},
	{2,2,2,2,2,2,2,0}
};

int mx2 = 7, my2 = 7;

void output()
{
	for (int i = 0; i < ROW; i++)
	{
		for (int j = 0; j < COL; j++)
		{
			if (m[i][j] == 2)
				cout << "X";
			else if (m[i][j] == 1)
				cout << " ";
			else
				cout << "O";
		}
		cout << endl;
	}
	cout << endl;
}

void visit(int i,int j)
{
	if (i < 0 || j < 0)
		return;
	if (i == mx2 && j == my2)
	{
		m[mx2][my2] = 1;
		output();
	}
	int temp = m[i][j]; //保存当前值
	m[i][j] = 1;  //1表示走过
	if (m[i][j + 1] == 0)
		visit(i, j + 1);
	if (m[i][j - 1] == 0)
		visit(i, j - 1);
	if (m[i - 1][j] == 0)
		visit(i - 1, j);
	if (m[i + 1][j] == 0)
		visit(i + 1, j);
	   
	m[i][j] = temp; //回溯
}

int main()
{
	visit(0, 0);
	return 0;
}
```
:::

## 结果

```
 XXXXXXX
  OOOXXX
X XXOOOX
X XXOXXO
X XXXXXX
X XX   X
X    X
XXXXXXX
```