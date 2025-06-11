import React from 'react';
import Button from './button';
import add from '../assets/add.svg'
import del from '../assets/x-mark.png'
import { useLocation } from 'react-router-dom';



export default function Header() {
    return (
        <header className="header">
            <p className="header-text">🌍 MY TRAVEL JOURNAL</p>
            {
                useLocation().pathname==='/form'
                    ? <Button check="false" title="CANCEL" image={del} route='/'/>
                    : <Button check="true" title="ADD-MORE" image={add} route='/form'/>
            }

        </header>
    )
}








