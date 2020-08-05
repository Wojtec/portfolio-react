const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

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
