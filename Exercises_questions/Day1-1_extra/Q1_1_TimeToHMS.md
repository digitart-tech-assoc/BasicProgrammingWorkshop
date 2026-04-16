### Q1-1[A]. $`秒を時分秒に変換`$

合計の秒数が与えられたとき、「時」「分」「秒」の値を求めよ。
- 1時間は3600秒
- 1分は60秒

以下の計算ロジックを参考にせよ：
> $`hour = \text{totalSeconds} \div 3600 \text{ (整数部分)}`$  
> $`remainingSeconds = \text{totalSeconds} \pmod{3600}`$  
> $`min = \text{remainingSeconds} \div 60 \text{ (整数部分)}`$  
> $`sec = \text{remainingSeconds} \pmod{60}`$

```javascript
let totalSeconds = 3665;

//WRITE ME!!

console.log(hour + "時" + min + "分" + sec + "秒");
```

<details><summary>入力と出力</summary>

```
[in]
totalSeconds = 3665

[out]
1時1分5秒
```
</details>
