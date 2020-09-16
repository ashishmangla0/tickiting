import React from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import About from './pages/about';
const Routes = () =>{
    return(
        <>
              
              <Switch>
              <Route path="/about" component={About} / >
               </Switch>
           
        
        </>
    )
}

export default Routes
