import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

import { BrowserRouter as Router } from "react-router-dom";

import './Stage.scss';

function Stage() {
    return (
        <Router>
            <div className="Stage">
                <Header></Header>
                <Sidebar></Sidebar>
                <Main></Main>
                <Footer></Footer>
            </div>
        </Router>
    )
}

export default Stage;