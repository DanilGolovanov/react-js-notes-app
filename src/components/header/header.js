import React from 'react';
import './header.css';
import { removeItem } from '../../services/storage.js';
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function Header(props) { 

    function reset() {
        removeItem('notes');
        props.setNotes([]);
    }

    return (
        <header className="header">
            <div className="clearAll"></div>
            <div className="head-col">
                <p className="title-head">Notes</p>
                <p className="align-self-end danil">by Danil Golovanov</p>
            </div>       
            <div className="clearAll">
                <AwesomeButton id="clean" onPress={reset} type="primary">Clear All</AwesomeButton>
            </div>
        </header>
    );
}

export default Header;