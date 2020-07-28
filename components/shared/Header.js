import React, { Component } from 'react';
import Link from 'next/link';
import { Link as NextLink } from '../../routes';

class Header extends Component {
    render(){
        return(
            <>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/portfolio">
                <a>Portfolio</a>
            </Link>
            <Link href="/cv">
                <a>Cv</a>
            </Link>
            <NextLink route='test' params={{id: '2'}}>
               <a>Test 2</a> 
            </NextLink>
            <NextLink route='/test/5'>
            <a>Test 5</a> 
            </NextLink>
            <style jsx>{`
                a{
                    font-size: 25px;
                }

            `}</style>

            </>

        )
    }
}

export default Header;