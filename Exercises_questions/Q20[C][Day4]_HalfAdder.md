### Q20[C]. $`HalfAdder`$

2つの1ビットのバイナリ値を入力として受け取り、半加算器（Half Adder）を実装せよ。  
半加算器は以下の論理回路で構成される：
- 和（Sum）: $S = A \oplus B$（XOR 演算）
- 桁上げ（Carry）: $C = A \land B$（AND 演算）

出力は次のようになる。
|  $A$  |  $B$  |  $S$  |  $C$  | 
| :---: | :---: | :---: | :---: | 
| false | false | false | false | 
| false | true  | true  | false | 
| true  | false | true  | false | 
| true  | true  | false | true  | 

```javascript

function halfAdder(A, B) {
    let sum = false;
    let carry = false;

    // WRITE ME!!

    return { sum, carry }
}

let A = false;
let B = false;

let result = halfAdder(A, B);
console.log("Sum:", result.sum);
console.log("Carry:", result.carry);

function or(a, b) {
    let result = (a == true || b == true) ? true : false;
    return result
}

function and(a, b) {
    let result = (a == true && b == true) ? true : false;
    return result
}

function not(a) {
    return a == true ? false : true;
}

```

<details><summary>入力と出力</summary>

入出力例1
```
[in]
A = false
B = false

[out]
Sum: false
Carry: false
```

入出力例2
```
[in]
A = false
B = true

[out]
Sum: true
Carry: false
```

入出力例3
```
[in]
A = true
B = false

[out]
Sum: true
Carry: false
```

入出力例4
```
[in]
A = true
B = true

[out]
Sum: false
Carry: true
```
</details>

---
Congratulations!!  
本日の演習問題はこれで終わりです。  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
