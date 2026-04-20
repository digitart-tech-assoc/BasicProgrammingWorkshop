### Q17[B]. $`AliveDays`$

生年月日を入力として受け取り、現在の日付までの経過日数を求めよ。ただし、閏年を考慮すること。([閏年の条件](#241-b5))

```javascript
function isLeapYear(year) {
    //WRITE ME!! (閏年判定)
}

let birthDate = [2005,9,27];

let date = new Date();
let nowDate = [date.getFullYear(),date.getMonth()+1,date.getDate()];

//WRITE ME!!

```

<details><summary>入力と出力</summary>

入出力例1
```
[in]
birthDate = [2005, 9, 27]
nowDate = [2025, 4, 29]

[out]
7154日
```

入出力例2
```
[in]
birthDate = [1837, 3, 25]
nowDate = [2025, 4, 29]

[out]
68701日
```

入出力例3
```
[in]
birthDate = [2022, 8, 8]
nowDate = [2025, 4, 29]

[out]
995日
```

</details>

---
[答え](../Exercises_answers/Day4/Q17[B][Day4]_AliveDays.js)

[次の問題へ進む](Q18[B][Day4]_Lottery.md)  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
