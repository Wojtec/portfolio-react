const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const nameSpace = 'http://localhost:3000//';

// MIDDLEWARE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 15,
        jwksUri: 'https://dev-828n9808.eu.auth0.com/.well-known/jwks.json'
    }),
        audience:'55e7WXrTq2s9lfxMIdnEjtKPohVDR2PY',
        issuer: 'https://dev-828n9808.eu.auth0.com/',
        algorithms: ['RS256']
})
exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if (user && user[nameSpace + 'role'] === role){
        next();
    } else {
        return res.status(401).send({title: "Not Authorized", detail: "You are not authorized to check this data"});
    }
}

