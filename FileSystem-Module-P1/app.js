const fs = require('fs');
//Creates a new file
// fs.writeFile('example.txt', "this is an example", (err)=> {
//     if(err){
//         console.log(err)
//     }
//     else
//     {
//         console.log('File Created')
//         fs.readFile('example.txt', 'utf8', (err, file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else
//             {
//                 console.log(file)
//             }
//         })   
//     }
// })

// fs.rename('example.txt', 'example2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }
//     else
//     {
//         console.log('Success')
//     }
// })

// fs.appendFile('example2.txt', ' Some data', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else
//     {
//         console.log('Success')
//     }
// })

// fs.unlink('example2.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else
//     {
//         console.log('Success')
//     }
// })