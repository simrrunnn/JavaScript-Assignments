// 1. **Sum values in object arrays**
//     - Input:
        
//         ```jsx
//         { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { food: 60, travel: 20, bills: 100 }
        
//         ```

function sumVal(obj){

    let n = obj.len;

    for(let key in obj)
    {
        let currSum = 0;

        obj[key].forEach(val => {
            currSum += val;
        });

        obj[key] = currSum;
    }

    return obj;
}

let obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };

console.log(sumVal(obj));

