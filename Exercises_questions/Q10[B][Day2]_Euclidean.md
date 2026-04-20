### Q10[B]. $`Euclidean`$

2 つの正の整数 $A$ と $B$ が与えられたとき、ユークリッドの互除法を用いて 最大公約数（GCD） を求めよ。

ユークリッドの互除法の手順:

- $A$ を $B$ で割った余りを求める。
- 余りが 0 ならば $B$ が最大公約数となる。
- 余りが 0 でない場合、 $A$ を $B$ に、 $B$ を余りに置き換え、1 に戻る。

```javascript
let A = 56;
let B = 98;

// ここにコードを入力

console.log("最大公約数: " + gcd);
```

<details><summary>入力と出力</summary>

入出力例1
```
[in]
A = 56
B = 98

[out]
最大公約数: 14
```

入出力例2
```
[in]
A = 48
B = 18

[out]
最大公約数: 6
```

入出力例3
```
[in]
A = 101
B = 103

[out]
最大公約数: 1
```

</details>

---
[答え](../Exercises_answers/Day2/Q10[B][Day2]_Euclidean.js)

Congratulations!!  
本日の演習問題はこれで終わりです。  
追加問題もあるよ!!
[追加問題へ](./Day2_extra/Q10_1_FactorialCalculation_.md)  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
