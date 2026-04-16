### Q5-6[A]. $`速度制限判定と罰金計算`$

走行速度と制限速度が与えられたとき、超過状況と罰金を判定して出力せよ。
- 制限速度以下：適正走行
- 1～10km/h超過：注意
- 11～20km/h超過：罰金5000円
- 21km/h以上超過：罰金10000円

```javascript
let currentSpeed = 65;
let speedLimit = 50;

//WRITE ME!!

console.log("走行速度: " + currentSpeed + "km/h");
console.log("制限速度: " + speedLimit + "km/h");
console.log("判定: " + judgment);
```

<details><summary>入力と出力</summary>

例1
```
[in]
currentSpeed = 65
speedLimit = 50

[out]
走行速度: 65km/h
制限速度: 50km/h
判定: 11km/h超過、罰金5000円
```

例2
```
[in]
currentSpeed = 48
speedLimit = 50

[out]
走行速度: 48km/h
制限速度: 50km/h
判定: 適正走行
```
</details>

---
[次の問題へ進む](Q5_7_TaxRateJudgment.md)  
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
