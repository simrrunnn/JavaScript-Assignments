// 14. **Capitalize string values inside object**
//     - Input:
        
//         ```jsx
//         { name: "alice", city: "delhi" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { name: "Alice", city: "Delhi" }
//         ```

function capitalize(obj)
{
    for(key in obj)
    {
        let str = obj[key].split("");

        str[0] = str[0].toUpperCase();

        obj[key] = str.join("");
    }

    return obj;
}

let obj = { name: "alice", city: "delhi" };

console.log(capitalize(obj));