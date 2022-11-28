const fs = require('fs')


// Create a file with fs.open function
fs.open("newFile.txt",'w',(err)=>{
    if(err) throw err ;
    else console.log("File created successfully");
    }
)
// Write the content in the file
fs.writeFile("newFile.txt","This is a client.\n",(err)=>{
    if(err) console.log(err);
    else console.log("File created successfully");
})
// Append the content
fs.appendFile("newFile.txt","This is added file",(err)=>{
    if(err) console.log(err);
    else console.log("File Updated successfully");
})
// Delete the file
fs.unlink("newFile.txt",(err)=>{
    if(err) console.log(err);
    else console.log("File Deleted successfully");
})