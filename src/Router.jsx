//ROUTER

import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom'
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import Services from './Services'
import User from "./User";
import Search from "./Search";
import Home from "./Home";

const Router = () => {
    const Name = () => {
        return <h1>JAY</h1>
    }
    return (
        <>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/about'} component={() => <About name={'About'}/>}/>
                <Route exact path={'/contact'} component={Contact}/>
                <Route exact path={'/services'} component={() => <Services name={'services'}/>}/>
                <Route exact path={'/search'} component={Search}/>
                <Route exact path={'/contact/name'} component={Name}/>
                <Route exact path={'/user/:name/:lname'} component={User}/>
                <Route component={Error}/>
                <Redirect to={'/'}/>
            </Switch>


            {/*<About/>*/}
            {/*<Contact/>*/}
        </>
    )
};

export default Router;