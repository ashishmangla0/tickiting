import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
const Layout = ({children}) => {
    return (
        <>
        <Sidebar/>
        
        <aside className="aside-right">
        <Header />
            <main>
                {children}
            </main>
            <Footer />
        </aside>

            
               
        </>
    )
}


export default Layout