
import connect from "../../lib/mongodb"
import User from "../../model/schema"

connect();

export default async function handler(req,res){
    console.log("came to handler");
    try {
        console.log("came to try");
        const user = await User.create(req.body);
        console.log("came to handler");
       
        res.redirect('/')
        if(!user){
            return res.json({code:"User Not Created"})
        }
    } catch (error) {
        
        res.status(400).json({"status": "Bad Request"});
    }
}