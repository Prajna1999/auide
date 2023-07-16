// middleware to check if the user is authenticated
const jwt=require('jsonwebtoken');
require('dotenv').config();
const ensureAuthenticated=(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}

function ensureAuthorized(...allowedRoles) {
    return (req, res, next) => {
        const userRole = req.user.role;
        
        if (!allowedRoles.includes(userRole)) {
            return res.status(403).json({ error: 'Access denied' });
        }
        
        // proceed to the next middleware
        next();
    }
}


module.exports={ensureAuthenticated, ensureAuthorized};