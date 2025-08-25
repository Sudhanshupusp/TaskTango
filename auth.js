const jwt = require("jsonwebtoken")
const JWT_SECRET = "TangoSecret"

function auth (req, res, next){
    const token=req.headers.token;
    const response = jwt.verify(token, JWT_SECRET);

    if(response){
        req.userId= token.userId;
        next();

    } else{
        res.status(403).json({
            message: "Incorrect Creds"
        })
    }

    
}

module.exports = {
    auth,
    JWT_SECRET
}