let fs=require("fs");
let path=require("path");
let filepath=path.join(__dirname,"..","todo","todo.js");

class todo{

    static getdata(){
        return new Promise((resolve,reject)=>{
            fs.readFile(filepath,{encoding:"utf-8"},(err,data)=>{
                if(err) return reject(err.message);
                if(data.length==0){
                    resolve("No task found");
                }
                else{
                    resolve(JSON.parse(data));
                }
            })
        })
    }
    static writedata(value){  
    return new Promise((resolve,reject)=>{
        fs.readFile(
            filepath,
            {
                encoding:"utf-8"
            },
            (err,data)=>{
                if(err) return reject(err.message);
               if(data.length==0){
                data=[]
               }else{
                data=JSON.parse(data);
               }
                
                data.push(value);
                fs.writeFile(
                    filepath,
                    JSON.stringify(data),
                    (err)=>{
                        if(err) return reject(err.message);
                        resolve(`${value.name} task added successfully`);
                    }
                )
                
            }
       
           ) 
    })
   }
   static deletedata(id){
    return new Promise((resolve,reject)=>{
        fs.readFile(filepath,{encoding:"utf-8"},(err,data)=>{
            if(err) return reject(err.message);
            if(data.length==0){
                resolve("todolist is empty");

            }
            else{
                data=JSON.parse(data);

            }
            
                data=data.filter(element=>
                    element.id!==id
                )
            
        fs.writeFile(
            filepath,
            JSON.stringify(data),
            (err)=>{
                if(err) return reject(err.message);
                resolve(`${value} removed successfully`);}
        )
    })
})

    }
    static editdata(id,edittask){
       return new Promise((resolve,reject)=>{
        fs.readFile(filepath,{encoding:"utf-8"},(err,data)=>{
            if(err) return reject(err.message);
            if(data.length==0){
                resolve("todolist is empty");
            }
            else{
                data=JSON.parse(data);
            }

            data.forEach(element=>{
                if(element.id===id){
                    element.name=edittask;
                }
            })
            fs.writeFile(filepath,JSON.stringify(data),(err)=>{
                if(err) return reject(err.message);
                resolve(`${name} successfully changed to ${edittask}`)
                
            })

        })
       })
    }
   
}

module.exports=todo;