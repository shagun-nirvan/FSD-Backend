const fs = require('fs');

fs.rmdir("mydir",(e) =>{
    if (e){
        console.error("Error deleting directory:",e);
        return;
    }
    console.log("Directory deleted successfully!");
})