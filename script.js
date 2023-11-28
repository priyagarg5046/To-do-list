let express = require('express');
let app=express();
const { v4: uuidv4 } = require('uuid');
let todo = require('./data/JS/script');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/gettodo",async (req,res)=>{
    try{
        let data=await todo.getdata();
        res.send(data);}
        catch(err){
            res.send(err);
        }
    }
);
app.post("/addtodo",async (req,res)=>{

        let {name}=req.body;
        try{
        let response=await todo.writedata({name:name,id:uuidv4()});
        res.send(response);  
        }
        catch(err){
            res.send(err.message)
        }
})
app.get("/deltodo",async (req,res)=>{
    let taskname=req.query.name;
    try{
        let updated=await todo.deletedata(taskname);
        res.send(updated);
    }
    catch(err){
        res.send(err.message);
    }
    
    
})
app.post("/edittodo",async(req,res)=>{
    let {name,edittask}=req.body;
    try{
        let edited=await todo.editdata(name,edittask);
        res.send(edited);
    }
    catch(err){
        res.send(err.message);
    }
})
app.listen(2324,()=>{
    console.log("server started");

})