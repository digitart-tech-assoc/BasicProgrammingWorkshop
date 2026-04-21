### Q20[B][Day4]. $`Anka+requireDrinkSet`$

Q13[B] の Anka+ を改変し、`isRequireDrinkSet` というbool型の変数を追加する。
- `isChild`が`false`の場合は、セットドリンクバー（メニュー番号5101）または単品ドリンクバー（メニュー番号5103）を1つ以上注文しなければならない
- `isChild`が`true`の場合は、【キッズ】セットドリンクバー（メニュー番号5102）を1つ以上注文しなければならない
- メインのメニューを1つ以上注文する場合は単品ドリンクバーを注文してはいけない。

```javascript
let budget = 1000;
let tolerance = 20;
let isChild = true;
let isAdult = true;
let isRequireDrinkSet = true;

// ここにコードを入力

console.log("注文: " + order_list);
console.log("合計: " + total_cost + "円");
```

---
[答え](../Exercises_answers/Day4/Q20[B][Day4]_Anka+requireDrinkSet.js)

Congratulations!!  
本日の演習問題はこれで終わりです。  
追加問題もあるよ!!
[追加問題へ](./Day4_extra/Q20_1_StepCounter.md)  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
