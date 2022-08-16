
import connect from "../../lib/mongodb"
import User from "../../model/schema"

connect();

export default async function handler(req,res){
    console.log("came to handler");
    const {email,password} = req.body;
    const user = User.findOne({email,password});
    if(!user){
        return res.json({status:"Unable to find the user"});
    }
    else{
        
        res.redirect('/');
    }

}