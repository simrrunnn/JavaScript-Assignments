

// 18. **Convert array of objects to lookup by id**
//     - Input:
        
//         ```jsx
//         [{ id: 1, name: "A" }, { id: 2, name: "B" }]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { 1: { id:1, name:"A" }, 2: { id:2, name:"B" } }
//         ```

function lookup(arr)
{
    let ans = {};
    for(let i=1;i<(arr.length)+1;i++)
    {
        ans[i] = arr[i-1];
    }

    return ans;
}

let arr =  [{ id: 1, name: "A" }, { id: 2, name: "B" }];

console.log(lookup(arr));