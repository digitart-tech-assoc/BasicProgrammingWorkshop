### Q1[A]. $`TimeConversion`$

1分間は60秒である。合計の秒数が与えられたとき、「分」と「秒」の値は以下のように求めることができる。
> $`min = \text{totalSeconds} \div 60 \text{  (整数部分)}`$  
> $`sec = \text{totalSeconds} \pmod{60} \text{ (余り)}`$

これを利用して$`135`$秒が「何分何秒」になるか計算せよ。

> [!NOTE]
> `Math.floor()` を用いて小数部分を切り捨てることができる。  
> ```javascript
> console.log(Math.floor(5.95));
> > 5
> ```
> ※ 「与えられた数値以下の最大の整数を返す関数」

```javascript
let totalSeconds = 135;

//WRITE ME!!

console.log(min + "分" + sec + "秒");
```

<details><summary>入力と出力</summary>

```
[in]
totalSeconds = 135

[out]
2分15秒
```
</details>

---
Congratulations!!  
現時点での演習問題は終わりです。  
次は「条件文」を学んでいきます。  
追加問題もあるよ!!
[追加問題へ](./Day1-1_extra/Q1_1_TimeToHMS.md)
[演習問題一覧に戻る](../README.md#141-条件分岐)