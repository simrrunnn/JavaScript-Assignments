// 5. **Flatten object of arrays into one array**
//     - Input:
        
//         ```jsx
//         { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         ["apple", "banana", "carrot", "pea"]
//         ```

function flatten(obj)
{
    let ans = [];
    for(let key in obj)
    {
        obj[key].forEach(fruit => {
            ans.push(fruit);
        });
    }

    return ans;
}

let obj =   { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };

console.log(flatten(obj));