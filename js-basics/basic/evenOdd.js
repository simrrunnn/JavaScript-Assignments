// 16. **Count even and odd numbers in array**
//     - Input:
        
//         ```jsx
//         [1,2,3,4,5,6]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { even: 3, odd: 3 }
//         ```

function count(arr)
{
    let even = arr.filter((num) => num%2 == 0);

    console.log(even);

    let ans = {
        "even" : even.length,
        "odd" : arr.length - even.length
    };
    
    return ans;
}

let arr =    [1,2,3,4,5,6];

console.log(count(arr));