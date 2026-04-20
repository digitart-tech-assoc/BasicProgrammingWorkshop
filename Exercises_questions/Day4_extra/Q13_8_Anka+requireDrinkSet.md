### Q13-8[B]. Anka+requireDrinkSet

Q13[B] の Anka+ を改変し、`isRequireDrinkSet` というbool型の変数を追加する。
- `isChild`が`false`の場合は、セットドリンクバー（メニュー番号5101）または単品ドリンクバー（メニュー番号5103）を1つ以上注文しなければならない
- `isChild`が`true`の場合は、【キッズ】セットドリンクバー（メニュー番号5102）を1つ以上注文しなければならない
- メインのメニューを1つ以上注文する場合は単品ドリンクバーを注文してはいけない。

```javascript
let budget = 1000;
let isChild = true;
let isAdult = true;
let isRequireMain = true;
let isRequireDessert = true;
let isRequireDrinkSet = true;

// ここにコードを入力

console.log("注文: " + order_list);
console.log("合計: " + total_cost + "円");
```

<details><summary>入力と出力</summary>

```
[in] isAdult = true
[out]
注文: イタリアンハンバーグ,セットドリンクバー,プリンとティラミス クラシコの盛り合わせ
合計: 1000円

[in] isAdult = false
[out]
注文: ガーリックフォッカチオ,【キッズ】セットドリンクバー,ティラミス クラシコ
合計: 600円

[in] isAdult = true（ドリンク注文なしの場合）
[out]
ドリンクを1つ以上注文してください
```
</details>

---
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
