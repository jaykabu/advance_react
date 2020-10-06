//ROUTER

import React from "react";
import {Route, Switch} from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from './Services'

const Router = () => {
    const Name = () => {
        return <h1>JAY</h1>
    }
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={() => <About name={'About'}/>}/>
                <Route exact path={'/contact'} component={Contact}/>
                <Route exact path={'/services'} component={() => <Services name={'services'}/>}/>
                <Route path={'/contact/name'} component={Name}/>
                <Route component={Error}/>
            </Switch>


            {/*<About/>*/}
            {/*<Contact/>*/}
        </>
    )
};

export default Router;