### Q3[A]. $`BMI`$

BMI（Body Mass Index, 体格指数）は体重と身長から算出される値で、次の式で計算される。
> $`BMI = \frac{体重(kg)}{身長(m)^2}`$

BMIの値によって次のように分類される：18.5未満 : やせ型, 18.5以上25未満 : 標準, 25 以上 : 肥満  
体重と身長を入力として受け取り、BMIを算出し、その結果に応じて「やせ型」「標準」「肥満」を出力せよ。
```javascript
let weight = 60;  // 体重 (kg)
let height = 170;  // 身長 (cm)

let result = "";

// WRITE ME!!

console.log(result);
```

<details><summary>入力と出力</summary>

入出力例１
```
[in]
weight = 60
height = 170

[out]
標準
```
BMIを$`\frac{体重(kg)}{身長(m)^2}`$の式に則って計算すると`20.761245674740486`になり、この値は18.5以上25未満であるため「標準」が出力されます。  

入出力例２
```
[in]
weight = 60.3
height = 155

[out]
肥満
```

入出力例３
```
[in]
weight = 46
height = 167

[out]
やせ型
```

</details>
