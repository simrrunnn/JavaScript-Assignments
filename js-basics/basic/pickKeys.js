// 10. **Pick only given keys from object**
//     - Input:
        
//         ```jsx
//         { name: "Rahul", age: 23, city: "Noida" }, ["name","city"]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Rahul", city: "Noida" }
//         ```

function pick(obj, arr)
{
    let ans = {};

    arr.forEach(key => {
        if(key in obj)
        {
            ans[key] = obj[key];
        }
    });

    return ans;
}

let obj = { name: "Rahul", age: 23, city: "Noida" };
let arr =  ["name","city"];

console.log(pick(obj, arr));