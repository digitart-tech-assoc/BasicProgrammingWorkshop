### Q5-7[A]. $`商品カテゴリーと価格帯による税率判定`$

商品の種類と金額が与えられたとき、適用される税率を判定して元の価格と税金、税込み価格を出力せよ。
- 食品：8%（軽減税率）
- その他：10%

```javascript
let productType = "衣類";
let price = 5000;

//WRITE ME!!

console.log("商品: " + productType);
console.log("元の価格: " + price + "円");
console.log("税率: " + taxRate + "%");
console.log("税込み価格: " + totalPrice + "円");
```

<details><summary>入力と出力</summary>

例1
```
[in]
productType = "衣類"
price = 5000

[out]
商品: 衣類
元の価格: 5000円
税率: 10%
税込み価格: 5500円
```

例2
```
[in]
productType = "食品"
price = 10000

[out]
商品: 食品
元の価格: 10000円
税率: 8%
税込み価格: 10800円
```
</details>

---
[次の問題へ進む](Q5_8_MultiConditionDiscount.md)  
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
