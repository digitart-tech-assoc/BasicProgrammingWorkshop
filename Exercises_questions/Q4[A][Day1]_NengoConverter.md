### Q4[A]. $`NengoConverter`$

入力された西暦の年に対して、その年に対応する年号とその年号における年を表示せよ。  
昭和より前の年号に対しては「昭和以前です。」と表示すること。 

年号の対応は以下の通り：昭和:1926~, 平成:1989~, 令和:2019~ 

```javascript
let year = 2000;

let era = "";
let eraYear = 0;

// WRITE ME!!

console.log(era + eraYear + "年");
```

<details><summary>入力と出力</summary>

入出力例１
```
[in]
year = 2000

[out]
平成12年
```
2000年は平成1年(1989年)以降であり、平成1年から数えて12年目なので「平成12年」が出力されます。

入出力例２
```
[in]
year = 2019

[out]
令和1年
```

入出力例３
```
[in]
year = 1920

[out]
昭和以前です。
```

</details>

---
[次の問題へ進む](Q5[A][Day1]_LeapYear.md)  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
