import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appp from "./Appp";
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";
import Bstrp from "./Bstrp";
import ContextApi from "./ContextApi";
import Apicall from "./Apicall";

ReactDOM.render(
    <>
        {/*<div>*/}
        {/*  <Appp />*/}
        {/*<ContextApi/>*/}
        <Apicall/>

        {/*//website create// all method create*/}
        {/*        <BrowserRouter>*/}
        {/*            <Router/>*/}
        {/*        </BrowserRouter>*/}

        {/*//bootstrap create*/}
        {/*        <Bstrp/>*/}
        {/*</div>*/}
    </>,
    document.getElementById('root')
);
