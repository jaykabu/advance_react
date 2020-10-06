import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <>
        {/*<div>*/}
        {/*  <Appp />*/}
        {/*<ContextApi/>*/}
        {/*<Apicall/>*/}

        <BrowserRouter>
            <Router/>
        </BrowserRouter>

        {/*</div>*/}
    </>,
    document.getElementById('root')
);
