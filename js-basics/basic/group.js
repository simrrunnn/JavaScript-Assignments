// 6. **Group people by city**
//     - Input:
        
//         ```jsx
//         [
//           { name: "A", city: "Delhi" },
//           { name: "B", city: "Mumbai" },
//           { name: "C", city: "Delhi" }
//         ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { Delhi: ["A", "C"], Mumbai: ["B"] }
//         ```

function groupBy(arr)
{
    let ans= {};

    arr.forEach(obj => {
        if(obj["city"] in ans)
            ans[obj["city"]].push(obj["name"]);
        else
            ans[obj["city"]] = [obj["name"]];
    });

    return ans;
}

 let arr = [       { name: "A", city: "Delhi" },
           { name: "B", city: "Mumbai" },
          { name: "C", city: "Delhi" }         ];

console.log(groupBy(arr));