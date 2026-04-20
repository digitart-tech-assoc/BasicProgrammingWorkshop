### Q13-6[B]. Anka+TimeError実装

Q13[B] の Anka+ を改変し、タイムアウト機構を実装する。
- メニューの組み合わせを生成する試行回数が1000回を超えた場合、`注文可能なメニューが生成できませんでした`と出力する（タイムエラー）
- これにより、注文不可能な条件が与えられた場合の無限ループを防ぐ

```javascript
let budget = 1000;
let isChild = true;
let isAdult = true;
let isRequireMain = true;
let isRequireDessert = true;

// ここにコードを入力

console.log("注文: " + order_list);
console.log("合計: " + total_cost + "円");
```

---
[次の問題へ進む](Q13_7_Anka+ItemLimit.md)  
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
