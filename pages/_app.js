import React from 'react';
import App from 'next/app';
import auth0 from '../services/auth0';

//******** CSS/SASS *********
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import "react-datepicker/dist/react-datepicker.css";

const nameSpace = 'http://localhost:3000//';


export default class MyApp extends App {
    static async getInitialProps({ Component, ctx}){
        let pageProps = {};
        const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx);
        }
        const isSideOwner = user && user[`${nameSpace}role`] === 'siteOwner';

        const auth = { user, isAuthenticated: !!user, isSideOwner};
        return { pageProps, auth };
    }



    render(){
        const { Component, pageProps, auth} = this.props;
        return(
            <Component {...pageProps} auth = {auth} />
        )
    }
}