// 3. **Swap keys and values of object**
//     - Input:
        
//         ```jsx
//         { a: "x", b: "y", c: "z" }
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { x: "a", y: "b", z: "c" }
// ```




/*        brute force solution    

function swap(obj)
{
    for(let key in obj)
    {
        obj[obj[key]] = key;

        if(obj[key] !== key)
            delete obj[key];
    }

    return obj;
}

let obj =  { a: "x", b: "y", c: "z" , d: "x"};

console.log(swap(obj));

*/


// better approach

function swap(obj)
{
    let result = {};

    for(let key in obj){

        result[obj[key]] = key;
    }

    return result;
}

let obj =  { a: "x", b: "y", c: "z", d: "x" };

console.log(swap(obj));