// 4. **Find the largest value key**
//     - Input:
        
//         ```jsx
//         { a: 10, b: 50, c: 20 }
        
//         ```
        
//     - Output:
        
//         ```
//         b
        
//         ```

function largest(obj)
{
    let ans = "";
    let maxi = -1;
    for(let key in obj)
    {
        if(obj[key] > maxi){
            ans = key;
            maxi = obj[key];
        }
    }

    return ans;
}

let obj ={ a: 10, b: 50, c: 20 };

console.log(largest(obj));