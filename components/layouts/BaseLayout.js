import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
const { children, className, isAuthenticated, user } = props;
const  headerType  = props.headerType || 'default';

    return(
        <>
            <Head>
                <title>Wojtek Poninski</title>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
            </Head>
            <div className="layout-container">
                <Header className={`port-nav-${headerType}`} isAuthenticated={ isAuthenticated } user={user}/>
                    <main className={`cover ${className}`}>
                        <div className="wrapper">
                            {children}
                        </div>
                    </main>
            </div>
        </>
    )
}

export default BaseLayout;