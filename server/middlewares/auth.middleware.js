const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        jwt.verify(token,process.env.JWT_KEY,(err,decoded)=>{
            if(decoded){
                req.body.userID=decoded.userID;
                req.body.userName=decoded.userName;
                next()
            }else{
                res.json({error:err})
            }
        })
    }else{
        res.send("Please Login !")
    }
}

module.exports={auth}