// 8. Find student with highest average mark
//     - Input:
        
//         ```jsx
//         { A: [80, 90], B: [70, 75, 85] }
//         ```
        
//     - Output:
        
//         ```jsx
//         A
//         ```

function average(obj)
{
    let ans = -1;
    let winner = "";

    for(key in obj)
    {
        let sum =0, count =0;

        obj[key].forEach(mark => {
            sum += mark;
            count++;
        });

        let avg = sum/count;

        if(ans < avg){
            ans = avg;
            winner = key;
        }
    }

    return winner;
}

let obj = { A: [80, 90], B: [70, 75, 85] };

console.log(average(obj));