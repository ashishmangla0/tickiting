import React from 'react';
import {
    BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
const Sidebar = () => {
    return (
        <>
            <style jsx="true">{`
            .aside-left{
                width: 230px;
                padding-right: 1.25rem;
                padding-bottom: 4rem;
                overflow-x: hidden;
            }
           `}
            </style>
            <aside className="aside-left">
            <Router>
            <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/tickets">Tickets</Link>
                    </li>
                </ul>   
                <Switch>
          <Route path="/projects">
            <About />
          </Route>
          <Route path="/tickets">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </Router>
               </aside>

        </>

    )

}




export default Sidebar