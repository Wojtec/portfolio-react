import React from 'react';
import App from 'next/app';
import { Auth0Provider } from "@auth0/auth0-react";

//******** CSS/SASS *********
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';


export default class MyApp extends App {
    static async getInitialProps({ Component, router, ctx}){
        let pageProps = {};

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }



    render(){
        const { Component, pageProps} = this.props;
        return(
                <Auth0Provider
                    domain="dev-828n9808.eu.auth0.com"
                    clientId="55e7WXrTq2s9lfxMIdnEjtKPohVDR2PY"
                    redirectUri="http://localhost:3000/callback"
                    scope="read:current_user update:current_user_metadata"
                    >    
                    <Component {...pageProps} />
                </Auth0Provider>
        )
    }
}