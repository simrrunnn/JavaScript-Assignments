// ```jsx

// ```

// 7. **Filter object by values > 50**
//     - Input:
        
//         ```jsx
//         { a: 20, b: 60, c: 40, d: 90 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { b: 60, d: 90 }
//         ```

let obj = { a: 20, b: 60, c: 40, d: 90 };

let ans = Object.entries(obj).filter(([Key, value]) => value > 50);

let ansObj = Object.fromEntries(ans);

console.log(ans);

console.log(ansObj);