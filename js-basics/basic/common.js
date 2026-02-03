

// 17. **Find common keys between two objects**
//     - Input:
        
//         ```jsx
//         { a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["b","c"]
//         ```

function common(obj1, obj2)
{
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);

    let ans = arr1.filter((num) => arr2.includes(num));

    return ans;
}

let obj1 =  { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, c: 5, d: 6 };

console.log(common(obj1, obj2));