import React from 'react';
import About from '../pages/about';
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
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      </div>
          </aside>
      </>
  );
 
}


function Home() {
    return <h2>Home</h2>;
  }
  

  
  function Users() {
    return <h2>Users</h2>;
  }



export default Sidebar