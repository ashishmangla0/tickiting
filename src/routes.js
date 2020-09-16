import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './pages/about';
const Routes = () =>{
    return(
        <>
              <Router>
              <Switch>
              <Route path="/about">
            <About />
          </Route>
           
                         </Switch>
              </Router>
        </>
    )
}

export default Routes