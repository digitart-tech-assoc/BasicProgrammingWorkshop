### Q5-8[A]. $`複数条件による割引判定`$

商品の定価と会員区分が与えられたとき、以下の条件をすべて満たす場合にのみ「スーパーセール割引（30%割引）」を適用せよ。
- ゴールド会員である
- 定価が5000円以上である
- 条件を満たさない場合は元の価格を表示

```javascript
let price = 8000;
let memberType = "ゴールド会員";

//WRITE ME!!

console.log("割引適用: " + isDiscount);
console.log("最終価格: " + finalPrice + "円");
```

<details><summary>入力と出力</summary>

例1
```
[in]
price = 8000
memberType = "ゴールド会員"

[out]
割引適用: 有
最終価格: 5600円
```

例2
```
[in]
price = 3000
memberType = "ゴールド会員"

[out]
割引適用: 無
最終価格: 3000円
```


例3
```
[in]
price = 6000
memberType = "通常会員"

[out]
割引適用: 無
最終価格: 6000円
```
</details>

---
[次の問題へ進む](Q5_9_NestedIfGrade.md)  
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
