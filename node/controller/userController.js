const models = require("../models/book_model.js");

const users = models.user;
module.exports = {
    userLogin: async(req, res) =>{
        try{ 
            req.body = JSON.stringify(req.body)  
           let userDetail = req.body ? JSON.parse(req.body) : undefined;
            let queryCondition = {
                "email" : userDetail.email,
                "password": userDetail.password
            }
            users.find(queryCondition, (err, userDetail) => {
                if(err){
                    res.send({"status":"Invalid Credentials"})
                }else{
                    if(userDetail.length>0){
                        res.json({"status":"success"});
                    }
                    else{
                        res.send({"status":"Invalid Credentials"})
                    }                    
                }
            });
        }
        catch{
            console.log("error")
        }
    }
}