// 9. **Unique values across all object arrays**
//     - Input:
        
//         ```jsx
//         { x: [1,2,3], y: [2,3,4], z: [4,5] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [1,2,3,4,5]
        
//         ```

function unique(obj)
{
    let ans = [];
    for(key in obj)
    {
        obj[key].forEach(num => {
            if(!ans.includes(num))
            {
                ans.push(num);
            }
        });
    }

    return ans;
}

let obj =   { x: [1,2,3], y: [2,3,4], z: [4,5] };

console.log(unique(obj));