const fs = require('fs');

fs.mkdir('mydir',(err)=>{
    if(err)
        console.log('Error creating directory:',err);
    else
    console.log('Directory created!');
})