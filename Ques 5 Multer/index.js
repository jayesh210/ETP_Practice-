const express=require('express')
const path =require('path')
const app=express()
const multer=require('multer')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"Images")
    },
    filename:(req,file,cb)=>{
        console.log(file);
        cb(null,Date.now()+path.extname(file.originalname));
    }
})
const upload=multer({storage:storage})

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})
app.post('/upload',upload.single("image"),(req,res)=>{
    res.send("<h1>Image Uploaded Successfully!</h1>")
})


app.listen(800,()=>console.log("server listening on localhost:800"));
