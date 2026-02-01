// 2. **Count word occurrences in array**
//     - Input:
        
//         ```jsx
//         ["apple", "banana", "apple", "orange", "banana", "apple"]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { apple: 3, banana: 2, orange: 1 }
        
//         ```

function countWord(arr)
{
    let ans = {};

    arr.forEach(fruit => {
        if(fruit in ans)
            ans[fruit]++;
        else
            ans[fruit] = 1;
    });

    return ans;
}

let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

console.log(countWord(fruits));