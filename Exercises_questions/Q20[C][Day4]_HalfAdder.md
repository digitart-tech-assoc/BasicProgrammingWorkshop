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

    // ここにコードを入力

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

> [!NOTE]
> すでにビット計算で必要な関数を実装してある。    
> `and(A,B)`, `or(A,B)`, `not(A)`の関数が上のサンプルコードに定義されている。  
> その関数と、宣言済みの変数のみを使ってコードを書ける。  
> ```javascript
> let A = true
> let B = false
> console.log(and(A,B));
> console.log(or(A,B));
> console.log(not(A));
> console.log(and(A,not(B)))
> > false //AND演算
> > true  //OR演算
> > false //NOT演算
> > true
> ```

> [!TIP]
> この演算を「半加算器」と呼ぶ。  
> CPUが計算する上で最も基本となる論理回路である。CPUは二進数(電気信号のON/OFF)を用いて演算を行うため、このように`true`と`false`のみを使用した計算を行っている。  

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
[答え](../../Exercises_answers/Day4/HalfAdder.js)

Congratulations!!  
本日の演習問題はこれで終わりです。  
追加問題もあるよ!!
[追加問題へ](./Day4_extra/Q13_1_Anka+isChild.md)  
[演習問題一覧に戻る](../README.md#javascript基礎演習)
