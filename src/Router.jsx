//ROUTER

import React from "react";
import {Route, Switch} from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from './Services'
import User from "./User";

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
                <Route exact path={'/contact/name'} component={Name}/>
                <Route path={'/user/:name/:lname'} component={User}/>
                <Route component={Error}/>
            </Switch>


            {/*<About/>*/}
            {/*<Contact/>*/}
        </>
    )
};

export default Router;