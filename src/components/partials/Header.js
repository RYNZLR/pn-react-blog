import Navigation from './Navigation'
import React from 'react';

import Technologies from '../display/Technologies'

import { useLocation } from 'react-router-dom'

export default function Header(){

    const location = useLocation().pathname;
    const sizeName = location === "/" ? "large" : "small"

    return(
        <header className={sizeName}>
            <Navigation/>

            {
                sizeName === "large" ? <Technologies/> : ""
            }
        </header>
    );

}