### Q1[A]. $`TimeConversion`$

1分間は60秒である。合計の秒数が与えられたとき、「分」と「秒」の値は以下のように求めることができる。
> $`min = \text{totalSeconds} \div 60 \text{  (整数部分)}`$  
> $`sec = \text{totalSeconds} \pmod{60} \text{ (余り)}`$

これを利用して$`135`$秒が「何分何秒」になるか計算せよ。
```javascript
let totalSeconds = 135;
let min = 0;
let sec = 0;

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