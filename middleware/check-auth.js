const jwt=require('jsonwebtoken');

function checkAuth(req,res,next){
    try{
        const token=req.headers.authorization.split(" ")[1];
        const decodedToken=jwt.verify(token,process.env.JWT_KEY);
        req.userData=decodedToken;
        next(); //pass the middleware to the next middleware or function after doing the above
    }catch(e){
        return res.status(401).json({
            'message':"invalid or expired token provided!",
            'error':e
        });
    }
}

module.exports={
    checkAuth:checkAuth
}