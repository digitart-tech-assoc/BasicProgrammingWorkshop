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
let A = true;
let B = false;

// WRITE ME!!

console.log("A: " + A + ", B: " + B);
console.log("Sum: " + S + ", Carry: " + C);
```

<details><summary>入力と出力</summary>

入出力例1
```
[in]
A = true
B = false

[out]
A: true, B: false
Sum: true, Carry: false
```

入出力例2
```
[in]
A = true
B = true

[out]
A: true, B: true
Sum: false, Carry: true
```

入出力例3
```
[in]
A = false
B = false

[out]
A: false, B: false
Sum: false, Carry: false
```

</details>
