### Q16[B]. $`StepCounter`$ - 歩数管理・目標達成判定

あなたは毎日の歩数を記録している。$`1`$ 週間（$`7`$ 日間）の歩数データが与えられたとき、次の3つを計算する関数を作成しなさい。

1. **週間平均歩数を計算する** `calculateAverage(dailySteps)`
2. **目標達成日数をカウントする** `countAchievement(dailySteps, target)`
3. **最高歩数の日のインデックスを取得する** `findMaxDay(dailySteps)`

これらの関数を使用して、ユーザーの歩数管理アプリを実装しなさい。

```javascript
// 関数を定義してください
// function calculateAverage(dailySteps) { ... }
// function countAchievement(dailySteps, target) { ... }
// function findMaxDay(dailySteps) { ... }

// 例
let dailySteps = [8500, 9200, 7100, 10500, 6800, 11200, 9000];
let targetSteps = 8000;

let average = calculateAverage(dailySteps);
let achievementDays = countAchievement(dailySteps, targetSteps);
let maxDayIndex = findMaxDay(dailySteps);

console.log("週間平均: " + average + "歩");
console.log("目標達成日数: " + achievementDays + "日");
console.log("最高歩数の日: " + (maxDayIndex + 1) + "日目（" + dailySteps[maxDayIndex] + "歩）");
```

<details><summary>入力と出力</summary>

**入出力例1**
```
[in]
dailySteps = [8500, 9200, 7100, 10500, 6800, 11200, 9000]
targetSteps = 8000

[out]
週間平均: 8914歩
目標達成日数: 5日
最高歩数の日: 6日目（11200歩）
```

**入出力例2**
```
[in]
dailySteps = [5000, 6500, 4800, 7200, 5900, 6100, 5500]
targetSteps = 6000

[out]
週間平均: 5871歩
目標達成日数: 3日
最高歩数の日: 4日目（7200歩）
```

**入出力例3**
```
[in]
dailySteps = [12000, 11500, 13000, 12500, 11800, 12200, 12800]
targetSteps = 11000

[out]
週間平均: 12242歩
目標達成日数: 7日
最高歩数の日: 3日目（13000歩）
```

</details>

---
[次の問題へ進む](Q17[B][Day4]_AliveDays.md)  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
