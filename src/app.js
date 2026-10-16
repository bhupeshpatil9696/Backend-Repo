const express=require("express");
const multer=require("multer");
const app=express();
const{ uploadfile}=require("./services/storage.services.js")

const postModel=require("./model/post.model")

app.use(express.json())

const upload =multer({storage:multer.memoryStorage()})

app.post("/post",upload.single("image") ,async(req,res)=>{
console.log(req.body);
console.log(req.file);

const result=await uploadfile(req.file.buffer);
const post=await postModel.create({
    image:result.url,
    caption:req.body.caption

});
return  res.status(201).json({
    message:"post created",
    post
})
});

app.get("/post",async (req,res)=>{
    const posts= await postModel.find();
     return res.status(200).json({
        message:'the post created',
        posts,
     })
})



module.exports=app