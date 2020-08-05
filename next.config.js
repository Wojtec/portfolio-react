const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
require('dotenv').config();
module.exports =  {
    publicRuntimeConfig: {
        domain: process.env.NEXT_PUBLIC_DOMAIN,
       
      },
}