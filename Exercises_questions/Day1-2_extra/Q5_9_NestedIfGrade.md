### Q5-9[A]. $`成績判定`$

学生の成績（総合点）と出席率が与えられたとき、以下の基準で最終成績を判定せよ。
1. 出席率が70%未満の場合は「XX」（成績にかかわらず）
2. 出席率が70%以上の場合：
   - 総合点が90点以上: AA
   - 総合点が80点以上90点未満: A
   - 総合点が70点以上80点未満: B
   - 総合点が60点以上70点未満: C
   - 総合点が60点未満：XX

```javascript
let totalScore = 85;
let attendanceRate = 75;

//WRITE ME!!

console.log("総合点: " + totalScore + "点");
console.log("出席率: " + attendanceRate + "%");
console.log("最終成績: " + finalGrade);
```

<details><summary>入力と出力</summary>

例1
```
[in]
totalScore = 85
attendanceRate = 75

[out]
総合点: 85点
出席率: 75%
最終成績: 良好
```

例2
```
[in]
totalScore = 95
attendanceRate = 65

[out]
総合点: 95点
出席率: 65%
最終成績: 不合格
```

例3
```
[in]
totalScore = 72
attendanceRate = 85

[out]
総合点: 72点
出席率: 85%
最終成績: 合格
```
</details>

---
[次の問題へ進む](Q5_10_ShippingCalculation.md)  
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
