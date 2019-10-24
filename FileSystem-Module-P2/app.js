const fs = require('fs')

// fs.mkdir('Tutorial', (err)=>{
//     if(err){
//         console.log(err)
//     }
//     else
//     {

//         fs.writeFile('./Tutorial/Example.txt', '123', (err)=>{
//             if(err){
//                 console.log(err)
//             }
//             else
//             {
//                 console.log('Success')
//             }
//         })




//         // fs.rmdir('Tutorial', (err)=>{
//         //     if(err){
//         //         console.log(err)
//         //     }
//         //     else
//         //     {
//         //         console.log('Successful')
//         //     }
//         // })
//     }
// })

// fs.unlink('./Tutorial/Example.txt', (err)=>{
//     if(err) {
//         console.log(err)
//     }
//     else
//     {
//         fs.rmdir('Tutorial', (err)=>{
//             if(err) {
//                 console.log(err)
//             }
//             else
//             {
//                 console.log('Folder & Files Deleted')
//             }
//         })
//     }
// })

fs.readdir('Tutorial', (err, files) =>{
    if(err){
        console.log(err)
    }
    else
    {
        for(let file of files){
            fs.unlink('./Tutorial/' + file,(err)=>{
                if(err){
                    console.log(err)
                }
            })
        }

        fs.rmdir('Tutorial', (err)=>{
            if(err){
                console.log(err)
            }
            else
            {
                console.log('All file and folder deleted')
            }
        })
    }
})
