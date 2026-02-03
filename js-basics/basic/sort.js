// 12. **Sort object entries by values (ascending)**
//     - Input:
        
//         ```jsx
//         { a: 3, b: 1, c: 2 }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         [["b",1], ["c",2], ["a",3]]
//         ```

function customSort(obj)
{
   let arr = Object.entries(obj);

   arr.sort(([key1, val1], [key2, val2]) => val1 - val2);

   return arr;
}

let obj =  { a: 3, b: 1, c: 2 };

console.log(customSort(obj));
