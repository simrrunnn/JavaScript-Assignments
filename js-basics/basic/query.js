// 15. **Convert object to query string**
//     - Input:
        
//         ```jsx
//         { name: "Alice", age: 25 }
        
//         ```
        
//     - Output:
        
//         ```
//         "name=Alice&age=25"
//         ```

function query(obj)
{

    for(key in obj)
    {
        obj[key] = key + "=" + obj[key];
    }

    let arr = Object.values(obj);

    return arr.join("&");
}

let obj = { name: "Alice", age: 25 };

console.log(query(obj));