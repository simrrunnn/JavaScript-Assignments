// 19. **Check if all values in object are numbers**
//     - Input:
        
//         ```jsx
//         { a: 1, b: "hello", c: 3 }
        
//         ```
        
//     - Output:
        
//         ```
//         false
//         ```

function numbers(obj)
{
    for(key in obj)
    {
        if(typeof(obj[key]) != numbers)
            return false;
    }
}

let obj =   { a: 1, b: "hello", c: 3 };

console.log(numbers(obj));