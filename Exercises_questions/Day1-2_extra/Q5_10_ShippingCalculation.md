### Q5-10[A]. $`配送料金計算`$

商品の合計金額、配送先の地域、および配送方法が与えられたとき、配送料金を計算して最終金額を出力せよ。
1. 合計金額が10000円以上の場合は送料無料
2. 合計金額が10000円未満の場合：
   - 通常配送の場合：
     - 近畿地方：500円
     - その他：800円
   - 速達配送の場合：
     - 近畿地方：1000円
     - その他：1500円

```javascript
let totalPrice = 7000;
let region = "近畿";
let shippingMethod = "通常";

//WRITE ME!!

console.log("商品合計: " + totalPrice + "円");
console.log("配送先: " + region);
console.log("配送方法: " + shippingMethod);
console.log("配送料: " + shippingCost + "円");
console.log("最終金額: " + finalPrice + "円");
```

<details><summary>入力と出力</summary>

例1
```
[in]
totalPrice = 7000
region = "近畿"
shippingMethod = "通常"

[out]
商品合計: 7000円
配送先: 近畿
配送方法: 通常
配送料: 500円
最終金額: 7500円
```

例2
```
[in]
totalPrice = 12000
region = "関東"
shippingMethod = "速達"

[out]
商品合計: 12000円
配送先: 関東
配送方法: 速達
配送料: 0円
最終金額: 12000円
```

例3
```
[in]
totalPrice = 5000
region = "関東"
shippingMethod = "速達"

[out]
商品合計: 5000円
配送先: 関東
配送方法: 速達
配送料: 1500円
最終金額: 6500円
```
</details>

---
Congratulations!!  
現時点での演習問題は終わりです。  
[演習問題一覧に戻る](../../README.md#javascript基礎演習)
